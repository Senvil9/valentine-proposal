document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Yes button click
    yesBtn.addEventListener('click', () => {
        window.location.href = 'success.html';
    });

    // Function to move the No button
    let moveCount = 0;
    const moveNoBtn = () => {
        if (moveCount >= 20) return;

        // Collect window dimensions
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Button dimensions
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        // Calculate random position
        // Ensure it stays within viewport with some padding
        const maxLeft = windowWidth - btnWidth - 20;
        const maxTop = windowHeight - btnHeight - 20;

        const randomLeft = Math.max(20, Math.floor(Math.random() * maxLeft));
        const randomTop = Math.max(20, Math.floor(Math.random() * maxTop));

        // Apply new position
        noBtn.style.position = 'fixed'; // Switch to fixed positioning
        noBtn.style.left = `${randomLeft}px`;
        noBtn.style.top = `${randomTop}px`;

        // Add class for styling extras if needed
        noBtn.classList.add('moved');
        moveCount++;
    };

    // Move on hover (desktop)
    noBtn.addEventListener('mouseover', moveNoBtn);

    // Move on click (mobile/desktop fallback)
    noBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent any default action
        moveNoBtn();
    });

    // Move on touch start (mobile)
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default click
        moveNoBtn();
    });
});
