document.addEventListener("DOMContentLoaded", function () {
    let inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
        input.addEventListener("focus", function () {
            this.style.transform = "scale(1.05)";
        });

        input.addEventListener("blur", function () {
            this.style.transform = "scale(1)";
        });
    });
});
