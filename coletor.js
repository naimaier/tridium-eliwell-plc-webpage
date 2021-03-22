var collectedData = new Object()
collectedData.headers = []
collectedData.content = []

// At least 3 columns so the exported log design doesn't break
const minimumAmountOfColumns = 3

// Log file configuration
const delimiter = ';'
const fileExtension = 'TXT'

// Log file content configuration
const headerRowIndex = 1
const dateColumnIndex = 0
const dateColumnLabel = 'Data'
const timeColumnIndex = 1
const timeColumnLabel = 'Hora'

/* Configuring inputs */
window.onload = () => {
    configureDateSpanInputs()
    manageExportButton()
}

function configureDateSpanInputs() {
    $.datepicker.setDefaults({
        regional: 'pt-BR',
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true
    })
    
    const today = new Date()
    $('[data-start-date]').datepicker().datepicker('setDate', today)
    $('[data-end-date]').datepicker().datepicker('setDate', today)
    $('[data-start-time]').timepicker({
        timeFormat: 'HH:mm:ss',
        defaultTime: '00:00:00',
        dropdown: false
    })
    $('[data-end-time]').timepicker({
        timeFormat: 'HH:mm:ss',
        defaultTime: '23:59:59',
        dropdown: false
    })

    $('[data-start-date]').blur(validateDate)
    $('[data-end-date]').blur(validateDate)
}

function validateDate() {
    let selectedDate = $(this).val();
    if (!moment(selectedDate, 'DD/MM/YYYY', true).isValid()){
        $(this).datepicker('setDate', new Date())
    }
}

function getDateTimeFromInput(dateElement, timeElement) {
    let date = $(dateElement).datepicker('getDate')
    const time = document.querySelector(timeElement).value

    const splittedTime = time.split(':')
    date.setHours(splittedTime[0])
    date.setMinutes(splittedTime[1])
    date.setSeconds(splittedTime[2])

    return date
}

/*  */
function coletar() {
    const startDateTime = getDateTimeFromInput('[data-start-date]', '[data-start-time]')
    const endDateTime = getDateTimeFromInput('[data-end-date]', '[data-end-time]')
    console.log(`Start: ${startDateTime}`)
    console.log(`End: ${endDateTime}`)
    
    if (startDateTime > endDateTime) {
        alert('O início deve ser antes do fim da coleta!')
        return
    }

    disableCollectButton(true)
    disableExportButton(true)
    displayLoader(true)
    clearContent()
    
    // Using timeout before continuing execution so
    // the button disable is rendered
    // and css loading animation too
    setTimeout(function() {
        collectData(startDateTime, endDateTime)
    }, 50)
}

function collectData(startDateTime, endDateTime) {
    const searchFileList = getSearchFileList(startDateTime, endDateTime)
    let pendingRequests = searchFileList.length

    let foundFiles = {}
    foundFiles.name = searchFileList.slice() // make a copy of the array
    foundFiles.data = {}
    
    console.time('Tempo total de execução')

    console.time('Requests')
    // For each filename, if the file exists collect the data
    // otherwise remove the filename from the validFileList
    searchFileList.forEach(fileName => {
        searchFile(fileName).done(response => {
            foundFiles.data[fileName] = response
        }).fail(() => {
            foundFiles.name.splice(foundFiles.name.indexOf(fileName), 1)
        }).always(() => {
            pendingRequests -= 1
            if (pendingRequests == 0) {
                console.timeEnd('Requests')
                manageCollectedData(foundFiles, startDateTime, endDateTime)
            }
        })
    })
}

function getSearchFileList(startDateTime, endDateTime) {
    const monthName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    let searchFileList = []

    console.time('Making file list')
    for (let date = new Date(startDateTime); date <= endDateTime; date.setDate(date.getDate() + 1)) {
        // Define file name
        let day = `0${date.getDate()}`.slice(-2)
        let month = date.getMonth()
        let year = date.getFullYear().toString().slice(-2)
        let fileName = `${day}${monthName[month]}${year}.${fileExtension}`
        
        // add to list
        searchFileList.push(fileName)    
    }
    console.timeEnd('Making file list')

    return searchFileList
}

