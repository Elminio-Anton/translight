document.addEventListener("DOMContentLoaded", (event) => {
	let portfolioSlidesContainer = document.querySelector(".slides-container")
	let baseSlidesCoords = [0, 570, 1140]
	let currentImageSlide = 0

	document.querySelector(".image-slider-left").addEventListener("click", (event) => {
		event.preventDefault()

		console.log("left")
		let slidesCoords = baseSlidesCoords.slice()
		if (portfolioSlidesContainer.clientWidth < 540)
			slidesCoords.forEach(
				(elem, i, arr) => (arr[i] += 540 - portfolioSlidesContainer.clientWidth)
			)

		if (currentImageSlide === 0) {
			scrollH(portfolioSlidesContainer, slidesCoords[slidesCoords.length - 1], 200)
			currentImageSlide = slidesCoords.length - 1
		} else {
			scrollH(portfolioSlidesContainer, slidesCoords[--currentImageSlide])
		}
	})

	document.querySelector(".image-slider-right").addEventListener("click", (event) => {
		event.preventDefault()
		console.log("right")
		let slidesCoords = baseSlidesCoords.slice()
		if (portfolioSlidesContainer.clientWidth < 540)
			slidesCoords.forEach(
				(elem, i, arr) => (arr[i] += 540 - portfolioSlidesContainer.clientWidth)
			)

		if (currentImageSlide === slidesCoords.length - 1) {
			scrollH(portfolioSlidesContainer, slidesCoords[0], 200)
			currentImageSlide = 0
		} else {
			scrollH(portfolioSlidesContainer, slidesCoords[++currentImageSlide])
		}
	})
})

const scrollH = (node, leftPosition, steps = 50) => {
	let path = leftPosition - node.scrollLeft
	let step = path / steps

	let i = 0
	let intervalId = setInterval(() => {
		i++
		if (i === steps) {
			node.scrollLeft = leftPosition
			clearInterval(intervalId)
		}
		node.scrollLeft += step
	}, 5)
}
