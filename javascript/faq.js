
//--------------- JavaScript to trigger the collapse behavior ---------------
document.addEventListener("DOMContentLoaded", function () {
    const collapseInitElements = document.querySelectorAll("[data-te-collapse-init]");

    collapseInitElements.forEach(function (element) {
        element.addEventListener("click", function () {
            const targetId = element.getAttribute("data-te-target");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                if (targetElement.classList.contains("hidden")) {
                    targetElement.classList.remove("hidden");
                } else {
                    targetElement.classList.add("hidden");
                }
            }
        });
    });
});


//--------------- JavaScript for ChatBot Button Toggler ---------------
document.addEventListener("DOMContentLoaded", () => {
    const chatbotToggler = document.querySelector(".chatbot-toggler");

    chatbotToggler.addEventListener("click", () => {
        document.body.classList.toggle("show-chatbot");
    });
});



