import wow from "./wow";
import portfolioSlider from "./portfolioSlider";
import tariffSlider from "./tariffSlider";

document.addEventListener("DOMContentLoaded", () => {
	portfolioSlider();
	tariffSlider(1, "tariffs-slider__slide--active", "slider-btn--disabled");
	wow();
});
