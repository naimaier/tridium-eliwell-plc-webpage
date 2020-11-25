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
		<li class="tabmenu menu_button">
			<a href="javascript:void(0);" onclick="responsiveMenu()">
				<i class="fas fa-bars"></i>
			</a>
		</li> 
		<li class="tabmenu tabmenu_off"><a href="index.htm">Data</a>
			<ul class="submenu">
				<li><a href="page1.htm">ResetFile</a>  </li> 
				<li><a href="page2.htm">AIValue</a>  </li> 
			</ul>
		</li> 
		<li class="tabmenu tabmenu_off"><a href="files.cgi">Logged Files</a>  </li> 
		<li class="tabmenu tabmenu_on"><a  href="history1.htm">Hystory 1</a>  </li> 
		<li class="tabmenu tabmenu_off"><a href="history2.htm">Hystory 2</a>  </li> 
        <li class="tabmenu tabmenu_off"><a href="history3.htm">Hystory 3</a>  </li> 
        <li class="tabmenu tabmenu_off"><a href="trends.htm">AI trends</a>  </li> 
	</ul>
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