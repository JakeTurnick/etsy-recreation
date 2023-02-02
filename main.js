// from data I need: {
//     images.url(sizeXsize)
//     title:
//     price:
//     author:
//     more-link:
// }

import { rawData } from "./data.js";

(function () {
	"use strict";

	const source = document.getElementById("product-template").innerHTML;
	const template = Handlebars.compile(source);

	const data = rawData;
	const html = template(data);

	document.getElementById("product").insertAdjacentHTML("afterbegin", html);
})();
