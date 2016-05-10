import ReactDOM from 'react-dom'
import React from 'react'
import Carousel from './components/carousel.js'

var headlines = ["Headline 1", "Headline 2", "Headline 3"]
var index = 0

var carousel = function(){
	var DOMcarousel = document.getElementById("carousel")
	DOMcarousel.innerHTML = headlines[index++]
	if(index >= headlines.length){
		index = 0
	}
}

var callCarousel = function(headlinesConfig){
	headlines = headlinesConfig
	var intervalID = window.setInterval(carousel, 1000)
}

window.callCarousel = callCarousel

ReactDOM.render(<Carousel/>, document.getElementById("carousel"))