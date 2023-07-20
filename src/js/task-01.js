const numOfCat = document.querySelectorAll(".item").length;
console.log("Number of categories:", numOfCat);

const listOfCat = document.querySelectorAll(".item");
const catArr = [];
listOfCat.forEach( element => {
    catArr.push(
       `Category: ${element.querySelector("h2").textContent} Elements: ${element.querySelectorAll("li").length}`
    );
    });
console.log(catArr);


//       Array.prototype.forEach(listOfCat, (element) => {
//   const title = element.querySelector("h2").textContent;
//   const CatLen = element.querySelectorAll("li").length;
//   console.log(`Category: ${title} 
//     Elements: ${CatLen}`);
// });
