/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[5],{486:function(ya,ua,r){r.r(ua);var pa=r(0);ya=r(48);var na=r(187),ma=r(417),ka=r(233),ja=window;r=function(){function ha(aa,z){this.M_=function(n){n=n.split(".");return n[n.length-1].match(/(jpg|jpeg|png|gif)$/i)};z=z||{};this.url=aa;this.filename=z.filename||aa;this.Lf=z.customHeaders;this.Kwa=!!z.useDownloader;this.withCredentials=!!z.withCredentials}ha.prototype.yH=function(aa){this.Lf=aa};ha.prototype.getCustomHeaders=function(){return this.Lf};
ha.prototype.getFileData=function(aa){var z=this,n=this,f=new XMLHttpRequest,a=0===this.url.indexOf("blob:")?"blob":"arraybuffer";f.open("GET",this.url,!0);f.withCredentials=this.withCredentials;f.responseType=a;this.Lf&&Object.keys(this.Lf).forEach(function(h){f.setRequestHeader(h,z.Lf[h])});var b=/^https?:/i.test(this.url);f.addEventListener("load",function(h){return Object(pa.b)(this,void 0,void 0,function(){var e,w,x,y,ca,ba;return Object(pa.d)(this,function(fa){switch(fa.label){case 0:if(200!==
this.status&&(b||0!==this.status))return[3,10];n.trigger(ha.Events.DOCUMENT_LOADING_PROGRESS,[h.loaded,h.loaded]);if("blob"!==this.responseType)return[3,4];e=this.response;return n.M_(n.filename)?[4,Object(ka.b)(e)]:[3,2];case 1:return w=fa.ba(),n.fileSize=w.byteLength,aa(new Uint8Array(w)),[3,3];case 2:x=new FileReader,x.onload=function(ea){ea=new Uint8Array(ea.target.result);n.fileSize=ea.length;aa(ea)},x.readAsArrayBuffer(e),fa.label=3;case 3:return[3,9];case 4:fa.Ke.push([4,8,,9]);y=new Uint8Array(this.response);
if(!n.M_(n.filename))return[3,6];e=new Blob([y.buffer]);return[4,Object(ka.b)(e)];case 5:return w=fa.ba(),n.fileSize=w.byteLength,aa(new Uint8Array(w)),[3,7];case 6:n.fileSize=y.length,aa(y),fa.label=7;case 7:return[3,9];case 8:return fa.ba(),n.trigger(ha.Events.ERROR,["pdfLoad","Out of memory"]),[3,9];case 9:return[3,11];case 10:ca=h.currentTarget,ba=Object(na.b)(ca),n.trigger(ha.Events.ERROR,["pdfLoad",this.status+" "+ca.statusText,ba]),fa.label=11;case 11:return n.zB=null,[2]}})})},!1);f.onprogress=
function(h){n.trigger(ha.Events.DOCUMENT_LOADING_PROGRESS,[h.loaded,0<h.total?h.total:0])};f.addEventListener("error",function(){n.trigger(ha.Events.ERROR,["pdfLoad","Network failure"]);n.zB=null},!1);f.send();this.zB=f};ha.prototype.getFile=function(){var aa=this;return new Promise(function(z){ja.da.isJSWorker&&z(aa.url);if(aa.Kwa){var n=Object(pa.a)({url:aa.url},aa.Lf?{customHeaders:aa.Lf}:{});z(n)}z(null)})};ha.prototype.abort=function(){this.zB&&(this.zB.abort(),this.zB=null)};ha.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress",
ERROR:"error"};return ha}();Object(ya.a)(r);Object(ma.a)(r);Object(ma.b)(r);ua["default"]=r}}]);}).call(this || window)