JSON.parse(prompt('Enter data', '')).forEach(function(e){
	var a='', r=e.expirationDate, t=e.path, o=e.secure, c=encodeURIComponent;
	if(r){
		switch(r.constructor){
		case Number:
			a= (Infinity===r?';expires=Fri, 31 Dec 9999 23:59:59 GMT':'; max-age='+r);
			break;
		case String:
			a=';expires='+r;
			break;
		case Date:
			a=';expires='+r.toUTCString();
		}		
	};
	r=e.domain,document.cookie=c(e.name)+'='+c(e.value)+a+(r?';domain='+r:'')+(t?';path='+t:'')+(o?';secure':'');
});
