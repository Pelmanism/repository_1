document.addEventListener('DOMContentLoaded', function() {
    let count = 0;
    const countDisplay = document.getElementById('clickCount');
    const button = document.getElementById('clickMeBtn');

    button.addEventListener('click', function() {
        count++;
        countDisplay.textContent = count;
    });
});
