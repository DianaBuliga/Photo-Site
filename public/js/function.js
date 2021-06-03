function topFunction(){
      top = document.getElementById("top");
      
      document.documentElement.scrollTop = 0;
}

function search(){
      let input = document.getElementById("searchBar").value
      input=input.toLowerCase();
      let x = document.getElementsByName('aesthetic');

      for( let i=0; i< x.length; i++){
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                  x[i].style.display="none";
              }
              else {
                  x[i].style.display="list-item";                 
              }
      }
      let y = document.getElementsByName('boo');
      for( let i=0; i< y.length; i++){
            if (!y[i].innerHTML.toLowerCase().includes(input)) {
                  y[i].style.display="none";
              }
              else {
                  y[i].style.display="list-item";                 
              }
      }
}

function trimite(){
      alert(" Iti multumim ca ai ales serviciile noastre!");
}