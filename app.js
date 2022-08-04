$(function () {
	$("#user-price").on("input", priceComponent);

	function priceComponent() {
		let priceSlider = $("#user-price").val();
		priceSlider = parseInt(priceSlider);
		let priceSliderPercentage = (priceSlider / 32) * 100;
		$("#price-change").text(`$${priceSlider}.00 `);
		console.log(priceSliderPercentage);

		$(".selector-btn").css({
			left: `${priceSliderPercentage}%`,
		});
	}

	let x = window.matchMedia("(max-width=480px)");

	function discount(xx) {
		$("#discount").text("-25%");
	}

	discount(x);
});
