var modal = document.getElementById("myModal");

var img = document.getElementById("modal1", "modal2", "modal3", "modal4");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}