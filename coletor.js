var reportData = []

window.onload = () => {
    resetDateSpanInputs()
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
    
    console.log(`Start: ${startDate}`)
    console.log(`End: ${endDate}`)
    
    console.time('Tempo total de execução')
    
    reportData = []
    clearTable()

    parseLogs(startDate, endDate)

    console.time('Formatando data')
    for (i in reportData) {
        formatDateFromLogRowObject(reportData[i])
    }
    console.timeEnd('Formatando data')

    displayTablePage(1)

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
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    for (let date = new Date(startDate), month; date <= endDate; date.setDate(date.getDate() + 1)) {
        // To get only one file per month we skip one loop when the month was already checked
        if (month == date.getMonth()) continue
        
        // Define file name
        month = date.getMonth()
        let year = date.getFullYear().toString().slice(-2)
        let fileName = `01${monthName[month]}${year}.CSV`
        
        searchAndParseFile(fileName)
    }

    // Remove entries before selected start date
    while (!$.isEmptyObject(reportData) &&
     getDateFromLogRowObject(reportData[0]) < startDate) {
        reportData.splice(0, 1)
    }

    // Remove entries after selected end date
    while (!$.isEmptyObject(reportData) &&
     getDateFromLogRowObject(reportData[reportData.length - 1]) > endDate) {
        reportData.splice(reportData.length - 1, 1)
    }
}

function searchAndParseFile(csvFile) {
    console.time('Lendo csv')
    $.ajax({
        url: csvFile,
        async: false,
        cache: false,
        dataType: 'text'
    }).done(data => {
        // TODO callback?
        const headerIndex = 0
        const dataRows = data.split('\n') //TODO verificar o regex /\r?\n|\r/
        const headers = dataRows[headerIndex].split(',')
        const rowsAmount = dataRows.length
        
        // Return if dataRows have less than (header row + at least 1 data row)
        if (rowsAmount < headerIndex + 2) return

        for (let i = headerIndex + 1; i < rowsAmount; i++) {
            // Break if string is empty
            if (!dataRows[i]) continue

            const dataColumns = dataRows[i].split(',')
            let dataRow = {}
            for (column in dataColumns) {
                dataRow[headers[column]] = dataColumns[column]
            }
            reportData.push(dataRow)
        }
    })
    console.timeEnd('Lendo csv')
}

function displayTablePage(pageNumber) {
    const table = document.querySelector('[data-table]')
    const maxTableRows = 30
    const maxNavigatorSize = 7 // Must be an odd number
    console.time('Preenchendo tabela')
    
    clearTable()

    // Return if no data was found
    if ($.isEmptyObject(reportData)) {
        table.innerHTML = '<tr><td>Nenhum registro encontrado</td></tr>'
        return
    }

    // TODO verificar se todos os objetos tem as mesmas chaves
    // TODO retirar espacos em branco?
    addTableHeaders(table)

    const totalPages = Math.ceil(reportData.length / maxTableRows)
    
    addTableNavigator(pageNumber, totalPages, maxNavigatorSize)

    addTableContent(table, pageNumber, maxTableRows)

    console.timeEnd('Preenchendo tabela')
    addReportDate()
}

function clearTable() {
    const table = document.querySelector('[data-table]')
    table.innerHTML = ''
    const reportDateParagraph = document.querySelector('[data-report-date]')
    reportDateParagraph.innerHTML = ''
}

function addTableHeaders(table) {
    let headers = document.createElement('tr')
    for (prop in reportData[0]) {
        headers.innerHTML += `<th>${prop}</th>`
    }
    table.appendChild(headers)
}

function addTableContent(table, pageNumber, maxTableRows) {
    const firstItem = (pageNumber - 1) * maxTableRows
    let lastItem = (pageNumber * maxTableRows) - 1
    
    if (lastItem > (reportData.length - 1)) {
        lastItem = reportData.length - 1
    }
    
    for (let i = firstItem; i <= lastItem; i++) {
        let tableRow = document.createElement('tr')

        for (prop in reportData[i]) {
            tableRow.innerHTML += `<td><input type="text" value="${reportData[i][prop]}" readonly></td>`
        }
        table.appendChild(tableRow)
    }
}

function addTableNavigator(currentPage, totalPages, maxNavigatorSize) {
    const navigationElement = document.querySelector('[data-table-nav-container]')
    navigationElement.innerHTML = ''

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

    addNavigationButtons(currentPage, indexes, navigationElement)
}

function addNavigationButtons(currentPage, indexes, navigationElement) {

    // creating previous button
    const btnPrev = createTableNavButton('<', indexes['<'])
    navigationElement.appendChild(btnPrev)

    // creating page number buttons
    for (i in indexes['pages']) {
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
    btnPrevMob.classList.add('table-nav-mobile')
    navigationElement.appendChild(btnPrevMob)

    const btnNextMob = createTableNavButton('>', indexes['>'])
    btnNextMob.classList.add('table-nav-mobile')
    navigationElement.appendChild(btnNextMob)

    let pageCount = document.createElement('p')
    pageCount.innerHTML = `  ${currentPage} / ${indexes['pages'][indexes['pages'].length - 1]}`
    pageCount.classList.add('table-nav-mobile')
    navigationElement.appendChild(pageCount)
}

function createTableNavButton(text, targetPage) {
    const pageButton = document.createElement('button')
    pageButton.innerHTML = text
    pageButton.classList.add('btn-table-nav')
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
    let date = new Date.parse(logRowObject['Date']) // TODO weak
    let splittedTime = logRowObject[' Time'].split(':') //TODO weak
    date.setHours(splittedTime[0])
    date.setMinutes(splittedTime[1])
    date.setSeconds(splittedTime[2])
    
    return date
}

function formatDateFromLogRowObject(logRowObject) {
    const splittedDate = logRowObject['Date'].split('-') // TODO weak
    const dd = splittedDate[2]
    const mm = splittedDate[1]
    const yyyy = splittedDate[0]

    logRowObject['Date'] = `${dd}/${mm}/${yyyy}`
}