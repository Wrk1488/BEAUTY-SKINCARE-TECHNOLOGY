document.addEventListener('DOMContentLoaded', () => {
	const duration = 2000;
	const donuts = document.querySelectorAll('.donut');

	donuts.forEach((donut) => {
		const chartElement = donut.querySelector('.donut-chart');
		const percentageElement = donut.querySelector('.percentage');
		const targetPercentage = parseInt(chartElement.getAttribute('data-target'), 10);
		const startTime = performance.now();

		function animate(currentTime) {
			const elapsedTime = currentTime - startTime;
			const progress = Math.min(elapsedTime / duration, 1); // Прогресс от 0 до 1
			const currentPercentage = Math.round(progress * targetPercentage);

			percentageElement.textContent = `${currentPercentage}%`;

			chartElement.style.background = `conic-gradient(
			#F1DEBD99 0%, 
			#E4C48C ${currentPercentage}%, 
			#FAF3F4 ${currentPercentage}%, 
			#FAF3F4 100%
		 )`;

			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		}

		requestAnimationFrame(animate);
	});
});