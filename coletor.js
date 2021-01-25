var reportData = []

window.onload = () => {
    let today = new Date()
    const dd = `0${today.getDate()}`.slice(-2)
    const mm = `0${today.getMonth() + 1}`.slice(-2)
    const yyyy = today.getFullYear()
    today = `${yyyy}-${mm}-${dd}`
    
    document.querySelector('[data-start-date]').value = today
    document.querySelector('[data-end-date]').value = today
}

function coletar() {
    reportData = []
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    const startDate = Date.parse(document.querySelector('[data-start-date]').value)
    const endDate = Date.parse(document.querySelector('[data-end-date]').value)
    let startTime = document.querySelector('[data-start-time]').value
    let endTime = document.querySelector('[data-end-time]').value
    
    
    if (!startTime) {
        startTime = '00:00'
    }
    
    if (!endTime) {
        endTime = '23:59'
    }
    
    const splittedStartTime = startTime.split(':')
    startDate.setHours(splittedStartTime[0])
    startDate.setMinutes(splittedStartTime[1])
    
    const splittedEndTime = endTime.split(':')
    endDate.setHours(splittedEndTime[0])
    endDate.setMinutes(splittedEndTime[1])
    
    if (startDate > endDate) {
        alert('O início da coleta deve ser antes do fim da coleta!')
        return
    }
    
    console.log(`Start: ${startDate}`)
    console.log(`End: ${endDate}`)
    clearTable()
    console.time('Tempo total de execução')

    for (let date = new Date(startDate), month; date <= endDate; date.setDate(date.getDate() + 1)) {
        // To get only one file per month we skip one loop when the month was already checked
        if (month == date.getMonth()) continue
        
        // Define file name
        month = date.getMonth()
        let year = date.getFullYear().toString().slice(-2)
        let fileName = `01${monthName[month]}${year}.CSV`
        
        getFile(fileName, reportData)
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

    console.time('Formatando data')
    for (i in reportData) {
        formatDateFromLogRowObject(reportData[i])
    }
    console.timeEnd('Formatando data')

    displayTablePage(1)

    console.timeEnd('Tempo total de execução')
}

function getFile(csvFile, reportData) {
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
    const maxNavigatorSize = 5 // Must be an odd number
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
    
    if (totalPages > 1) {
        addTableNavigator(pageNumber, totalPages, maxNavigatorSize)
    }

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
    const pagesToDisplay = (totalPages > maxNavigatorSize) ? maxNavigatorSize : totalPages
    const pageNumberOffset = parseInt(pagesToDisplay / 2)

    // Defining first and last navigation buttons
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

    addNavigationButtons(firstIndex, lastIndex)
}

function addNavigationButtons(firstIndex, lastIndex) {
    const navigationElement = document.querySelector('[data-pagination]')
    navigationElement.innerHTML = ''

    const btnFirstPage = createIndexButton('<<', 1)
    const btnPrevPage = createIndexButton('<', currentPage - 1)
    if (currentPage == 1) {
        btnFirstPage.disabled = true
        btnPrevPage.disabled = true
    }
    navigationElement.appendChild(btnFirstPage)
    navigationElement.appendChild(btnPrevPage)

    for (let i = firstIndex; i <= lastIndex; i++) {
        let btn = createIndexButton(i, i)

        if (i == currentPage) {
            btn.disabled = true
        }
        navigationElement.appendChild(btn)
    }

    const btnNextPage = createIndexButton('>', currentPage + 1)
    const btnLastPage = createIndexButton('>>', totalPages)
    if (currentPage == lastIndex) {
        btnNextPage.disabled = true
        btnLastPage.disabled = true
    }
    navigationElement.appendChild(btnNextPage)
    navigationElement.appendChild(btnLastPage)
}

function createIndexButton(text, targetPage) {
    const pageButton = document.createElement('button')
    pageButton.innerHTML = text
    pageButton.classList.add('btn-table-nav')
    pageButton.onclick = () => displayTablePage(targetPage)
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