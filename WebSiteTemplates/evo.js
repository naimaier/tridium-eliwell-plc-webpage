var pollingUriPath=window.location.pathname;if(!pollingUriPath||pollingUriPath=="/"){var pollingUriName="index.cgx"}else{var pollingUriName=pollingUriPath.substr(pollingUriPath.lastIndexOf("/")+1,pollingUriPath.lastIndexOf(".")-pollingUriPath.lastIndexOf("/"))+"cgx"}var pollingTimerHandler=null;var pollingTimerInterval=0;var editLastValue=null;function writeParameter(e,c){var a=GetXmlHttpObject();if(a==null){alert("XmlHttp not initialized!");return 0}if(m_EVOTextFormats[e]==EVOTextFmtHHMM){c=HHMM2int(c)}idnew=e;var d="evo.xml?"+idnew+"="+encodeURI(c)+"?"+String(100000+Math.floor((Math.random()*100000)));type=document.getElementById(e).type.toLowerCase();if(type=="radio"){idnew=e.substr(0,e.length-2);d="evo.xml?"+idnew+"="+encodeURI(c)+"?"+String(100000+Math.floor((Math.random()*100000)))}a.onreadystatechange=b;a.open("GET",d,true);a.setRequestHeader("If-Modified-Since","Sat, 1 Jan 2000 00:00:00 GMT");a.send(null);function b(){if(a.readyState==4){if(a.status==200){document.getElementById(e).title="";return}}}}function periodicUpdate(){periodicUpdate(null)}function periodicUpdate(c){if(c!=null){pollingTimerInterval=c}if(pollingTimerHandler){clearTimeout(pollingTimerHandler)}var b=GetXmlHttpObject();if(b==null){alert("XmlHttp not initialized!");return 0}b.onreadystatechange=a;b.open("GET",pollingUriName,true);b.setRequestHeader("If-Modified-Since","Sat, 1 Jan 2000 00:00:00 GMT");b.send(null);function a(){if(b.readyState==4){if(b.status==200){xmlDoc=b.responseXML;if(xmlDoc==null){restartPolling();return}try{processResponse(xmlDoc)}catch(d){restartPolling();return}if(typeof postPollingActions!="undefined"){postPollingActions()}}restartPolling()}}}function restartPolling(){if(pollingTimerInterval>0){pollingTimerHandler=setTimeout("periodicUpdate("+pollingTimerInterval+");",pollingTimerInterval)}}function stopPeriodicUpdate(a){if(a.title==""){a.title="-"}switch(a.type.toLowerCase()){case"text":case"button":editLastValue=a.value;break;case"checkbox":case"radio":editLastValue=a.checked;break;case"select-one":editLastValue=a.selectedIndex;break;default:editLastValue=a.value}}function restartUpdate(a){switch(a.type.toLowerCase()){case"text":case"button":if(editLastValue!=a.value){a.title="*"}else{if(a.title=="-"){a.title=""}}break;case"checkbox":case"radio":if((editLastValue!=a.checked)&&(a.title!="")){a.title="*"}else{if(a.title=="-"){a.title=""}}break;case"select-one":if((editLastValue!=a.selectedIndex)&&(a.title!="")){a.title="*"}else{if(a.title=="-"){a.title=""}}break}editLastValue=null}function changeConfirm(a){a.submit();return}function GetXmlHttpObject(){var a=null;try{a=new XMLHttpRequest()}catch(b){try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){a=new ActiveXObject("Microsoft.XMLHTTP")}}return a}function processResponse(k){var a=k.getElementsByTagName("text");for(var c=0;c<a.length;c++){try{var b=a[c].childNodes[0].childNodes[0].nodeValue;elValue=a[c].childNodes[1].childNodes[0].nodeValue;if(m_EVOTextFormats[b]==EVOTextFmtHHMM){elValue=int2HHMM(elValue)}fillNODE(b,elValue)}catch(h){if(b==undefined){continue}else{if(elValue==undefined){fillNODE(b,"")}}}}var j=k.getElementsByTagName("checkbox");for(var c=0;c<j.length;c++){try{b=j[c].childNodes[0].childNodes[0].nodeValue;elValue=j[c].childNodes[1].childNodes[0].nodeValue;if(elValue.match("true")){fillNODE(b,true)}else{fillNODE(b,false)}}catch(h){if(b==undefined){continue}else{if(elValue==undefined){continue}}}}var e=k.getElementsByTagName("select");for(var c=0;c<e.length;c++){try{b=e[c].childNodes[0].childNodes[0].nodeValue;elValue=e[c].childNodes[1].childNodes[0].nodeValue;fillNODE(b,elValue)}catch(h){if(b==undefined){continue}else{if(elValue==undefined){elValue="";fillNODE(b,elValue)}}}}var f=k.getElementsByTagName("radio");for(var c=0;c<f.length;c++){try{b=f[c].childNodes[0].childNodes[0].nodeValue;elValue=f[c].childNodes[1].childNodes[0].nodeValue;if(elValue.match("true")){fillNODE(b,true)}else{fillNODE(b,false)}}catch(h){if(b==undefined){continue}else{if(elValue==undefined){continue}}}}var g=k.getElementsByTagName("button");for(var c=0;c<g.length;c++){try{b=g[c].childNodes[0].childNodes[0].nodeValue;elValue=g[c].childNodes[1].childNodes[0].nodeValue;fillNODE(b,elValue)}catch(h){if(b==undefined){continue}else{if(elValue==undefined){continue}}}}var d=k.getElementsByTagName("image");for(var c=0;c<d.length;c++){try{b=d[c].childNodes[0].childNodes[0].nodeValue;elValue=d[c].childNodes[1].childNodes[0].nodeValue;fillNODE(b,elValue)}catch(h){if(b==undefined){continue}else{if(elValue==undefined){continue}}}}if(typeof ShowCustomPage=="function"){ShowCustomPage(k)}}function fillNODE(vId,vData){vNode=document.getElementById(vId);if(vNode.nodeName.toLowerCase().match("input")){if(vNode.title==""){switch(vNode.type.toLowerCase()){case"checkbox":vNode.checked=vData;if(!vNode.disabled){vNode.nextSibling.value=vNode.checked?"on":"off"}break;case"radio":if(vNode.checked!=vData){vNode.checked=vData}break;case"text":case"button":default:if(vData.match("-32768")||vData.match("-3276.8")||vData.match("-327.68")||vData.match("-32767")||vData.match("-3276.7")||vData.match("-327.67")||vData.match("-32766")||vData.match("-3276.6")||vData.match("-327.66")||vData.match("-32765")||vData.match("-3276.5")||vData.match("-327.65")){vData="-----"}if(vNode.value!=vData){vNode.value=vData}}}}else{if(vNode.nodeName.toLowerCase().match("img")){var srcName=vNode.src.substr(vNode.src.lastIndexOf("/")+1,vNode.src.length);if(srcName!=eval("m_imagesMap_"+vId+"[vData]")){vNode.src=eval("m_imagesMap_"+vId+"[vData]")}}else{if(vNode.nodeName.toLowerCase().match("select")){if(vNode.title==""){if(vNode.selectedIndex<0||vNode.options[vNode.selectedIndex].value!=vData){var newIdx=-1;for(var i=0;i<vNode.options.length;i++){if(vNode.options[i].value==vData){newIdx=i;break}}vNode.selectedIndex=newIdx}}}else{if((vId.substring(0,1).match("i"))&&(vNode.nodeName.toLowerCase().match("div"))){var newClass=vId+"_"+vData;vNode.childNodes[0].className=newClass}else{if(vNode.innerHTML!=vData){vNode.innerHTML=vData}}}}}}function EVO_PageInit(a){pollingTimerInterval=a;ShowPageLoadingOverlay();SerializeImageLoading()}function ShowPageLoadingOverlay(){document.write("<div id='EVO_overlay_container' style='display:block; z-index: 9999; width: 100%; height: 100%; margin: 0px; padding: 0px; position: "+((navigator.appVersion.indexOf("MSIE 7.")!=-1)?"absolute":"fixed")+'; top: 0px; left: 0px; background-color: #FFFFFF; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)"; filter: alpha(opacity=90); -moz-opacity: 0.9; -khtml-opacity: 0.9; opacity: 0.9; \'>');document.write("<div style='display:block; text-align:center; width: 100%; height: 40px; margin: 0px; margin-top: 30px; padding: 5px; background-color: #2b353f; border: 2px solid #2b353f; '>");document.write("<div id='EVO_overlay_dynamic' style='color:#FFFFFF; font-family: Arial; font-weight: bold; font-size: 20px; margin: 5px;'>Loading");document.write("</div></div></div>")}function ThrowPageLoadingOverlay(){document.getElementById("EVO_overlay_container").style.display="none"}var arrIMG=[];var ts=0;function AddPreCacheImage(a,b){if(a=="?"){a="EVO_STA_IMG_"+arrIMG.length}arrIMG.push({id:a,src:b});return a}var tmrChkImg=null;var docIMGelement=null;var imageIdx=0;function SerializeImageLoading(){if(imageIdx>=arrIMG.length){ThrowPageLoadingOverlay();periodicUpdate();return}if(arrIMG[imageIdx].id!=""){docIMGelement=document.getElementById(arrIMG[imageIdx].id)}else{docIMGelement=new Image()}docIMGelement.src=arrIMG[imageIdx].src;tmrChkImg=setTimeout("goToNextImage();",10)}function pauseJS(c){var b=new Date();var a=null;do{a=new Date()}while(a-b<c)}function goToNextImage(){if(docIMGelement.complete){pauseJS(1);imageIdx+=1;SerializeImageLoading()}else{tmrChkImg=setTimeout("goToNextImage();",5)}}function EVO_Image(c,d,b,a,e){if(ts==0){ts=Math.round((new Date()).getTime()/1000)}document.write("<IMG id='"+AddPreCacheImage((c==""?"?":c),d+"?date="+ts)+"' src='' "+(b!=""?("width='"+b+"' "):" ")+(a!=""?("height='"+a+"' "):" ")+e+" />")}function EVO_CheckBox(e,c,a,d){document.write("<input type='checkbox' id='"+c+"' onclick='toggleCheckBox(this);"+(e?('writeParameter("'+c+'",this.nextSibling.value); '):"")+"' onfocus='stopPeriodicUpdate(this);' onblur='restartUpdate(this);' title='' "+d+" />");var b=d.toLowerCase();if(b.indexOf("disabled")<0){document.write("<input type='hidden' name='"+c+"' value='' />")}if(a){document.write("<label for='"+c+"'>"+a+"</label>")}}function toggleCheckBox(a){a.nextSibling.value=a.checked?"on":"off"}function EVO_Select(e,b,d,c){document.write("<select id='"+b+"' name='"+b+"' "+(e?("onchange='writeParameter(\""+b+"\",this.value);' "):"")+" onfocus='stopPeriodicUpdate(this);' onblur='restartUpdate(this);' title='' "+c+">");for(var a in d){document.write("<option value='"+a+"'>"+d[a]+"</option>")}document.write("</select>")}function EVO_Radio(e,b,d,a,c){document.write("<input type='radio' id='"+b+"_"+d+"' name='"+b+"' value='"+d+"' "+(e?("onclick='writeParameter(\""+b+"_"+d+'","'+d+"\");' "):"")+" onfocus='stopPeriodicUpdate(this);' onblur='restartUpdate(this);' title='' "+c+" /><label for='"+b+"_"+d+"'>"+a+"</label>")}function EVO_Button(e,b,d,a,c){if(!document.getElementById(b)){document.write("<input type='hidden' id='"+b+"' name='"+b+"' value='' />")}document.write("<button type='button' onclick='assignHiddenValue(\""+b+'","'+d+'"); '+(e?('writeParameter("'+b+'","'+d+'"); '):"")+"' "+c+">"+a+"</button>")}function assignHiddenValue(a,b){if(document.getElementById(a)){document.getElementById(a).value=b}}var m_EVOTextFormats={};var EVOTextFmtString=0;var EVOTextFmtDecimal=1;var EVOTextFmtHHMM=2;var EVOTextFmtPsw=3;function formatDecimals(c,a){var b=parseFloat(c.value);c.value=b.toFixed(a)}function int2HHMM(d){var c=false;if(d<0){c=true;d=-d}var b=parseInt(d/60);var e=d%60;var a=(b<10?"0":"")+b+":"+(e<10?"0":"")+e;if(c){a="-"+a}return a}function HHMM2int(c){var d=c.indexOf(":");if(d!=-1){var b=false;if(c.charAt(0)=="-"){c=c.substr(1);d--;b=true}var a=parseInt(c.substr(0,d),10)*60+parseInt(c.substr(d+1),10);if(b){a=-a}}else{var a=parseInt(c,10)}return a}function formatHHMM(b){var a=b.value;if(a.indexOf(":")==-1){b.value=int2HHMM(a)}}function checkEnterInText(b){var a=b.keyCode||b.which;return(a==13)}function EVO_Text(d,i,g,a,b,c,f){var e="restartUpdate(this);";var h="text";if(d){e="writeParameter('"+i+"',this.value); "+e}m_EVOTextFormats[i]=b;if(b==EVOTextFmtDecimal){e="formatDecimals(this,"+c+"); "+e}else{if(b==EVOTextFmtHHMM){e="formatHHMM(this); "+e}else{if(b==EVOTextFmtPsw){h="password"}}}document.write('<INPUT type="'+h+'" id="'+i+'" name="'+i+'" value="" maxlength="'+a+'" size="'+g+'" title="" onfocus="stopPeriodicUpdate(this);" onblur="'+e+'" onkeypress="if(checkEnterInText(event)) { '+e+'; this.blur(); };" '+f+" />")}function addCss(b){var a=document.createElement("style");a.type="text/css";if(a.styleSheet){a.styleSheet.cssText=b}else{a.appendChild(document.createTextNode(b))}document.getElementsByTagName("head")[0].appendChild(a)}function EVO_DivImgMap(e,g,b,c,a,h){if(ts==0){ts=Math.round((new Date()).getTime()/1000)}var f=("#"+e+" {display:block;width:"+c+"px;height:"+a+"px;overflow:hidden;position:relative;}");for(var d=0;d<b.length;d++){f+=(" ."+e+"_"+b[d]+" {border:0;position:relative;left:0px;top:-"+(a*d)+"px;}")}addCss(f);document.write("<DIV id='"+e+"' "+h+" />");document.write("<IMG id='"+AddPreCacheImage("DIV_IMG_"+e,g+"?date="+ts)+"'  class='"+e+"_"+b[0]+"'/></DIV>")}function EVO_ImgMap(j,g,a,d,e,c){if(ts==0){ts=Math.round((new Date()).getTime()/1000)}var h="var m_imagesMap_"+j+" = {";for(var b=0;b<a.length;b++){var f=g.replace("#",a[b])+"?date="+ts;h+=(b>0?", ":"")+a[b]+':"'+f+'"';AddPreCacheImage("",f)}h+=" };";document.write('<script type="text/javascript">');document.write(h);document.write("<\/script>");document.write("<IMG id='"+j+"' "+(d!=""?("width='"+d+"' "):" ")+(e!=""?("height='"+e+"' "):" ")+c+" />")}function EVO_HtmlItem(c,a,b){document.write("<"+c+" "+b+" id='"+a+"'></"+c+">")}var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(c){var a="";var k,h,f,j,g,e,d;var b=0;while(b<c.length){k=c[b++];h=c[b++];f=c[b++];j=k>>2;g=((k&3)<<4)|(h>>4);e=((h&15)<<2)|(f>>6);d=f&63;if(isNaN(h)){e=d=64}else{if(isNaN(f)){d=64}}a+=this._keyStr.charAt(j)+this._keyStr.charAt(g)+this._keyStr.charAt(e)+this._keyStr.charAt(d)}return a}};function setCookie(b,d,a){var e=new Date();e.setTime(e.getTime()+(a*60*60*1000));var c=escape(d)+((a==null)?"":"; expires="+e.toUTCString());document.cookie=b+"="+c}function getCookie(b){var c,a,e,d=document.cookie.split(";");for(c=0;c<d.length;c++){a=d[c].substr(0,d[c].indexOf("="));e=d[c].substr(d[c].indexOf("=")+1);a=a.replace(/^\s+|\s+$/g,"");if(a==b){return unescape(e)}}}function EncodePassword(b){if(!b){return""}var a=[];for(var c=0;c<b.length;c++){a.push((((b.charCodeAt(c)^231)+169)%256)^139)}return Base64.encode(a)}function EVO_CheckPassword(a,b){if(!a){return true}var c=getCookie(location.pathname);if(c&&EncodePassword(c)==a){return true}c=prompt("Please enter password :","");if(!c){history.back();return false}if(EncodePassword(c)==a){if(b){setCookie(location.pathname,c,b)}return true}else{alert("Wrong password entered !\n ");history.back();return false}};