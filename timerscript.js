// Call startTimer();

	const timerDisplay = document.getElementById("timerDisplay");
	const pauseButton = document.getElementById("pauseButton");

	let timer = 0;
	let timerInterval = null;
	let isPaused = false;

	function updateTimerDisplay() {
	    const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
	    const seconds = String(timer % 60).padStart(2, '0');
	    timerDisplay.textContent = `${minutes}:${seconds}`;
	}

	function startTimer() {
	    if (timerInterval) return; // Prevent multiple intervals
	    timerInterval = setInterval(() => {
	        if (!isPaused) {
	            timer++;
	            updateTimerDisplay();
	        }
	    }, 1000);
	}

	pauseButton.addEventListener('click', () => {
	    isPaused = !isPaused;
	    pauseButton.textContent = isPaused ? "Resume" : "Pause";
	});