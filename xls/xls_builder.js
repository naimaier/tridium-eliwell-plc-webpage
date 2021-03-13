class XlsBuilder {

    constructor(data) {
        if (!Array.isArray(data.content) || data.content.length == 0) {
            throw new Error('Nenhum dado para exportar')
        }

        this.data = data
        
        // Exported columns are limited to the number of items in alphabet
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
            'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        this.currentRow = 0
        
        // precisa ter ao menos uma coluna
        this.totalInputColumns = this.data.headers.length < this.alphabet.length ? 
            this.data.headers.length : this.alphabet.length

        // XLS Document strings
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
        if (this.data.rowCount <= 0) {
            //TODO deal with this
            return false
        }
        
        let sheetData = this.createLogoCells()

        sheetData += this.createTitleCells()

        sheetData += this.createHeaderCells()

        for (let row = 0; row < this.data.rowCount; row++) {
            sheetData += this.createRow(this.data.content[row])
        }
        //ver
        let sheet = createSheetHeader(this.currentRow, this.totalInputColumns, this.alphabet)
        sheet += sheetData
        sheet += createSheetFooter(this.totalInputColumns, this.alphabet)
    
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
        const lastLogoColumn = this.totalInputColumns - 1
        const middleLogoStartColumn = Math.floor(lastLogoColumn/2)
        const middleLogoEndColumn = Math.ceil(lastLogoColumn/2)

        const offsetFactor = 1180170

        const firstXOffset = 0
        const middleXOffset = Math.ceil(this.totalInputColumns/2) * offsetFactor
        const lastXOffset = this.totalInputColumns * offsetFactor

        let middleFromOffset = 0
        let middleToOffset = 1348560

        if (this.totalInputColumns % 2 == 0) {
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
        this.increaseRowCount()

        let code = `<row r="${this.currentRow}" customFormat="false" ht="45" hidden="false" customHeight="true" outlineLevel="0" collapsed="false">`

        for (let i = 0; i < this.totalInputColumns; i++) {
            code += `<c r="${this.alphabet[i]}${this.currentRow}" s="1"/>`
        }

        code += `</row>`

        return code
    }

    createTitleCells() {
        this.increaseRowCount()

        let code = `<row r="${this.currentRow}" customFormat="false" ht="45" hidden="false" customHeight="true" outlineLevel="0" collapsed="false">`

        let stringNumber = this.includeString('PLANILHA DE CONTROLE')
        code += `<c r="A${this.currentRow}" s="1" t="s"><v>${stringNumber}</v></c>`

        for (let i = 1; i < this.totalInputColumns; i++) {
            code += `<c r="${this.alphabet[i]}${this.currentRow}" s="1"/>`
        }

        code += `</row>`

        return code
    }

    createHeaderCells() {
        this.increaseRowCount()

        let code = `<row r="${this.currentRow}" customFormat="false" ht="45" hidden="false" customHeight="true" outlineLevel="0" collapsed="false">`
        
        let stringNumber

        for (let i = 0; i < this.totalInputColumns; i++) {
            stringNumber = this.includeString(this.data.headers[i])
            code += `<c r="${this.alphabet[i]}${this.currentRow}" s="3" t="s"><v>${stringNumber}</v></c>`
        }

        code += `</row>`

        return code
    }
    
    createRow(row) {
        this.increaseRowCount()

        let code = `<row r="${this.currentRow}" customFormat="false" ht="15" hidden="false" customHeight="true" outlineLevel="0" collapsed="false">`
        
        let stringNumber
        
        for (let column = 0; column < this.totalInputColumns; column++) {
            stringNumber = this.includeString(row[column])
            code += `<c r="${this.alphabet[column]}${this.currentRow}" s="5" t="s"><v>${stringNumber}</v></c>`
        }

        code += `</row>`

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