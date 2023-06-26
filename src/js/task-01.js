const numOfCat = document.querySelectorAll(".item").length;
console.log("Number of categories:", numOfCat);

const listOfCat = document.querySelectorAll(".item");
Array.prototype.forEach.call(listOfCat, (element) => {
  const title = element.querySelector("h2").textContent;
  const CatLen = element.querySelectorAll("li").length;
  console.log(`Category: ${title} 
    Elements: ${CatLen}`);
});
