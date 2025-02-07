const messages = [
    "¿Estás segura, Bugaboo? 🥺",
    "¿Segurísima?? 😢",
    "Piénsalo bien... 👀",
    "Bugaboo, por favor... 🥹",
    "No me hagas esto 💔",
    "Si dices que no, me pondré muy triste... 😭",
    "Muy muy triste... 😔",
    "Demasiado triste... 🥀",
    "Está bien,Yenny... 😞",
    "Mentira, ¡di que sí! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}