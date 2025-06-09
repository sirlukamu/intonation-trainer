// Define playAudio function for later use
async function playAudio(audioBuffer, detuneAmount) {
  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  const detuneRatio = Math.pow(2, detuneAmount / 1200);
  source.playbackRate.value = detuneRatio;
  source.connect(audioContext.destination);
  source.start();
}

//Select a pitch that is in octaves with generateBtn's pitch
function parseNote(input) {
  const note = input.slice(0, -1); // assumes all notes have a 1-digit octave
  const octave = parseInt(input.slice(-1), 10);
  return { note, octave };
}

// Defines loadAudioBuffer function
async function loadAudioBuffer(filePath) {
  const response = await fetch(filePath);
  const arrayBuffer = await response.arrayBuffer();
  return await audioContext.decodeAudioData(arrayBuffer);
}

// Defines playAudioBuffer function
function playAudioBuffer(audioBuffer, detuneAmount = 0, panValue = 0) {
  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  const panner = audioContext.createStereoPanner();
  panner.pan.value = panValue;
  const detuneRatio = Math.pow(2, detuneAmount / 1200);
  source.playbackRate.value = detuneRatio;
  source.connect(panner).connect(audioContext.destination);
  source.start();
}

async function playPrimary () {
  const primaryInstrument = document.getElementById("primary-instrument").value;
  const primaryNote = document.getElementById("primary-note").value;
  const primaryVersion = document.getElementById("primary-version").value;
  let primaryFilePath = `/audio/${primaryInstrument}/${primaryNote}-${primaryVersion}.mp3`;
  console.log("Trying to fetch:", primaryFilePath);
  let primaryBuffer = await loadAudioBuffer(primaryFilePath);
  playAudioBuffer(primaryBuffer, 0, -1);
}

async function playSecondary () {
  const secondaryInstrument = document.getElementById("secondary-instrument").value;
  const secondaryNote = document.getElementById("secondary-note").value;
  const secondaryVersion = document.getElementById("secondary-version").value;
  const secondaryFilePath = `/audio/${secondaryInstrument}/${secondaryNote}-${secondaryVersion}.mp3`;
  console.log("Trying to fetch:", secondaryFilePath);
  let secondaryBuffer = await loadAudioBuffer(secondaryFilePath);
  const detuneAmount = parseFloat(document.getElementById("detune-slider").value);
  playAudioBuffer(secondaryBuffer, detuneAmount, 1);
}