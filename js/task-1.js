const ulCategories = document.querySelector("ul#categories");
const liItem = document.querySelectorAll("li.item");
console.log(`Number of categories: ${liItem.length}`);

liItem.forEach((item) => {
  const listTitle = item.querySelector("h2").textContent;
  const listLi = item.querySelectorAll("li").length;
  console.log(`Category: ${listTitle}`);
  console.log(`Elements: ${listLi}`);
});