function searchFile(csvFile) {
    return $.ajax({
        url: csvFile,
        cache: false,
        // Getting the right Charset
        contentType: 'Content-type: text/plain; charset=ISO-8859-1',
        beforeSend: function(jqXHR) {
            jqXHR.overrideMimeType('text/html;charset=ISO-8859-1')
        },
        dataType: 'text'
    })
}

function manageCollectedData(foundFiles, startDateTime, endDateTime) {
    try {
        parseLogs(foundFiles, startDateTime, endDateTime)
    } catch (e) {
        alert(e.message)
        disableCollectButton(false)
        displayLoader(false)
        return
    }

    console.time('Formatando data')

    checkMinimumColumns(collectedData.headers)

    const collectedDataRowCount = collectedData.content.length
    for (let row = 0; row < collectedDataRowCount; row++) {
        formatDate(collectedData.content[row])
        checkMinimumColumns(collectedData.content[row])
    }

    console.timeEnd('Formatando data')

    console.time('Preenchendo a tabela')
    displayTablePage(1)
    console.timeEnd('Preenchendo a tabela')

    manageExportButton()
    disableCollectButton(false)
    displayLoader(false)

    console.timeEnd('Tempo total de execução')
}

function parseLogs(foundFiles, startDateTime, endDateTime) {
    foundFiles.name.forEach(fileName => {
        parseData(foundFiles.data[fileName])
    })

    console.time('Removing before and after')
    // Remove entries before selected start date
    while (collectedData.content.length > 0 &&
     getDateFromLogRowObject(collectedData.content[0]) < startDateTime) {
        collectedData.content.splice(0, 1)
    }

    // Remove entries after selected end date
    while (collectedData.content.length > 0 &&
     getDateFromLogRowObject(collectedData.content[collectedData.content.length - 1]) > endDateTime) {
        collectedData.content.splice(collectedData.content.length - 1, 1)
    }
    console.timeEnd('Removing before and after')
}

function parseData(data) {
    // Split text by all forms of new line (carriage return, line feed...)
    const dataRows = data.split(/\r?\n|\r/)
    const rowCount = dataRows.length

    // Get headers by splitting the header row by the delimiter
    // and trimming (getting rid of whitespaces at the start and end of string)
    let fileHeaders = dataRows[headerRowIndex].split(delimiter).map(string => {return string.trim()})

    // Including default column names
    fileHeaders[dateColumnIndex] = dateColumnLabel
    fileHeaders[timeColumnIndex] = timeColumnLabel

    if (collectedData.headers.length == 0) {
        collectedData.headers = fileHeaders
    } else if (!areArrayEquals(collectedData.headers, fileHeaders)) {
        throw new Error('Arquivos de log diferentes')
    }
    
    // Return if row count is less than (header row + at least 1 row of content)
    if (rowCount < headerRowIndex + 2) return

    // Starts the loop after the header row
    for (let row = headerRowIndex + 1; row < rowCount; row++) {

        // Skip loop if string is empty
        if (!dataRows[row]) continue

        const dataColumns = dataRows[row].split(delimiter)

        let columnCount = dataColumns.length
        let dataRow = []
        for (let column = 0; column < columnCount; column++) {
            dataRow[column] = dataColumns[column].trim()
        }

        collectedData.content.push(dataRow)
    }
}

function displayTablePage(pageNumber) {
    const table = document.querySelector('[data-table]')
    const maxTableRows = 30
    const maxNavigatorSize = 7 // Must be an odd number
    
    clearTable()

    table.removeAttribute('hidden')

    // Return if no data was found
    if (collectedData.content.length == 0) {
        table.innerHTML = '<tr><td>Nenhum registro encontrado</td></tr>'
        return
    }

    addTableHeaders(table)

    const totalPages = Math.ceil(collectedData.content.length / maxTableRows)
    
    addTableNavigator(pageNumber, totalPages, maxNavigatorSize)

    addTableContent(table, pageNumber, maxTableRows)

    addReportDate()
}

