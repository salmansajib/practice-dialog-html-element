import "./style.css";

const openButton = document.getElementById("open-btn");
const dialog = document.getElementById("myDialog");

openButton.addEventListener("click", () => {
  console.log("Showing modal");
  dialog.showModal();
});

dialog.addEventListener("close", () => {
  console.log(`Dialog closed with value: ${dialog.returnValue}`);
});

dialog.addEventListener("cancel", () => {
  console.log("Dialog canceled via Esc key");
});
