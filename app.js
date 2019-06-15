const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

//
const greetings = [
    "I am good",
    "I am feeling fantastic",
    "A little tired, but good"
];

const weather = [
    "It is raining outside.",
    "Looks like hell.",
    "Beutiful weather outside."
];

const age = [
    "I am  a couple days old.",
    "I was born 15th of June 2019."
];

const dog = [
    "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractable claws, and a barking, howling, or whining voice."
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log("Voice is activated");
};

recognition.onresult = function (event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

//Btn listener

btn.addEventListener("click", () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    if (message.includes("How are you")) {
        const finalText =
            greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if (message.includes("weather")) {
        const finalText =
            weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }

    if (message.includes("old are")) {
        const finalText =
            age[Math.floor(Math.random() * age.length)];
        speech.text = finalText;
    }

    if (message.includes("dog")) {
        const finalText = dog;
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}