import ReactDOM from 'react-dom'
import React from 'react'

require('react-infinite-carousel')

var carousel = document.getElementById('carousel'),
    backgroundRenderer = function(index){
	    return <img src={"backgroundImage.png"} width: '100%', height: '100%'/>
    },
    itemRenderer = function(index, progress){
    	return <div>{"Item number " + index} </div>
    };
    
	React.render(<Carousel
                backgroundRenderer={backgroundRenderer}
                itemRenderer={itemRenderer}
                itemsCount={10}
            />, content);
