function coletar() {
    let reportData = []
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const startDate = new Date(document.querySelector('[data-start-date]').value)
    const endDate = new Date(document.querySelector('[data-end-date]').value)
    const startTime = document.querySelector('[data-start-time]').value
    const endTime = document.querySelector('[data-end-time]').value
    //TODO adicionar 'todas as datas'
    //TODO validar as entradas: start < end

    for (let date = startDate, month; date <= endDate; date.setDate(date.getDate() + 1)) {
        // To get only one file per month we skip one loop when the month was already checked
        if (month == date.getMonth()) continue

        month = date.getMonth()
        let year = date.getFullYear().toString().slice(-2)
        let fileName = `01${monthName[month]}${year}.csv`
        
        getFile(fileName, reportData)
    }

    fillTable(reportData)
}

function getFile(csvFile, reportData) {
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
        
        // Return if dataRows have less than (header row + at least 1 data row)
        if (dataRows.length < headerIndex + 2) return

        for (let i = headerIndex + 1; i < dataRows.length; i++) {
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
}

function fillTable(reportData) {
    const table = document.querySelector('[data-table]')

    // clear table
    table.innerHTML = ''

    // Return if no data was found
    if ($.isEmptyObject(reportData)) {
        table.innerHTML = '<tr><td>Nenhum registro encontrado</td></tr>'
        return
    }

    // TODO verificar se todos os objetos tem as mesmas chaves
    // TODO retirar espacos em branco?
    let headers = document.createElement('tr')
    for (prop in reportData[0]) {
        headers.innerHTML += `<th>${prop}</th>`
    }
    table.appendChild(headers)

    reportData.forEach(dataRow => {
        let tableRow = document.createElement('tr')

        for (prop in dataRow) {
            tableRow.innerHTML += `<td><input type="text" value="${dataRow[prop]}" readonly></td>`
        }
        
        table.appendChild(tableRow)
    })

    addReportDate()
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