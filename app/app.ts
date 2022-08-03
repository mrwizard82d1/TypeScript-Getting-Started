function startGame() {
    // start the game
    var messagesElement = document.getElementById('messages');
    // when `strict: true` is selected, compiler reports that `messagesElement` may be `null`. Since I "know" this
    // element exists on the page, I will use the "null assertion operator", `!`, to address the error message.
    messagesElement!.innerText = 'Welcome to MultiMath! Starting game...';
}

// I will apply a similar solution to possible `null` values here.
document.getElementById('startGame')!.addEventListener('click', startGame);
