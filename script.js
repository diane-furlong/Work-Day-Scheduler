$(document).ready(function() {
let dateAtTop = document.getElementById("todaysDate")
let todaysDate = document.createTextNode(moment().format('MMM Do YYYY, h:mm:ss a'));
dateAtTop.appendChild(todaysDate);
//moment().format('MMM Do YYYY, h:mm:ss a');
})