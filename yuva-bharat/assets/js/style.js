function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

document.getElementById("Tab1").style.display = "block";
document.getElementsByClassName("tablinks")[0].classList.add("active");




$(".scroll").on("mouseenter",function(){
  $(this).stop(true,false);
});

$(".scroll").on("mouseleave",function(){
  $(this).animate({
  scrollLeft : sL
  },100000, 'linear');
});