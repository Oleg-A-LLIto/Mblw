var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    //this.classList.toggle("active");
    var content = this.nextElementSibling;
    var arrow = this.childNodes[this.childNodes.length-1];
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        arrow.style.setProperty('transform',"rotate(0deg)");
    } else {
      content.style.maxHeight = content.scrollHeight - 8 + "px";
        arrow.style.setProperty('transform',"rotate(180deg)");
    } 
  });
}