let arrowLeft = document.getElementById('arrow-left'),
	arrowRight = document.getElementById('arrow-right'),
	num = document.getElementById('number'),
	imgs = document.getElementsByClassName('slider-item'),
	imgWidth = document.getElementById('slider-img').offsetWidth,
	sliderItems = document.getElementById('slider-items'),
	dot = document.getElementsByClassName('dot'),
	move = 0;

	slideTo = (direction) => {
		
		if (direction == "left") move += imgWidth;
		if (direction == "right") move -= imgWidth;
		if (move < -(imgWidth*imgs.length-imgWidth)) move = 0;
		if (move > 0) move = -(imgWidth*(imgs.length)-imgWidth);
		sliderItems.style.left = move + 'px';
	};

	arrowLeft.addEventListener("click", () => {
		dot[-move/imgWidth].classList.remove('dot-active');	
  		slideTo('left');
  		dot[-move/imgWidth].classList.add('dot-active');
  		num.innerText = "0"+(-move/imgWidth+1);

	});

	arrowRight.addEventListener("click", () => {
		dot[-move/imgWidth].classList.remove('dot-active');	
  		slideTo('right');
  		dot[-move/imgWidth].classList.add('dot-active');
  		num.innerText = "0"+(-move/imgWidth+1);
	});


	window.onload = generateDots();

	function generateDots (){
		for(var i = 0; i<imgs.length;i++){
			let placeHolder = document.getElementById('dots'),
				dot = document.createElement('div');
				dot.className = "dot";
				dot.setAttribute('Name', i);
				placeHolder.appendChild(dot);
		}
		dot[0].classList.add('dot-active');
	};


let arrowLeft2 = document.getElementById('arrow-left2'),
	arrowRight2 = document.getElementById('arrow-right2'),
	imgs2 = document.getElementsByClassName('slider-item2'),
	imgWidth2 = 570,
	sliderItems2 = document.getElementById('slider-items2'),
	move2 = 0;

	slideTo2 = (direction) => {
		
		if (direction == "left") move2 += imgWidth2;
		if (direction == "right") move2 -= imgWidth2;
		if (move2 < -(imgWidth2*imgs2.length-imgWidth2)) move2 = -(imgWidth2*imgs2.length-imgWidth2);
		if (move2 > 0) move2 = 0;
		sliderItems2.style.left = move2 + 'px';
	};

	arrowLeft2.addEventListener("click", () => {
		imgs2[-move2/imgWidth2].classList.remove('slide-active');
		imgs2[-move2/imgWidth2].classList.add('slide-noactive');
  		slideTo2('left');
  		imgs2[-move2/imgWidth2].classList.remove('slide-noactive');
  		imgs2[-move2/imgWidth2].classList.add('slide-active');

	});

	arrowRight2.addEventListener("click", () => {
		imgs2[-move2/imgWidth2].classList.remove('slide-active');
		imgs2[-move2/imgWidth2].classList.add('slide-noactive');
  		slideTo2('right');
  		imgs2[-move2/imgWidth2].classList.remove('slide-noactive');
  		imgs2[-move2/imgWidth2].classList.add('slide-active');
	});