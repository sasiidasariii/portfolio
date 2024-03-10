document.addEventListener("DOMContentLoaded", function () {
    const changingText = document.querySelector('.text-4');
    const fillTexts = ["Developer...", "Designer...", "Creator..."]; // Add your desired texts here
    let currentTextIndex = 0;
    let currentIndex = 0;
    let isFilling = false;

    function updateText() {
        const currentWord = fillTexts[currentTextIndex];

        let currentSlice = currentWord.slice(0, currentIndex);
        let remainingSlice = currentWord.slice(currentIndex);

        if (isFilling) {
            changingText.innerHTML = `<span style="color: rgb(133, 117, 214); -webkit-text-stroke: 0.05vw transparent; border-right: 2px solid rgb(133, 117, 214);">${currentSlice}</span>${remainingSlice}`;
        } else {
            changingText.innerHTML = `<span style="color: transparent; -webkit-text-stroke: 0.05vw rgb(133, 117, 214); border-right: none;">${currentWord}</span>`;
        }

        currentIndex = (currentIndex + 1) % (currentWord.length + 1);

        if (!isFilling && currentIndex === 0) {
            isFilling = true;
            setTimeout(() => {
                isFilling = false;
                currentTextIndex = (currentTextIndex + 1) % fillTexts.length;
            }, 2000); 
        }
    }

    setInterval(updateText, 150);
});
