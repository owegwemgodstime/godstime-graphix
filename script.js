
document.addEventListener("DOMContentLoaded", function () {

    // CONTACT FORM
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const message = document.getElementById("contact-message").value.trim();

            const phoneNumber = "2349078097836";

            const text = `Hello Godstime Graphix!

Name: ${name}
Email: ${email}

Message: ${message}`;

            const whatsappURL =
                "https://wa.me/" + phoneNumber +
                "?text=" + encodeURIComponent(text);

            window.open(whatsappURL, "_blank");
        });
    }


    // MOBILE NAVIGATION MENU
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {

        menuToggle.addEventListener("click", function () {

            menu.classList.toggle("active");

            const isOpen = menu.classList.contains("active");

            menuToggle.textContent = isOpen ? "✕" : "☰";

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

        });

        // CLOSE MENU AFTER CLICKING A LINK
        menu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                menu.classList.remove("active");

                menuToggle.textContent = "☰";

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.setAttribute("aria-label", "Open navigation");

            });

        });
    }

});
