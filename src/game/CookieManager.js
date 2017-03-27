export default class CookieManager{
	constructor(){
	}

	createCookie(name,value,days) {
	  localStorage.setItem(name,JSON.stringify( value ))
	}
	getCookie(name) {
	  return JSON.parse( localStorage.getItem( name ) )//(result === null) ? null : result[1];
	}
	storeObject(name,value) {
	  localStorage.setItem(name,JSON.stringify( value ))
	}
	resetCookie() {
	  for(var i in localStorage)
	    {
	        localStorage.removeItem(i);
	    }
	}
}