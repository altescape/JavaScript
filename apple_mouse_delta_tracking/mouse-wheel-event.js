Array.max = function( array ){
    return Math.max.apply( Math, array );
};
Array.min = function( array ){
    return Math.min.apply( Math, array );
};

window.onload = function(){
	
	var up = document.getElementById('up');
	var down = document.getElementById('down');
	var right = document.getElementById('right');
	var left = document.getElementById('left');
	
	var hoz = 0, vert = 0;
	
	function handle(delta) {
			hoz = Math.floor(hoz + event.wheelDeltaX*0.073);
			vert = Math.floor(vert + event.wheelDeltaY*0.02);
			
			hozSimp = event.wheelDeltaX;
			vertSimp = event.wheelDeltaY;
			
			if (delta){
				styleContent(hoz,vert);
				mouseDir(hozSimp, vertSimp);
			}
	        
	}
	function styleContent(hoz,vert){
		$('#styleHolder').html('<style>'+
			'#output{'+
				'left:'+hoz+'px;'+
				'top:'+vert+'px}'+
			'</style>');
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
					handle(delta);
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

function mouseDir(dx,dy){
	
	var threshold = 5;
	var north = dy < -threshold;
	var south = dy > threshold;
	var east = dx > threshold;
	var west = dx < -threshold;
	
	// EAST 
	if(east && !(north) && !(south)){
		
		document.body.className += ' hl_e';		
	}
	// WEST 
	if(west && !(north) && !(south)){
		document.body.className += ' hl_w';
	}
	// SOUTH 
	if(south && !(east) && !(west)){
		document.body.className += ' hl_n';
	}
	// NORTH 
	if(north && !(east) && !(west)){
		document.body.className += ' hl_s';
	}
	// NORTH EAST
	if (north && east){
		document.body.className += ' hl_ne';
	}
	// NORTH WEST
	if (north && west){
		document.body.className += ' hl_nw';
	}
	// SOUTH EAST
	if (south && east){
		document.body.className += ' hl_se';
	}
	// SOUTH WEST
	if (south && west){
		document.body.className += ' hl_sw';
	}
	
	
	var myTimer = setTimeout(function(){
		document.body.className = '';
	}, 1000);
	
	// NOTES:
	// Wouldnt it be cool to actually record the mouse movement?
	//for this direction would have to be recorded and the velocity
	
}