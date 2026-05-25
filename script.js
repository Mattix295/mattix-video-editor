const fadeElements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {

  fadeElements.forEach((element) => {

    const top = element.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      element.classList.add("active");
    }

  });

});