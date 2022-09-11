const modal = document.querySelector(".modal");
const modalOpen = document.querySelectorAll(".modal-open");
const modalClose = document.querySelector(".modal-closed");

for (i of modalOpen) {
  i.addEventListener("click", () => {
    modal.showModal();
  });
}

modalClose.addEventListener("click", () => {
  modal.close();
})
