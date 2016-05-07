require('react-infinite-carousel')

var content = document.getElementById('content'),
    backgroundRenderer = function(index){
	    return <img src={"backgroundImage.jpg"} width: '100%', height: '100%'/>
    },
    itemRenderer = function(index, progress){
    	return <div>{"Item number " + index} </div>
    };
    
	React.render(<Carousel
                backgroundRenderer={backgroundRenderer}
                itemRenderer={itemRenderer}
                itemsCount={10}
            />, content);
