import { nanoid } from 'nanoid';

document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const retrieveBtn = document.getElementById("retrieveBtn");

    generateBtn.addEventListener("click", generateAndStoreData);
    retrieveBtn.addEventListener("click", retrieveAndDisplayData);
});

function generateAndStoreData() {
    const textData = document.getElementById("textData").value;
    const imageData = document.getElementById("imageData").files[0];
    const voiceData = document.getElementById("voiceData").files[0];

    if (!textData && !imageData && !voiceData) {
        alert("Please input text, image, or voice data.");
        return;
    }

    const uniqueID = nanoid(10);
    const data = {
        text: textData,
        image: imageData ? URL.createObjectURL(imageData) : null,
        voice: voiceData ? URL.createObjectURL(voiceData) : null,
    };

    localStorage.setItem(uniqueID, JSON.stringify(data));
    return document.getElementById("output").innerHTML = `Your unique ID: <b>${uniqueID}</b>`;

}

function retrieveAndDisplayData() {
    const uniqueID = document.getElementById("uniqueID").value;

    if (!uniqueID) {
        document.getElementById("retrievedText").innerHTML = "Unique ID is required";
        return;
    }


    const storedData = localStorage.getItem(uniqueID);

    if (!storedData) {
        document.getElementById("retrievedText").innerHTML = "No data found for the provided ID";
        return;
    }

    const data = JSON.parse(storedData);


    document.getElementById("retrievedText").innerHTML = `Text: ${data.text || "No text provided"}`;


    const retrievedImage = document.getElementById("retrievedImage");
    if (data.image) {
        retrievedImage.src = data.image;
        retrievedImage.style.display = "block";
    } else {
        retrievedImage.style.display = "none";
    }

    const retrievedVoice = document.getElementById("retrievedVoice");
    if (data.voice) {
        retrievedVoice.src = data.voice;
        retrievedVoice.style.display = "block";
    } else {
        retrievedVoice.style.display = "none";
    }
}
