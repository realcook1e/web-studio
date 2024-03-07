function portfolioSlider() {
	const slider = document.querySelector(".portfolio-slider");
	const sliderContainerWidth = parseFloat(window.getComputedStyle(slider).width) + 100;
	/**
	 * @type {HTMLElement}
	 */
	const slidesWrapper = slider.querySelector(".portfolio-slider__slides");
	const prevBtn = slider.querySelector(".portfolio-slider__prev-btn");
	const nextBtn = slider.querySelector(".portfolio-slider__next-btn");

	prevBtn.addEventListener("click", () => {
		slidesWrapper.prepend(slidesWrapper.lastElementChild);
	});

	nextBtn.addEventListener("click", () => {
		slidesWrapper.appendChild(slidesWrapper.firstElementChild);
	});
}

export default portfolioSlider;
