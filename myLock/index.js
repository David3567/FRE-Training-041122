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

		arr.forEach((ea) => {
			ea = `
          <p 
            class="clock_base"
            style='height:${radius}px; transform:rotate(${origin}deg);'
          >
            ${ea}
          </p>
        `;
			classIndex.innerHTML += ea;
			origin += deg;
		});
	};

	const rotateAnimation = (eleStr, degree, counter) => {
		const eachDeg = 360 / counter;
		const ele = document.querySelector(eleStr);
		ele.style.transform = `rotate(${degree.num}deg)`;

		degree.num = degree.num === 360 ? 0 : degree.num + eachDeg;
	};

	return {
		circularText,
		rotateAnimation,
		domstr,
		render,
	};
})();

const Controller = ((model) => {
	const currentDate = (current) => {
		const ele = document.querySelector(model.domstr.currientdate);
		model.render(ele, current);
		setInterval(() => {
			model.render(ele, current);
		}, 24 * 3600 * 1000);
	};

	const forHors = () => {
		let degree = { num: 360 / 24 };
		const date = new Date();
		const hors = new Array(24)
			.fill(0)
			.map((ele, i) => {
				return i === 23 ? 0 : i + 1;
			})
			.reverse();
		model.circularText(hors, 150, model.domstr.hors, date.getHours());

        setTimeout(() => {
			model.rotateAnimation(model.domstr.hors, degree, 24);
			setInterval(() => {
				model.rotateAnimation(model.domstr.hors, degree, 24);
			}, 3600 * 1000);
		}, (3600 - date.getMinutes() * 60 - (60 - date.getSeconds())) * 1000);
	};

	const forMins = () => {
		let degree = { num: 360 / 60 };
		const date = new Date();
		const mins = new Array(60)
			.fill(0)
			.map((ele, i) => {
				return i === 59 ? 0 : i + 1;
			})
			.reverse();
		model.circularText(mins, 200, model.domstr.mins, date.getMinutes());

		setTimeout(() => {
			model.rotateAnimation(model.domstr.mins, degree, 60);
			setInterval(() => {
				model.rotateAnimation(model.domstr.mins, degree, 60);
			}, 60 * 1000);
		}, (60 - date.getSeconds()) * 1000);
	};

	const forSecs = (currentSec) => {
		let degree = { num: 0 };
		const seconds = new Array(60)
			.fill(0)
			.map((ele, i) => {
				return i === 59 ? 0 : i + 1;
			})
			.reverse();
		// <---- half the height of the box;
		model.circularText(seconds, 250, model.domstr.secs, currentSec);

        setTimeout(() => {
			model.rotateAnimation(model.domstr.secs, degree, 60);
            setInterval(() => {
                model.rotateAnimation(model.domstr.secs, degree, 60);
            }, 1 * 1000);
		}, 0 * 1000);
	};

	const bootstrap = () => {
		const date = new Date();
		currentDate(date.toDateString());
        forHors();
		forMins();
		forSecs(date.getSeconds());
	};

	return { bootstrap };
})(Model);

Controller.bootstrap();
