document.addEventListener("DOMContentLoaded", function () {
    const imagePaths = ["images/boy.png", "images/book.png", "images/boy (1).png", "images/boy (2).png"];
    let currentIndex = 0;

    function changeImage() {
        const changingImage = document.getElementById("changing-image");
        currentIndex = (currentIndex + 1) % imagePaths.length;
        changingImage.src = imagePaths[currentIndex];
    }

    setInterval(changeImage, 2000); // Adjust the delay as needed
});
