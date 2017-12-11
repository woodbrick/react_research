function createXMLHttpRequest() {  
  var xmlHttp;  
  if (window.XMLHttpRequest) {  
      xmlHttp = new XMLHttpRequest();  
      if (xmlHttp.overrideMimeType)  
          xmlHttp.overrideMimeType('text/xml');  
  } else if (window.ActiveXObject) {  
      try {  
          xmlHttp = new window.ActiveXObject("Msxml2.XMLHTTP");  
      } catch (e) {  
          try {  
              xmlHttp = new window.ActiveXObject("Microsoft.XMLHTTP");  
          } catch (e) {  
          }  
      }  
  }  
  return xmlHttp;  
}

const HttpRequest = {
  get: url => {
    return new Promise(resolve => {
      let xmlHttp = createXMLHttpRequest()
      xmlHttp.open('GET', url, true)
      xmlHttp.onreadystatechange = () => {
        xmlHttp.readyState === 4 && resolve(xmlHttp)
      }
      xmlHttp.setRequestHeader("Content-Type",
              "application/x-www-form-urlencoded;")
      xmlHttp.send()
    })
  }
}

export default HttpRequest
