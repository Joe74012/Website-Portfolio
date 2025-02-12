
/*als je klikt op de hamburger menu dan opent een menu met opties*/
function TopHamburgerMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

/*Als je op de knop van versturen klikt start de pagina opnieuw op zodat het lijkt alsof de info is doorgestuurd */
  function refreshPage(){
    window.location.reload();
  } 
  /*vernaam windows on scroll naar scrollbar functies*/
  window.onscroll = function() {ScrollBar()};
/*als je naar beneden scrolled bij de website gaat de progress bar naar rechts*/
function ScrollBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
/*als je klikt op de hamburger menu aan de bodem dan opent een menu met opties*/
function BottomHamburgerMenu () {
  var x = document.getElementById("myLinks2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}