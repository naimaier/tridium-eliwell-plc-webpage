t <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
t <html>
t <head>
t 	<META content="text/html; charset=ISO-8859-1" http-equiv="Content-Type">
t 	<META name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
t 	<title>File List</title>
t 	<script type='text/javascript' src='evo.js'></script>
t       <link rel="stylesheet" href="reset.css">
t 	<link rel='stylesheet' type='text/css' href='base.css'>
t 	<link rel='shortcut icon' href='base.ico'>
t </head>
t <body>
t       <header class="header container">
t		<nav data-menu>
t			<ul> 
t				<li class="header__menu-item header__menu-button">
t					<a href="javascript:void(0);" onclick="responsiveMenu()">
t						<i class="fas fa-bars"></i>
t					</a>
t				</li>
t				<li class="header__menu-item active"><a href="index.htm">Data</a> 
t					<ul class="header__submenu">
t						<li class="header__submenu-item"><a href="page1.htm">ResetFile</a></li> 
t						<li class="header__submenu-item"><a href="page2.htm">AIValue</a></li> 
t					</ul>
t				 </li> 
t				<li class="header__menu-item"><a href="files.cgi">Logged Files</a>  </li> 
t				<li class="header__menu-item"><a href="history1.htm">History 1</a>  </li> 
t				<li class="header__menu-item"><a href="history2.htm">History 2</a>  </li> 
t				<li class="header__menu-item"><a href="history3.htm">History 3</a>  </li>
t				<li class="header__menu-item"><a href="trends.htm">AI trends</a>  </li> 
t				<li class="header__menu-item"><a href="relatorio.htm">Relatório</a></li>
t				<li class="header__menu-item"><a href="coletor.htm">Coletor</a></li>
t			</ul>
t		</nav>
t	</header>
t 	
t   <main>
t 		<section class="container">
t			<div id="logos__big-screen">
t				<img class="logos__left-logo" src="engeultra-big.png" width="150" height="40" alt="Logotipo Engeultra">
t				<img class="logos__center-logo" src="vibra-big.png" width="150" height="40" alt="Logotipo Vibra">
t				<img class="logos__right-logo" src="tridium-big.png" width="150" height="40" alt="Logotipo Tridium">
t			</div>
t		
t			<div id="logos__small-screen">
t				<img class="logos__left-logo" src="engeultra-small.png" width="110" height="35" alt="Logotipo Engeultra">
t				<img class="logos__center-logo" src="vibra-small.png" width="110" height="35" alt="Logotipo Vibra">
t				<img class="logos__right-logo" src="tridium-small.png" width="110" height="35" alt="Logotipo Tridium">
t			</div>
t		</section>
t
t 		<section class="content container">
t 	        <p class='content__page-title'>Evolution Data Logger</p>
t 	
t 		    <p class='content__section-title'></p>
t 		    <table class='table'>
t 			    <tr>
t 				    <th>File name</th>
t 				    <th>Size [byte]</th>
t 			    </tr> 
c l								
t 			
t 		    </table>
t       </section>
t   </main>
t 	
t 	<script type='text/javascript'>
t 	    EVO_CheckPassword('', 1);
t 	    EVO_Image('imgLogo', 'BASE.PNG', '', '', '');
t 	    EVO_PageInit(0);
t 	</script>
t </body>
t </html>
.