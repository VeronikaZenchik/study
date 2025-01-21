const countsElement = document.getElementById("visit-count");

let visitCount = localStorage.getItem("visitCount");

if(visitCount){
  visitCount = parseInt(visitCount) + 1;
} else {
  visitCount = 1;
}  

localStorage.setItem("visitCount", visitCount);

countsElement.textContent = visitCount;