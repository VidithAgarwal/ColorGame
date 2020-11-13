window.setTimeout(function() {
	var colors = [];
	var number = 6;
	var colorPicked;
	var square = document.querySelectorAll(".square");
	var msg = document.querySelector("#msg");
	var colorDisplay = document.querySelector("#colorDisplay");
	var reset = document.querySelector("#reset");
	var modeBtn = document.querySelectorAll(".mode");
	var h1 = document.querySelector("h1");
	
	init();

	function init() {
		setUpModeButtons();
		setUpSquares();
		newColors(number);

	}

	function setUpSquares() {
		for(let i = 0; i < square.length; i++) {
			square[i].addEventListener("click", function(){
				var clickedColor = this.style.backgroundColor;
				if (clickedColor === colorPicked) {
					msg.textContent = "Correct!";
					changeColor(colorPicked);
					h1.style.backgroundColor = clickedColor;
					reset.textContent = "Play Again?";
				}
				else {
					this.style.backgroundColor = "#232323";
					msg.textContent = "Try Again";
				}
			})
		}

	}

	function setUpModeButtons() {
		for (let i = 0; i < modeBtn.length; i++) {
			modeBtn[i].addEventListener("click", function() {
				modeBtn[0].classList.remove("selected");
				modeBtn[1].classList.remove("selected");
				this.classList.add("selected");
				if (this.textContent === "easy") {
					number = 3;
				}else {
					number = 6;
				}
				newColors(number);
			});
		}
	}
		
	reset.addEventListener("click", function() {
		newColors(number);
	})

	function newColors(num) {
		colors = generateRandomColors(num);
		colorPicked = pickColor();
		colorDisplay.textContent = colorPicked;
		for(let i = 0; i < square.length; i++) {
			if (colors[i]) {
				square[i].style.display = "block";
				square[i].style.backgroundColor = colors[i];
			} else {
				square[i].style.display = "none";
			}
			
		}
		h1.style.backgroundColor = "steelblue";
		msg.textContent = "";	
		reset.textContent = "new colors";	
	}

	function changeColor(color) {
		for(let i = 0; i < square.length; i++) {
			square[i].style.backgroundColor = color;
		}
	}

	function pickColor() {
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}

	function generateRandomColors(size) {
		var arr = [];

		for (var i = 0; i < size; i++) {
			arr.push(randomColor());
		}

		return arr;
	}

	function randomColor() {
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);

		return "rgb(" + red + ", " + green + ", " + blue + ")";
	}
}, 500);