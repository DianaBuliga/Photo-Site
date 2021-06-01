function schimbaContinut(resursa, jsFisier, jsFunctie){
  var xhttp = new XMLHttpRequest();
  let arg='public/'+resursa+'.html';
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("continut").innerHTML = xhttp.responseText;
      if (jsFisier) {
          var elementScript = document.createElement('script');
          elementScript.onload = function () {
                console.log("hello");
                if (jsFunctie) {
                      window[jsFunctie]();
                }
          };
          elementScript.src = jsFisier;
          document.head.appendChild(elementScript);
    } else {
          if (jsFunctie) {
                window[jsFunctie]();
          }
    }
    }
  };
  xhttp.open("GET", arg, true);
  xhttp.send();
}