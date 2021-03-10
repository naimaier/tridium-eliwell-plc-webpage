class XlsBuilder {

    constructor() {
        // TODO We assume all elements have the same number of keys
        this.headers = Object.keys(reportData[1])
        
        this.totalColumns = this.headers.length
        // precisa ter ao menos uma coluna
        this.totalRows = reportData.length
        //TODO weak?
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        this.currentRow = 1

        // Document strings
        this.stringList = []
        this.totalStringCount = 0
    }

    increaseRowCount() {
        this.currentRow++
    }

    increaseTotalStringCount() {
        this.totalStringCount++
    }
    
    buildSheet() {
        if (this.totalRows <= 0) {
            //TODO
            return false
        }
        
        let sheetData = this.createLogoCells()

        sheetData += this.createTitleCells()

        sheetData += this.createHeaderCells()

        for (let row in reportData) {
            sheetData += this.createRow(reportData[row])
        }
        //ver
        let sheet = createSheetHeader(this.totalRows, this.totalColumns, this.alphabet)
        sheet += sheetData
        sheet += createSheetFooter(this.totalColumns, this.alphabet)
    
        return sheet
    }

    buildSharedStrings() {
        const uniqueCount = this.stringList.length
        const count = this.totalStringCount
        let code = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="${count}" uniqueCount="${uniqueCount}">`

        for (let i = 0; i < uniqueCount; i++) {
            code += `<si><t xml:space="preserve">${this.stringList[i]}</t></si>`
        }

        code += `</sst>`

        return code
    }

    buildDrawing() {
        const firstLogoColumn = 0
        const lastLogoColumn = this.totalColumns - 1
        const middleLogoStartColumn = Math.floor(lastLogoColumn/2)
        const middleLogoEndColumn = Math.ceil(lastLogoColumn/2)

        const offsetFactor = 1180170

        const firstXOffset = 0
        const middleXOffset = Math.ceil(this.totalColumns/2) * offsetFactor//4704840
        const lastXOffset = this.totalColumns * offsetFactor//9441360

        let middleFromOffset = 0
        let middleToOffset = 1348560

        if (this.totalColumns % 2 == 0) {
            middleFromOffset = 658800
            middleToOffset = 658440
        }
        
        return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"
            xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
            xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
            <xdr:twoCellAnchor editAs="oneCell">
                <xdr:from>
                    <xdr:col>${firstLogoColumn}</xdr:col>
                    <xdr:colOff>0</xdr:colOff>
                    <xdr:row>0</xdr:row>
                    <xdr:rowOff>0</xdr:rowOff>
                </xdr:from>
                <xdr:to>
                    <xdr:col>${firstLogoColumn}</xdr:col>
                    <xdr:colOff>1348920</xdr:colOff>
                    <xdr:row>0</xdr:row>
                    <xdr:rowOff>571680</xdr:rowOff>
                </xdr:to>
                <xdr:pic>
                    <xdr:nvPicPr>
                        <xdr:cNvPr id="0" name="Picture 1" descr=""></xdr:cNvPr>
                        <xdr:cNvPicPr/>
                    </xdr:nvPicPr>
                    <xdr:blipFill>
                        <a:blip r:embed="rId1"></a:blip>
                        <a:stretch/>
                    </xdr:blipFill>
                    <xdr:spPr>
                        <a:xfrm>
                            <a:off x="${firstXOffset}" y="0"/>
                            <a:ext cx="1348920" cy="571680"/>
                        </a:xfrm>
                        <a:prstGeom prst="rect">
                            <a:avLst/>
                        </a:prstGeom>
                        <a:ln>
                            <a:noFill/>
                        </a:ln>
                    </xdr:spPr>
                </xdr:pic>
                <xdr:clientData/>
            </xdr:twoCellAnchor>
            <xdr:twoCellAnchor editAs="oneCell">
                <xdr:from>
                    <xdr:col>${middleLogoStartColumn}</xdr:col>
                    <xdr:colOff>${middleFromOffset}</xdr:colOff>
                    <xdr:row>0</xdr:row>
                    <xdr:rowOff>0</xdr:rowOff>
                </xdr:from>
                <xdr:to>
                    <xdr:col>${middleLogoEndColumn}</xdr:col>
                    <xdr:colOff>${middleToOffset}</xdr:colOff>
                    <xdr:row>0</xdr:row>
                    <xdr:rowOff>571680</xdr:rowOff>
                </xdr:to>
                <xdr:pic>
                    <xdr:nvPicPr>
                        <xdr:cNvPr id="1" name="Picture 2" descr=""></xdr:cNvPr>
                        <xdr:cNvPicPr/>
                    </xdr:nvPicPr>
                    <xdr:blipFill>
                        <a:blip r:embed="rId2"></a:blip>
                        <a:stretch/>
                    </xdr:blipFill>
                    <xdr:spPr>
                        <a:xfrm>
                            <a:off x="${middleXOffset}" y="0"/>
                            <a:ext cx="1348560" cy="571680"/>
                        </a:xfrm>
                        <a:prstGeom prst="rect">
                            <a:avLst/>
                        </a:prstGeom>
                        <a:ln>
                            <a:noFill/>
                        </a:ln>
                    </xdr:spPr>
                </xdr:pic>
                <xdr:clientData/>
            </xdr:twoCellAnchor>
            <xdr:twoCellAnchor editAs="oneCell">
                <xdr:from>
                    <xdr:col>${lastLogoColumn}</xdr:col>
                    <xdr:colOff>360</xdr:colOff>
                    <xdr:row>0</xdr:row>
                    <xdr:rowOff>0</xdr:rowOff>
                </xdr:from>
                <xdr:to>
                    <xdr:col>${lastLogoColumn}</xdr:col>
                    <xdr:colOff>1348920</xdr:colOff>
                    <xdr:row>0</xdr:row>
                    <xdr:rowOff>571680</xdr:rowOff>
                </xdr:to>
                <xdr:pic>
                    <xdr:nvPicPr>
                        <xdr:cNvPr id="2" name="Picture 3" descr=""></xdr:cNvPr>
                        <xdr:cNvPicPr/>
                    </xdr:nvPicPr>
                    <xdr:blipFill>
                        <a:blip r:embed="rId3"></a:blip>
                        <a:stretch/>
                    </xdr:blipFill>
                    <xdr:spPr>
                        <a:xfrm>
                            <a:off x="${lastXOffset}" y="0"/>
                            <a:ext cx="1348560" cy="571680"/>
                        </a:xfrm>
                        <a:prstGeom prst="rect">
                            <a:avLst/>
                        </a:prstGeom>
                        <a:ln>
                            <a:noFill/>
                        </a:ln>
                    </xdr:spPr>
                </xdr:pic>
                <xdr:clientData/>
            </xdr:twoCellAnchor>
        </xdr:wsDr>`
    }

    createLogoCells() {
        let code = `<row r="${this.currentRow}" customFormat="false" ht="45" hidden="false" customHeight="true" outlineLevel="0" collapsed="false">`

        for (let i = 0; i < this.totalColumns; i++) {
            code += `<c r="${this.alphabet[i]}${this.currentRow}" s="1"/>`
        }

        code += `</row>`
        this.increaseRowCount()

        return code
    }

    createTitleCells() {
        let code = `<row r="${this.currentRow}" customFormat="false" ht="45" hidden="false" customHeight="true" outlineLevel="0" collapsed="false">`

        let stringNumber = this.includeString('PLANILHA DE CONTROLE')
        code += `<c r="A${this.currentRow}" s="1" t="s"><v>${stringNumber}</v></c>`

        for (let i = 1; i < this.totalColumns; i++) {
            code += `<c r="${this.alphabet[i]}${this.currentRow}" s="1"/>`
        }

        code += `</row>`
        this.increaseRowCount()

        return code
    }

    createHeaderCells() {
        let code = `<row r="${this.currentRow}" customFormat="false" ht="45" hidden="false" customHeight="true" outlineLevel="0" collapsed="false">`
        
        let stringNumber

        for (let i = 0; i < this.totalColumns; i++) {
            stringNumber = this.includeString(this.headers[i])
            code += `<c r="${this.alphabet[i]}${this.currentRow}" s="3" t="s"><v>${stringNumber}</v></c>`
        }

        code += `</row>`
        this.increaseRowCount()

        return code
    }
    
    createRow(row) {
        let code = `<row r="${this.currentRow}" customFormat="false" ht="15" hidden="false" customHeight="true" outlineLevel="0" collapsed="false">`
        
        let stringNumber
        
        for (let i = 0; i < this.totalColumns; i++) {
            stringNumber = this.includeString(row[this.headers[i]])
            code += `<c r="${this.alphabet[i]}${this.currentRow}" s="5" t="s"><v>${stringNumber}</v></c>`
        }

        code += `</row>`
        this.increaseRowCount()

        return code
    }

    includeString(string) {
        this.increaseTotalStringCount()
        // Include String in Sharedstrings if not already present and get the index
        if (this.stringList.includes(string)) {
            return this.stringList.indexOf(string)
        }

        let index = this.stringList.push(string) - 1

        return index
    }
}