function exportXls() {
    let xls
    
    try {
        xls = new XlsBuilder(collectedData)
    } catch (e) {
        alert(e.message)
        return
    }

    // Disable export button while exporting data
    disableExportButton(true)
    
    let zip = new JSZip()
    // ROOT
    zip.file("[Content_Types].xml", contentTypes)
    
    // RELS
    zip.folder("_rels").file(".rels", rels)
    
    // DOCPROPS
    zip.file("docProps/app.xml", app)
    zip.file("docProps/core.xml", core)

    // XL
    let xl = zip.folder("xl")

    
    xl.file("_rels/workbook.xml.rels", rels_workbook)
    
    let drawings = xl.folder("drawings")
    drawings.file("_rels/drawing1.xml.rels", drawings_rels)
    
    // MEDIA
    xl.file(`media/image1.png`, image1, { base64: true })
    xl.file(`media/image2.png`, image2, { base64: true })
    xl.file(`media/image3.png`, image3, { base64: true })
    
    let worksheets = xl.folder("worksheets")
    worksheets.file("_rels/sheet1.xml.rels", worksheets_rels)

    worksheets.file("sheet1.xml", xls.buildSheet())
    
    drawings.file("drawing1.xml", xls.buildDrawing())

    //Root
    xl.file("sharedStrings.xml", xls.buildSharedStrings())
    xl.file("styles.xml", styles)
    xl.file("workbook.xml", workbook)

    // Download
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        saveAs(content, "example.xlsx")
        
        // Enable export button back again (if data is avaliable)
        manageExportButton()
    })

}