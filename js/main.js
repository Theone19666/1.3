function createSwiper() {
  return new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    speed: 400,
    //spaceBetween: 16,
    width: 240,
  });
}

function toggleShowButtonAndBrands({ show = true, repairButton = {} } = {}) {
  if (show) {
    repairButton.textContent = "Показать всё";
    repairButton.classList.remove("more-button_hide");
    document.querySelector(".brands").classList.remove("brands_show-all-brand");
  } else {
    repairButton.textContent = "Скрыть";
    repairButton.classList.add("more-button_hide");
    document.querySelector(".brands").classList.add("brands_show-all-brand");
  }
}

if (window.innerWidth < 768) {
  createSwiper();
}

document
  .querySelector(".repair__more-button")
  .addEventListener("click", (event) => {
    const repairButton = event.target.closest(".repair__more-button");
    if (repairButton.classList.contains("more-button_hide")) {
      toggleShowButtonAndBrands({ repairButton, show: true });
    } else {
      toggleShowButtonAndBrands({ repairButton, show: false });
    }
  });
