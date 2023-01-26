// Write your code here!
const main = document.getElementById("main");
main.remove();

var element = document.createElement("h1");
const newHeader = document.getElementsByName("h1");
newHeader.nodeName = "H1";
newHeader.id = "victory";
newHeader.innerHTML = "is the champion";