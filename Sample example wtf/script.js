var paragraph = document.createElement("p");

paragraph.innerHTML = "this is the contents of my paragraph";

var videoBanner = document.getElementById("videoBanner");

videoBanner.appendChild(paragraph);

var newHeader = document.createElement("h2");

newHeader.innerHTML = "Ladies and Gents";

videoBanner.insertBefore(newHeader, paragraph);

//remove stuff//
videoBanner.removeChild(paragraph);

videoBanner.removeChild(newHeader);

videoBanner.addEventlistener("click", myEventHandler);

function myEventHandler() {
	alert("hey Man don't go clicking random stuff if your bored");
}