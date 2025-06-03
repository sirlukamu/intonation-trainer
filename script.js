// Define loadAudio function for later use
async function loadAudio(filePath) {
  try {
    const response = await fetch(filePath);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
  } catch (err) {
    console.error("Error loading audio:", err);
    document.getElementById("resultText").textContent = `Error loading: ${filePath}`;
  }
}

//Select a pitch that is in octaves with generateBtn's pitch
function parseNote(input) {
  const note = input.slice(0, -1); // assumes all notes have a 1-digit octave
  const octave = parseInt(input.slice(-1), 10);
  return { note, octave };
}