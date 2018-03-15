function startGame() {
    // starting a new game
    var messageElement = document.getElementById('messages');
    // ! operator in typescript after object method
    // https://stackoverflow.com/questions/38874928/operator-in-typescript-after-object-method
    if (messageElement) {
        messageElement!.innerText = 'Welcome to MultiMath! Starting new game...';
        console.log('Starting new game.');
    }
}

var startGameButton = document.getElementById('startGame');
if (startGameButton) {
    startGameButton!.addEventListener('click', startGame);
}
