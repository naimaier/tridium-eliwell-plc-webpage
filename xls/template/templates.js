/* vibra */
const contentTypes = `<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml"/><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="png" ContentType="image/png"/><Default Extension="jpeg" ContentType="image/jpeg"/><Override PartName="/_rels/.rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/drawings/_rels/drawing1.xml.rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Override PartName="/xl/drawings/drawing1.xml" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml"/><Override PartName="/xl/worksheets/_rels/sheet1.xml.rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/_rels/workbook.xml.rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Override PartName="/xl/media/image1.png" ContentType="image/png"/><Override PartName="/xl/media/image2.png" ContentType="image/png"/><Override PartName="/xl/media/image3.png" ContentType="image/png"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>`

/* _rels */
const rels = `<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`

/* docProps */
const app = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Template></Template><TotalTime>0</TotalTime><Application>LibreOffice/6.4.3.2$MacOSX_X86_64 LibreOffice_project/747b5d0ebf89f41c860ec2a39efd7cb15b54f2d8</Application></Properties>`

const core = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:creator></dc:creator><dc:description></dc:description><dc:language>en-US</dc:language><cp:lastModifiedBy></cp:lastModifiedBy><cp:revision>0</cp:revision><dc:subject></dc:subject><dc:title></dc:title></cp:coreProperties>`

/* xl */
const sharedStrings = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="30" uniqueCount="25"><si><t xml:space="preserve">PLANILHA DE CONTROLE</t></si><si><t xml:space="preserve">Data</t></si><si><t xml:space="preserve">Hora</t></si><si><t xml:space="preserve">Rota</t></si><si><t xml:space="preserve">Freteiro</t></si><si><t xml:space="preserve">VolumeMedid</t></si><si><t xml:space="preserve">Temperatura</t></si><si><t xml:space="preserve">VolumeInf.</t></si><si><t xml:space="preserve">Diferença</t></si><si><t xml:space="preserve">14:20:27</t></si><si><t xml:space="preserve">21</t></si><si><t xml:space="preserve">254</t></si><si><t xml:space="preserve">275</t></si><si><t xml:space="preserve">24.5</t></si><si><t xml:space="preserve">10000</t></si><si><t xml:space="preserve">9725</t></si><si><t xml:space="preserve">14:31:11</t></si><si><t xml:space="preserve">545</t></si><si><t xml:space="preserve">24.7</t></si><si><t xml:space="preserve">9455</t></si><si><t xml:space="preserve">14:33:34</t></si><si><t xml:space="preserve">666</t></si><si><t xml:space="preserve">512</t></si><si><t xml:space="preserve">24.8</t></si><si><t xml:space="preserve">9488</t></si></sst>`

const styles = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="2"><numFmt numFmtId="164" formatCode="General"/><numFmt numFmtId="165" formatCode="dd/mm/yyyy"/></numFmts><fonts count="6"><font><sz val="10"/><name val="Arial"/><family val="0"/></font><font><sz val="10"/><name val="Arial"/><family val="0"/></font><font><sz val="10"/><name val="Arial"/><family val="0"/></font><font><sz val="10"/><name val="Arial"/><family val="0"/></font><font><b val="true"/><sz val="14"/><name val="Tahoma"/><family val="0"/></font><font><b val="true"/><sz val="12"/><name val="Cambria"/><family val="0"/></font></fonts><fills count="4"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFFFFFF"/><bgColor rgb="FFFFFFCC"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FF99CCFF"/><bgColor rgb="FFCCCCFF"/></patternFill></fill></fills><borders count="2"><border diagonalUp="false" diagonalDown="false"><left/><right/><top/><bottom/><diagonal/></border><border diagonalUp="false" diagonalDown="false"><left style="thin"/><right style="thin"/><top style="thin"/><bottom style="thin"/><diagonal/></border></borders><cellStyleXfs count="20"><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="true" applyBorder="true" applyAlignment="true" applyProtection="true"><alignment horizontal="general" vertical="bottom" textRotation="0" wrapText="false" indent="0" shrinkToFit="false"/><protection locked="true" hidden="false"/></xf><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="43" fontId="1" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="41" fontId="1" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="44" fontId="1" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="42" fontId="1" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf><xf numFmtId="9" fontId="1" fillId="0" borderId="0" applyFont="true" applyBorder="false" applyAlignment="false" applyProtection="false"></xf></cellStyleXfs><cellXfs count="6"><xf numFmtId="164" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="false" applyBorder="false" applyAlignment="false" applyProtection="false"><alignment horizontal="general" vertical="bottom" textRotation="0" wrapText="false" indent="0" shrinkToFit="false"/><protection locked="true" hidden="false"/></xf><xf numFmtId="164" fontId="4" fillId="2" borderId="0" xfId="0" applyFont="true" applyBorder="true" applyAlignment="true" applyProtection="false"><alignment horizontal="center" vertical="center" textRotation="0" wrapText="false" indent="0" shrinkToFit="false"/><protection locked="true" hidden="false"/></xf><xf numFmtId="164" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="false" applyBorder="true" applyAlignment="false" applyProtection="false"><alignment horizontal="general" vertical="bottom" textRotation="0" wrapText="false" indent="0" shrinkToFit="false"/><protection locked="true" hidden="false"/></xf><xf numFmtId="164" fontId="5" fillId="3" borderId="1" xfId="0" applyFont="true" applyBorder="true" applyAlignment="true" applyProtection="false"><alignment horizontal="center" vertical="center" textRotation="0" wrapText="true" indent="0" shrinkToFit="false"/><protection locked="true" hidden="false"/></xf><xf numFmtId="165" fontId="0" fillId="0" borderId="1" xfId="0" applyFont="false" applyBorder="true" applyAlignment="true" applyProtection="false"><alignment horizontal="center" vertical="bottom" textRotation="0" wrapText="false" indent="0" shrinkToFit="false"/><protection locked="true" hidden="false"/></xf><xf numFmtId="164" fontId="0" fillId="0" borderId="1" xfId="0" applyFont="true" applyBorder="true" applyAlignment="true" applyProtection="false"><alignment horizontal="center" vertical="bottom" textRotation="0" wrapText="false" indent="0" shrinkToFit="false"/><protection locked="true" hidden="false"/></xf></cellXfs><cellStyles count="6"><cellStyle name="Normal" xfId="0" builtinId="0"/><cellStyle name="Comma" xfId="15" builtinId="3"/><cellStyle name="Comma [0]" xfId="16" builtinId="6"/><cellStyle name="Currency" xfId="17" builtinId="4"/><cellStyle name="Currency [0]" xfId="18" builtinId="7"/><cellStyle name="Percent" xfId="19" builtinId="5"/></cellStyles></styleSheet>`

