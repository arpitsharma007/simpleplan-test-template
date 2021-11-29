// Function for circular 

var circleType = new CircleType(document.getElementById("rotated")).radius(80);
$(window).scroll(function () {
    var offset = $(window).scrollTop();
    offset = offset * 0.4;

    $(".circular-text").css({
        "-moz-transform" : "rotate(" + offset +"deg)",
        "-webkit-transform" : "rotate(" + offset +"deg)",
        "-o-transform" : "rotate(" + offset +"deg)",
        "-ms-transform" : "rotate(" + offset +"deg)",
        "transform" : "rotate(" + offset +"deg)",
    })
})



$(document).ready(function() {
 
	$(".fa-search").click(function() {
	   $(".togglesearch").toggle();
	   $("input[type='text']").focus();
	 });
 
});


window.onscroll = function() {myFunction(); myFunction1();};


var navbarr = document.getElementById("desktop-navbar");


var stickyy = navbarr.offsetTop;


function myFunction() {
  if (window.pageYOffset >= stickyy) {
    navbarr.classList.add("sticky")
  } else {
    navbarr.classList.remove("sticky");
  }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
  }



  // window.onscroll = function() {myFunction1()};

  // document.getElementById("body-id").onscroll = function() {myFunction()};

  var navbar = document.getElementById("main");
  
  
  var sticky = navbar.offsetTop;
  
  
  function myFunction1() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }


  document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
      
      element.addEventListener('click', function (e) {
  
        let nextEl = element.nextElementSibling;
        let parentEl  = element.parentElement;	
  
          if(nextEl) {
              e.preventDefault();	
              let mycollapse = new bootstrap.Collapse(nextEl);
              
              if(nextEl.classList.contains('show')){
                mycollapse.hide();
              } else {
                  mycollapse.show();
                  // find other submenus with class=show
                  var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                  // if it exists, then close all of them
                  if(opened_submenu){
                    new bootstrap.Collapse(opened_submenu);
                  }
              }
          }
      }); // addEventListener
    }) // forEach
  }); 