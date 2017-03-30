export default class CookieManager{
	constructor(){
		// this.resetCookie();
		// window.localStorage.clear();
	}

	createCookie(name,value,days) {
		let sValue = JSON.stringify( value );
		try {
	  	window.localStorage.setItem(name,sValue)
	  }catch(e) {
		 // alert(sValue)
	 //  	alert(e)
	  }
	}
	getCookie(name) {
	  return JSON.parse( window.localStorage.getItem( name ) )//(result === null) ? null : result[1];
	}
	storeObject(name,value) {
	  window.localStorage.setItem(name,JSON.stringify( value ))
	}
	resetCookie() {
	  for(var i in window.localStorage)
	    {
	        window.localStorage.removeItem(i);
	    }
	}
}