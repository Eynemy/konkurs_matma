var divs = document.querySelectorAll(".definition-tooltip");
for (var i = 0; i < divs.length; i++) {
  divs[i].innerHTML = divs[i].innerHTML.replace(/_/g, '\u2009');
}