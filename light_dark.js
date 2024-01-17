function light_dark() {
   var body = document.body;
   var header = document.querySelector("header")
   var nav = document.querySelector("nav")
   var main = document.querySelector("main")
   var aside = document.querySelector("aside")
   var footer = document.querySelector("footer")
   var button = document.querySelector("button")
   
   body.classList.toggle("dark-body");
   header.classList.toggle("dark-header");
   nav.classList.toggle("dark-nav");
   main.classList.toggle("dark-main");
   aside.classList.toggle("dark-aside");
   footer.classList.toggle("dark-footer");
   button.classList.toggle("dark-button");
  
}
