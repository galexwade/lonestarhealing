const allItems = document.querySelectorAll(".item");

allItems.forEach((item) => {
  console.log(item.children.item(2));
  item.children.item(2).addEventListener("click", (e) => {
    e.preventDefault();

    item.classList.toggle("open");
  });
});
