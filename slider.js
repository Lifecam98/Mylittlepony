// Oppretter en ny Swiper-instans for å håndtere bildeslideshowen
const swiper = new Swiper(".swiper", {
  // Automatisk avspilling av slideshowen
  autoplay: {
    // Tidsintervallet mellom hver bildevisning (i millisekunder)
    delay: 5000,
    // Avspillingen skal ikke stoppe når brukeren interagerer med slideshowen
    disableOnInteraction: false,
  },
  // Slideshowen skal gå i loop, dvs. gå tilbake til første bilde etter siste bilde
  loop: true,

  // Innstillinger for paginering av slideshowen
  pagination: {
    // Elementet som skal brukes som paginering
    el: ".swiper-pagination",
    // Pagineringen skal være klikkbar
    clickable: true,
  },

  // Innstillinger for navigering av slideshowen
  navigation: {
    // Elementet som skal brukes som neste-knapp
    nextEl: ".swiper-button-next",
    // Elementet som skal brukes som forrige-knapp
    prevEl: ".swiper-button-prev",
  },
});
