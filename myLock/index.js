/* ~~~~~~~~~~~~~still some issue~~~~~~~~~~~~~ */

const Model = (() => {
	const domstr = {
		mins: ".circMin",
		secs: ".circSec",
		hors: ".circHor",
		currientdate: ".time_currientdate",
	};
	const render = (ele, tmp) => {
		ele.innerHTML = tmp;
	};
	const circularText = (arr, radius, elementStr, currentTime = 0) => {
		const classIndex = document.querySelector(elementStr);
		const deg = 360 / arr.length;
		let origin = currentTime * deg + 90;
		let tmp = "";
		arr.forEach((ea) => {
			tmp += `
            <p 
              class="clock_base"
              style='height:${radius}px; transform:rotate(${origin}deg);'
            >
              ${ea}
            </p>
          `;
			origin += deg;
		});
		render(classIndex, tmp);
	};
	const generateH = () => {
		return new Array(24)
			.fill(0)
			.map((_, i) => {
				return i === 23 ? 0 : i + 1;
			})
			.reverse();
	};
	const generateMS = () => {
		return new Array(60)
			.fill(0)
			.map((_, i) => {
				return i === 59 ? 0 : i + 1;
			})
			.reverse();
	};
	const currentDate = (current) => {
		const ele = document.querySelector(domstr.currientdate);
		render(ele, current);
	};
	return {
		currentDate,
		circularText,
		domstr,
		render,
		generateH,
		generateMS,
	};
})();

const Controller = ((model) => {
	const bootstrap = () => {
		setInterval(() => {
			const date = new Date();
			model.currentDate(date.toDateString());

			model.circularText(
				model.generateH(),
				150,
				model.domstr.hors,
				date.getHours()
			);
			model.circularText(
				model.generateMS(),
				200,
				model.domstr.mins,
				date.getMinutes()
			);
			model.circularText(
				model.generateMS(),
				250,
				model.domstr.secs,
				date.getSeconds()
			);
		}, 1000);
	};

	return { bootstrap };
})(Model);

Controller.bootstrap();
