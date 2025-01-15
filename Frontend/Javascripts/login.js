document.addEventListener("DOMContentLoaded", () => {
    const vehiclesPageLink = document.getElementById("vehicles-link");
    const signUpPage = document.getElementById("SignUp-page");
    const closeButton = document.querySelector(".pop-up .close");
    const signUpForm = document.getElementById("SignUp-Form");

    // Show the sign-up page when 'Our Vehicles' is clicked
    vehiclesPageLink.addEventListener("click", (event) => {
        event.preventDefault();  // Prevent the default link behavior
        signUpPage.style.display = "flex";  // Show the sign-up popup
    });

    // Close the sign-up page when the close button is clicked
    closeButton.addEventListener("click", () => {
        signUpPage.style.display = "none";
    });

    // Close the sign-up page if clicking outside the popup
    window.addEventListener("click", (event) => {
        if (event.target === signUpPage) {
            signUpPage.style.display = "none";
        }
    });

    // signup form
    signUpForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form's default behavior (page reload)
        console.log("Redirecting to the 'Our Vehicles' page...");

        // goes to out vehicle page
        window.location.href = '/Frontend/Pages/Our Vehicles.html';  // Redirect to the "Our Vehicles" page
    });
});
