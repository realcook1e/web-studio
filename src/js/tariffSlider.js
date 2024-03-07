function tariffSlider(initialSlide = 1, activeClass, disabledBtnClass) {
	const slider = document.querySelector(".tariffs-slider");
	/**
	 * @type {HTMLElement}
	 */
	const slidesWrapper = slider.querySelector(".tariffs-slider__slides");
	const allSlides = slider.querySelectorAll(".tariffs-slider__slide");
	const prevBtn = slider.querySelector(".tariffs-slider__prev-btn");
	const nextBtn = slider.querySelector(".tariffs-slider__next-btn");
	const maxSlideIndex = allSlides.length - 1;
	let curSlide = initialSlide;
	let slideOffset = 327;

	function setActiveSlide(index) {
		allSlides.forEach(slide => {
			slide.classList.remove(activeClass);
		});
		allSlides[index].classList.add(activeClass);
		slidesWrapper.style.transform = `translateX(${
			index === 0 ? slideOffset : -slideOffset * (index - 1)
		}px)`;

		if (index === 0) {
			prevBtn.classList.add(disabledBtnClass);
			prevBtn.setAttribute("disabled", true);
		} else {
			prevBtn.classList.remove(disabledBtnClass);
			prevBtn.removeAttribute("disabled");
		}

		if (index === maxSlideIndex) {
			nextBtn.classList.add(disabledBtnClass);
			nextBtn.setAttribute("disabled", true);
		} else {
			nextBtn.classList.remove(disabledBtnClass);
			nextBtn.removeAttribute("disabled");
		}
	}

	prevBtn.addEventListener("click", () => {
		if (curSlide > 0) {
			curSlide--;
			setActiveSlide(curSlide);
		}
	});

	nextBtn.addEventListener("click", () => {
		if (curSlide < maxSlideIndex) {
			curSlide++;
			setActiveSlide(curSlide);
		}
	});

	setActiveSlide(initialSlide);
}

export default tariffSlider;
