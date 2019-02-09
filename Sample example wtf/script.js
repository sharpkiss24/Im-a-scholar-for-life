var paragraph = document.createElement("p");

paragraph.innerHTML = "this is the contents of my paragraph";

var videoBanner = document.getElementById("videoBanner");

videoBanner.appendChild(paragraph);

var newHeader = document.createElement("h2");

newHeader.innerHTML = "Ladies and Gentlmen";

videoBanner.insertBefore(newHeader, paragraph);