function clearContent() {
    collectedData.content = []
    collectedData.headers = []
    clearTable()
    clearTableNavigation()
}

function clearTable() {
    const table = document.querySelector('[data-table]')
    table.innerHTML = ''
    const reportDateParagraph = document.querySelector('[data-report-date]')
    reportDateParagraph.innerHTML = ''

    table.setAttribute('hidden', true)
}

function addTableHeaders(table) {
    let headers = document.createElement('tr')
    
    let columnCount = collectedData.headers.length
    for (let column = 0; column < columnCount; column++) {
        headers.innerHTML += `<th>${collectedData.headers[column]}</th>`
    }
    table.appendChild(headers)
}

function addTableContent(table, pageNumber, maxTableRows) {
    const firstItem = (pageNumber - 1) * maxTableRows
    let lastItem = (pageNumber * maxTableRows) - 1
    
    if (lastItem > (collectedData.content.length - 1)) {
        lastItem = collectedData.content.length - 1
    }
    
    for (let row = firstItem; row <= lastItem; row++) {
        let tableRow = document.createElement('tr')

        let columnCount = collectedData.content[row].length
        for (let column = 0; column < columnCount; column++) {
            tableRow.innerHTML += `<td>${collectedData.content[row][column]}</td>`
        }
        table.appendChild(tableRow)
    }
}

function addTableNavigator(currentPage, totalPages, maxNavigatorSize) {
    clearTableNavigation()

    // If there's only one page no navigation is needed
    if (totalPages == 1) {
        return
    }

    const pagesToDisplay = (totalPages > maxNavigatorSize) ? maxNavigatorSize : totalPages
    const pageNumberOffset = parseInt(pagesToDisplay / 2)

    let indexes = {}
    
    let firstIndex
    let lastIndex

    if ((currentPage - pageNumberOffset) < 1) {
        firstIndex = 1
        lastIndex = pagesToDisplay
    } else if ((currentPage + pageNumberOffset) > totalPages) {
        lastIndex = totalPages
        firstIndex = totalPages - (pagesToDisplay - 1)
    } else {
        firstIndex = currentPage - pageNumberOffset
        lastIndex = firstIndex + (pagesToDisplay - 1)
    }

    // add page numbers (options) to be displayed
    indexes['pages'] = []

    for (let i = firstIndex; i <= lastIndex; i++) {
        indexes['pages'].push(i)
    }

    // defining 'previous' and 'next' buttons
    indexes['<'] = currentPage > 1 ? (currentPage - 1) : false
    indexes['>'] = currentPage < totalPages ? (currentPage + 1) : false

    // always dislay first and last elements
    if (indexes['pages'][0] != 1) {
        indexes['pages'][0] = 1
        indexes['pages'][1] = '...'
    }

    if (indexes['pages'][indexes['pages'].length - 1] != totalPages) {
        indexes['pages'][indexes['pages'].length - 1] = totalPages
        indexes['pages'][indexes['pages'].length - 2] = '...'
    }

    addNavigationButtons(currentPage, indexes)
}

function clearTableNavigation() {
    const navigationElement = document.querySelector('[data-table-nav-container]')
    navigationElement.innerHTML = ''
}

