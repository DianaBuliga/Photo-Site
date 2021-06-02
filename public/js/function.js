function topFunction(){
      top = document.getElementById("top");
      window.onscroll= function(){
            if(document.documentElement.scrollTop ){
                  mybutton.style.display = "block";
            } else {
              mybutton.style.display = "none";
            }
      };
      document.documentElement.scrollTop = 0;
}