const gallery = document.querySelector(".gallery");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const pages = document.querySelectorAll(".page");
const pageIcons = document.querySelectorAll(".icon-page");
const numberOfpages = pages.length;
let pageNumber = 0;

// Function to update the active page
function updatepages() {
    pages.forEach((page) => {
        page.classList.remove("active");
    });
    pageIcons.forEach((pageIcon) => {
        pageIcon.classList.remove("active");
    });

    pages[pageNumber].classList.add("active");
    pageIcons[pageNumber].classList.add("active");
}

// Next button functionality
nextBtn.addEventListener("click", () => {
    pageNumber = (pageNumber + 1) % numberOfpages; // Loop back to the first page
    updatepages();
});

// Previous button functionality
prevBtn.addEventListener("click", () => {
    pageNumber = (pageNumber - 1 + numberOfpages) % numberOfpages; // Loop back to the last page
    updatepages();
});

// Auto-play functionality
let playgallery;

const repeater = () => {
    playgallery = setInterval(() => {
        pageNumber = (pageNumber + 1) % numberOfpages; // Loop back to the first page
        updatepages();
    }, 3000); // Change page every 3 seconds
};

repeater();

// Stop the image gallery on mouse over
gallery.addEventListener("mouseover", () => {
    clearInterval(playgallery);
});

// Start the page page on mouse out
gallery.addEventListener("mouseout", () => {
    repeater();
});