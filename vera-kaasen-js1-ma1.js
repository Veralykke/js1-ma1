//Question: 1

//let cat = {
//name: "Felix",
//age: 2,
//complain: function() {
//console.log("Meoow");
//}
//}

//cat.complain();

//Question:2 ??

//const heading = document.querySelector("h3");
//console.dir(heading);



//console.log(heading);

//Question: 3 

//heading.style.fontSize = "2em";


//Question: 4 

//heading.classList.add("Subheading");


//document.querySelector(".h3").add("subheading")

//Question: 5 

//const paragraphs = document.querySelectorAll("p");
//console.dir(paragraphs);

//Question: 6 ??

//const resultContainer = document.querySelector(".results")
//resultContainer.innerHTML = "New paragraps";

//Question: 7

//function cat(catArray) {
//console.log(catArray);
//for (let i = 0; i < catArray.length; i++) {
//console.log(catArray[i]);
//}
//}

//const cats = [{
//name: "Blob",
//age: 10
//},
//{
//name: "Harold",
//},
//{
//name: "Blurt",
//age: 21
//}
//];

//cat(cats);

//Question: 8

//const cats = [{
//name: "Blob",
//age: 10
//},
//{
//name: "Harold",
//},
//{
//name: "Blurt",
//age: 21
//}
//];


//function cat(catArray) {
/* lagrer en  foreløbig tom variabel*/
//let catNames = "";


//for (let i = 0; i < catArray.length; i++) {

//catNames += "<h5>" + catArray[i].name + "</h5>\n";

//}

//return catNames;
//}
//console.log(cat(cats));


//Question: 9


//resultContainer.innerHTML = cat(cats);


//Question: 10

//function cat(catArray) {
/* lagrer en  foreløbig tom variabel*/
//let catNames = "";

//for (let i = 0; i < catArray.length; i++) {
//if (catArray[i].age === undefined) {
//catArray[i].age = "Age unknown";
//}
//catNames += "<div>" + "<h5>" + catArray[i].name + "</h5>\n" + "<p>" + catArray[i].age + "<p>" + "</div>"
//}

//return catNames;
//}