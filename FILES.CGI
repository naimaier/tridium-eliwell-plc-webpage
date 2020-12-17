t <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
t <html>
t <head>
t 	<META content="text/html; charset=ISO-8859-1" http-equiv="Content-Type">
t 	<META name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
t 	<META name="apple-mobile-web-app-capable" content="yes">
t 	<title>File List</title>
t 	<script type='text/javascript' src='evo.js'></script>
t 	<link rel='stylesheet' type='text/css' href='base.css'>
t 	<link rel='shortcut icon' href='base.ico'>
t </head>
t <body>
t 	
t 	<ul class="menu" id="menu">
t		<li class="tabmenu menu_button">
t			<a href="javascript:void(0);" onclick="responsiveMenu()">
t				<i class="fas fa-bars"></i>
t			</a>
t		</li> 
t		<li class="tabmenu tabmenu_off"><a href="index.htm">Data</a>
t			<ul class="submenu">
t				<li><a href="page1.htm">ResetFile</a>  </li> 
t				<li><a href="page2.htm">AIValue</a>  </li> 
t			</ul>
t		</li> 
t		<li class="tabmenu tabmenu_on"><a  href="files.cgi">Logged Files</a>  </li> 
t		<li class="tabmenu tabmenu_off"><a href="history1.htm">History 1</a>  </li> 
t		<li class="tabmenu tabmenu_off"><a href="history2.htm">History 2</a>  </li> 
t       <li class="tabmenu tabmenu_off"><a href="history3.htm">History 3</a>  </li> 
t       <li class="tabmenu tabmenu_off"><a href="trends.htm">AI trends</a>  </li> 
        <li class="tabmenu tabmenu_off"><a href="relatorio.htm">Relatório</a></li>
t	</ul>
t 	
t 	<div class="menubottom">Log Files</div>
t 		
t 	<p class='title'>Evolution Data Logger</p>
t 	
t 	<div class='pagebody'>
t 
t 		<p class='sectiontitle'></p>
t 		<table class='table'>
t 			<tr>
t 				<th>File name</th>
t 				<th>Size [byte]</th>
t 			</tr> 
c l								
t 			
t 		</table>
t 
t 	</div>
t 	
t 	<script type='text/javascript'>
t 	EVO_CheckPassword('', 1);
t 	EVO_Image('imgLogo', 'BASE.PNG', '', '', '');
t 	EVO_PageInit(0);
t 	</script>
t </body>
t </html>
.