const workbook = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="Calc"/><workbookPr backupFile="false" showObjects="all" date1904="false"/><workbookProtection/><bookViews><workbookView showHorizontalScroll="true" showVerticalScroll="true" showSheetTabs="true" xWindow="0" yWindow="0" windowWidth="16384" windowHeight="8192" tabRatio="500" firstSheet="0" activeTab="0"/></bookViews><sheets><sheet name="Coleta" sheetId="1" state="visible" r:id="rId2"/></sheets><calcPr iterateCount="100" refMode="A1" iterate="false" iterateDelta="0.001"/><extLst><ext xmlns:loext="http://schemas.libreoffice.org/" uri="{7626C862-2A13-11E5-B345-FEFF819CDC9F}"><loext:extCalcPr stringRefSyntax="CalcA1"/></ext></extLst></workbook>`

/* xl/_rels */
const rels_workbook = `<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>`

/* xl/drawings */
const drawings_rels = `<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/image1.png"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/image2.png"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/image3.png"/>
</Relationships>`

const drawing1 = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><xdr:twoCellAnchor editAs="oneCell"><xdr:from><xdr:col>0</xdr:col><xdr:colOff>0</xdr:colOff><xdr:row>0</xdr:row><xdr:rowOff>0</xdr:rowOff></xdr:from><xdr:to><xdr:col>0</xdr:col><xdr:colOff>1348920</xdr:colOff><xdr:row>0</xdr:row><xdr:rowOff>571680</xdr:rowOff></xdr:to><xdr:pic><xdr:nvPicPr><xdr:cNvPr id="0" name="Picture 1" descr=""></xdr:cNvPr><xdr:cNvPicPr/></xdr:nvPicPr><xdr:blipFill><a:blip r:embed="rId1"></a:blip><a:stretch/></xdr:blipFill><xdr:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="1348920" cy="571680"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:ln><a:noFill/></a:ln></xdr:spPr></xdr:pic><xdr:clientData/></xdr:twoCellAnchor><xdr:twoCellAnchor editAs="oneCell"><xdr:from><xdr:col>3</xdr:col><xdr:colOff>658800</xdr:colOff><xdr:row>0</xdr:row><xdr:rowOff>0</xdr:rowOff></xdr:from><xdr:to><xdr:col>4</xdr:col><xdr:colOff>658440</xdr:colOff><xdr:row>0</xdr:row><xdr:rowOff>571680</xdr:rowOff></xdr:to><xdr:pic><xdr:nvPicPr><xdr:cNvPr id="1" name="Picture 2" descr=""></xdr:cNvPr><xdr:cNvPicPr/></xdr:nvPicPr><xdr:blipFill><a:blip r:embed="rId2"></a:blip><a:stretch/></xdr:blipFill><xdr:spPr><a:xfrm><a:off x="4704840" y="0"/><a:ext cx="1348560" cy="571680"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:ln><a:noFill/></a:ln></xdr:spPr></xdr:pic><xdr:clientData/></xdr:twoCellAnchor><xdr:twoCellAnchor editAs="oneCell"><xdr:from><xdr:col>7</xdr:col><xdr:colOff>360</xdr:colOff><xdr:row>0</xdr:row><xdr:rowOff>0</xdr:rowOff></xdr:from><xdr:to><xdr:col>7</xdr:col><xdr:colOff>1348920</xdr:colOff><xdr:row>0</xdr:row><xdr:rowOff>571680</xdr:rowOff></xdr:to><xdr:pic><xdr:nvPicPr><xdr:cNvPr id="2" name="Picture 3" descr=""></xdr:cNvPr><xdr:cNvPicPr/></xdr:nvPicPr><xdr:blipFill><a:blip r:embed="rId3"></a:blip><a:stretch/></xdr:blipFill><xdr:spPr><a:xfrm><a:off x="9441360" y="0"/><a:ext cx="1348560" cy="571680"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:ln><a:noFill/></a:ln></xdr:spPr></xdr:pic><xdr:clientData/></xdr:twoCellAnchor></xdr:wsDr>`

/* xl/worksheets */
const worksheets_rels = `<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing" Target="../drawings/drawing1.xml"/>
</Relationships>`