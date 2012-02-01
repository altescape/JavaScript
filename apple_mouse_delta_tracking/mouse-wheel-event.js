Array.max = function( array ){
    return Math.max.apply( Math, array );
};
Array.min = function( array ){
    return Math.min.apply( Math, array );
};

window.onload = function(){
	
	/*
	var scroller = document.getElementById('threesixty');
	var scrolloutput = document.getElementById('scrolloutput');
	setTimeout(function(){
		scroller.addEventListener('onscroll',liMouseOver(1),false);
	},50);
	
	function liMouseOver(e){
		//$('#scrollOutput').innerHTML();
		e = e + 1;
		console.log(e);
	}
	*/
	/** This is high-level function.
	 * It must react to delta being more/less than zero.
	 */
	
	var hoz = 0, vert = 0;
	function createshit(hoz,vert){
		$('#styleHolder').html('<style>'+
			'body{box-shadow:0 0 '+hoz+'px rgba(255,255,255,'+vert+') inset}'+
			'#output{'+
				'left:'+hoz+'px;'+
				'top:'+vert+'px}'+
			'#debug{'+
				'left:'+hoz+'px;'+
				'top:'+vert+'px;'+
				 'background:rgba('+vert+','+vert+','+vert+', 1)}'+
			'#debug p{'+
				'-webkit-transform:rotate('+hoz+'deg);'+
				'top:'+vert+'px;'+
				'box-shadow: 0 0 0 '+hoz*0.1+'px rgba('+hoz+','+hoz+','+hoz+', 0.1);'+
				'letter-spacing: '+hoz*0.2+'px}'+
			'</style>');
	}
	
	function handle(delta) {
			hoz = Math.floor(hoz + event.wheelDeltaX*0.073);
			vert = Math.floor(vert + event.wheelDeltaY*0.02);
			
			if (delta){
				console.log(delta);
				createshit(hoz,vert);
			}
	        
	}

	/** Event handler for mouse wheel event.
	 */
	function wheel(event){
	        var delta = 0;
	        if (event.wheelDelta) { /* IE/Opera. */
	                delta = event.wheelDelta*2;
	        } else if (event.detail) { /** Mozilla case. */
	                /** In Mozilla, sign of delta is different than in IE.
	                 * Also, delta is multiple of 3.
	                 */
	                delta = -event.detail*2;
	        }
	        /** If delta is nonzero, handle it.
	         * Basically, delta is now positive if wheel was scrolled up,
	         * and negative, if wheel was scrolled down.
	         */
	        if (delta)
	                //setTimeout(handle(delta),100);
					handle(delta);
					//number();
					//console.log( number() );
					//addElements();
	        /** Prevent default actions caused by mouse wheel.
	         * That might be ugly, but we handle scrolls somehow
	         * anyway, so don't bother here..
	         */
	        if (event.preventDefault)
	                event.preventDefault();
		event.returnValue = false;
	}

	/** Initialization code. 
	 * If you use your own event management code, change it as required.
	 */
	if (window.addEventListener)
	        /** DOMMouseScroll is for mozilla. */
	        window.addEventListener('DOMMouseScroll', wheel, false);
	/** IE/Opera. */
	window.onmousewheel = document.onmousewheel = wheel;
}

function number(){
	if(event.wheelDelta)
	return Math.abs(event.wheelDelta);
	else
	return 0;
}
var arr = new Array;

function addElements(){
	
	console.log('method testing: '+ event.type);
	// get data 
	
	arr.push(number());
	//console.log(Math.floor(number()/8));
	var output = document.getElementById('output');
	var txt = '<p id="last" style="height:'+ number()/4 +'px">'+ number() +'</p>';
	output.innerHTML = txt;
	//	output.appendChild('<p>');
		
}
