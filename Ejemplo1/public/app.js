async function loadAJAX(){

    const response = await fetch('/pagePart');

    const pagePart = await response.text();
  
    const content = document.getElementById("content");

    content.innerHTML = pagePart;

}