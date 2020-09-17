const cards = document.querySelectorAll(".card");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModal = modalOverlay.querySelector(".modal__close");

for (let card of cards) {
    card.addEventListener("click", function () {
        modalOverlay.classList.add("active");
        modalOverlay.querySelector(".modal__content").innerHTML = card.innerHTML;
    });
};

closeModal.addEventListener("click", function () {
    modalOverlay.classList.remove("active");
});