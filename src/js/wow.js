import WOW from "wow.js";

function wow() {
	const wow = new WOW({ live: false }); // disables sync requirement
	wow.init();
}

export default wow;
