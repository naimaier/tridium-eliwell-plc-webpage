var collectedData = new Object()
collectedData.headers = []
collectedData.content = []
collectedData.rowCount = 0

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

window.onload = () => {
    resetDateSpanInputs()
    manageExportButton()
}

function resetDateSpanInputs() {
    let today = new Date()
    const dd = `0${today.getDate()}`.slice(-2)
    const mm = `0${today.getMonth() + 1}`.slice(-2)
    const yyyy = today.getFullYear()
    today = `${yyyy}-${mm}-${dd}`
    
    document.querySelector('[data-start-date]').value = today
    document.querySelector('[data-end-date]').value = today
}

function coletar() {
    const startDate = getStartDateFromInput()
    const endDate = getEndDateFromInput()
    
    if (startDate > endDate) {
        alert('O início da coleta deve ser antes do fim da coleta!')
        return
    }

    disableCollectButton(true)
    disableExportButton(true)
    displayLoader(true)
    clearContent()

    // Using timeout before continuing execution so
    // the button disable is rendered
    setTimeout(function() {
        collectData(startDate, endDate)
    }, 50)
}

function collectData(startDate, endDate) {

    console.log(`Start: ${startDate}`)
    console.log(`End: ${endDate}`)
    
    console.time('Tempo total de execução')
    
    try {
        parseLogs(startDate, endDate)
    } catch (e) {
        alert(e.message)
        disableCollectButton(false)
        displayLoader(false)
        return
    }

    console.time('Formatando data')

    checkMinimumColumns(collectedData.headers)

    for (let row = 0; row < collectedData.rowCount; row++) {
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

function getStartDateFromInput() {
    const startDate = Date.parse(document.querySelector('[data-start-date]').value)
    let startTime = document.querySelector('[data-start-time]').value
    
    if (!startTime) {
        startTime = '00:00'
    }
    
    const splittedStartTime = startTime.split(':')
    startDate.setHours(splittedStartTime[0])
    startDate.setMinutes(splittedStartTime[1])

    return startDate
}

function getEndDateFromInput() {
    const endDate = Date.parse(document.querySelector('[data-end-date]').value)
    let endTime = document.querySelector('[data-end-time]').value

    if (!endTime) {
        endTime = '23:59'
    }

    const splittedEndTime = endTime.split(':')
    endDate.setHours(splittedEndTime[0])
    endDate.setMinutes(splittedEndTime[1])

    return endDate
}

function parseLogs(startDate, endDate) {
    const monthName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {

        // Define file name
        let day = `0${date.getDate()}`.slice(-2)
        let month = date.getMonth()
        let year = date.getFullYear().toString().slice(-2)
        let fileName = `${day}${monthName[month]}${year}.${fileExtension}`
        
        searchAndParseFile(fileName)
    }

    console.time('Removing before and after')
    // Remove entries before selected start date
    while (collectedData.content.length > 0 &&
     getDateFromLogRowObject(collectedData.content[0]) < startDate) {
        collectedData.content.splice(0, 1)
    }

    // Remove entries after selected end date
    while (collectedData.content.length > 0 &&
     getDateFromLogRowObject(collectedData.content[collectedData.content.length - 1]) > endDate) {
        collectedData.content.splice(collectedData.content.length - 1, 1)
    }
    console.timeEnd('Removing before and after')

    collectedData.rowCount = collectedData.content.length
}

function searchAndParseFile(csvFile) {
    console.time('Lendo csv')
    $.ajax({
        url: csvFile,
        async: false,
        cache: false,
        // Getting the right Charset
        contentType: 'Content-type: text/plain; charset=ISO-8859-1',
        beforeSend: function(jqXHR) {
            jqXHR.overrideMimeType('text/html;charset=ISO-8859-1')
        },
        dataType: 'text'
    }).done(data => {
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
    })
    console.timeEnd('Lendo csv')
}

function displayTablePage(pageNumber) {
    const table = document.querySelector('[data-table]')
    const maxTableRows = 30
    const maxNavigatorSize = 7 // Must be an odd number
    
    clearTable()

    table.removeAttribute('hidden')

    // Return if no data was found
    if (collectedData.rowCount == 0) {
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
    collectedData.rowCount = 0
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