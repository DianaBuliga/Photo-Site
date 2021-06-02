function topFunction(){
      top = document.getElementById("top");
      
      document.documentElement.scrollTop = 0;
}

function search(){
      let input = document.getElementById("searchBar").value
      input=input.toLowerCase();
      let x = document.getElementsByName('images');

      for( let i=0; i< x.length; i++){
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                  x[i].style.display="none";
              }
              else {
                  x[i].style.display="list-item";                 
              }
      }
}