const bubbleContainer = document.getElementById('bubbleContainer');

// Array of phrases to display in the bubbles
const phrases = [
    'I love you',
    'Miss you',
    
];

// Array of online audio file URLs
const audioFiles = [
    'music/pop-39222.mp3',
    
];

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    // Randomly select a phrase from the array
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    bubble.textContent = randomPhrase;

    // Randomize bubble size (between 100px and 200px)
    const size = Math.random() * 100 + 100; // Size between 100px and 200px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Adjust font size based on bubble size
    const fontSize = size / 5; // Font size is 1/5th of the bubble size
    bubble.style.fontSize = `${fontSize}px`;

    // Randomize bubble position
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.top = `${Math.random() * 100}vh`;

    // Randomize animation duration
    const duration = Math.random() * 5 + 3; // Duration between 3s and 8s
    bubble.style.animationDuration = `${duration}s`;

    bubbleContainer.appendChild(bubble);

    // Play a random sound when a bubble is created
    const randomAudioFile = audioFiles[Math.floor(Math.random() * audioFiles.length)];
    const audio = new Audio(randomAudioFile); // Create a new audio object
    audio.play(); // Play the audio

    // Remove bubble after animation ends
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Create bubbles at intervals (adjust this value for speed)
setInterval(createBubble, 100); // Bubbles appear every 100 milliseconds