function addNavigationButtons(currentPage, indexes) {
    const navigationElement = document.querySelector('[data-table-nav-container]')

    // creating previous button
    const btnPrev = createTableNavButton('<', indexes['<'])
    navigationElement.appendChild(btnPrev)

    // creating page number buttons
    let indexCount = indexes['pages'].length
    for (let i = 0; i < indexCount; i++) {
        let btn
        if (indexes['pages'][i] == '...') {
            btn = createTableNavButton(indexes['pages'][i], false)
        } else if (currentPage == indexes['pages'][i]) {
            btn = createTableNavButton(indexes['pages'][i], false)
        } else {
            btn = createTableNavButton(indexes['pages'][i], indexes['pages'][i])
        }
        navigationElement.appendChild(btn)
    }

    // creating next button
    const btnNext = createTableNavButton('>', indexes['>'])
    navigationElement.appendChild(btnNext)

    // Mobile navigation
    const btnPrevMob = createTableNavButton('<', indexes['<'])
    btnPrevMob.classList.add('collector__table-nav-button--mobile')
    navigationElement.appendChild(btnPrevMob)

    const btnNextMob = createTableNavButton('>', indexes['>'])
    btnNextMob.classList.add('collector__table-nav-button--mobile')
    navigationElement.appendChild(btnNextMob)

    let pageCount = document.createElement('p')
    pageCount.innerHTML = `  ${currentPage} / ${indexes['pages'][indexes['pages'].length - 1]}`
    pageCount.classList.add('collector__table-nav-button--mobile')
    navigationElement.appendChild(pageCount)
}

function createTableNavButton(text, targetPage) {
    const pageButton = document.createElement('button')
    pageButton.innerHTML = text
    pageButton.classList.add('collector__table-nav-button')
    if (targetPage) {
        pageButton.onclick = () => displayTablePage(targetPage)
    } else {
        pageButton.disabled = true
    }
    return pageButton
}

// Add current date at the end of the report
function addReportDate() {
    const date = new Date()
    
    let dd = date.getDate()
    dd = `0${dd}`.slice(-2)

    let mm = date.getMonth() + 1
    mm = `0${mm}`.slice(-2)

    const yyyy = date.getFullYear()

    const fullDate = `${dd}/${mm}/${yyyy}`

    let time = `0${date.getHours()}`.slice(-2)
    time += ':' + `0${date.getMinutes()}`.slice(-2)

    const reportDateParagraph = document.querySelector('[data-report-date]')
    reportDateParagraph.innerText = `Relatório gerado em ${fullDate} às ${time}`
}

function getDateFromLogRowObject(logRowObject) {
    let date = new Date()
    let splittedDate = logRowObject[dateColumnIndex].split('-')

    date.setDate(splittedDate[2])
    date.setMonth(splittedDate[1] - 1)
    date.setFullYear(splittedDate[0])

    let splittedTime = logRowObject[timeColumnIndex].split(':')
    date.setHours(splittedTime[0])
    date.setMinutes(splittedTime[1])
    date.setSeconds(splittedTime[2])
    
    return date
}

function checkMinimumColumns(array) {
    for (let i = array.length; i < minimumAmountOfColumns; i++) {
        array.push('')
    }
}

function formatDate(row) {
    const splittedDate = row[dateColumnIndex].split('-')
    const dd = splittedDate[2]
    const mm = splittedDate[1]
    const yyyy = splittedDate[0]

    row[dateColumnIndex] = `${dd}/${mm}/${yyyy}`
}

function manageExportButton() {
    let disable = !collectedData.content.length > 0
    disableExportButton(disable)
}

function disableExportButton(disable) {
    const exportBtn = document.querySelector('[data-export-button]')
    exportBtn.disabled = disable
}

function disableCollectButton(disable) {
    const collectBtn = document.querySelector('[data-collect-button]')
    collectBtn.disabled = disable
}

function areArrayEquals(array1, array2) {
    let equals = true

    array1.forEach((element, index) => {
        if (element != array2[index]) equals = false
    })

    return equals
}

function displayLoader(display) {
    const loadElement = document.querySelector('[data-loading')
    const table = document.querySelector('[data-table')

    if (display) {
        loadElement.classList.add('collector__loading')
        table.style.opacity = 0.3
    } else {
        loadElement.classList.remove('collector__loading')
        table.style.opacity = 1
    }
}