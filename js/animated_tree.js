jQuery(document).ready(function(){

// Tree code converted from Jean-no's excellent Processing example : http://www.openprocessing.org/visuals/?visualID=1758

// canvas element and 2D context
var canvas = document.createElement( 'canvas' ),
context = canvas.getContext( '2d' );

canvas.width = 1000; 
canvas.height = 600; 
//document.body.appendChild(canvas);

var	c = context,
	TO_RADIANS = Math.PI/180; 

c.strokeStyle = "green";


var tree = new branchData(100, 0, 0) ; 


//setInterval(loop, 1000/30); 
//every thing is here====================================================================

function fgh(){setInterval(loop, 1000/30);
jQuery('body').append(canvas); }

pqrs = setTimeout(function(){fgh();},wp_scr_wait_time*1000);
jQuery(document).on('mousemove click keypress', function(){
jQuery(canvas).remove();
clearTimeout(pqrs);
pqrs = setTimeout(function(){fgh();},wp_scr_wait_time*1000);
});

//====================================================================

function loop() { 
	
	c.save(); 
	c.clearRect(0,0,800,600); 
	
	c.translate(400,550); 
	c.rotate(-Math.PI/2);
	
	tree.render(c);
	c.restore(); 
}

function branchData(branchlen, angle, generation) {
	
	this.branchlen = branchlen; 
	this.angle = angle; 
	this.generation = generation; 
	
	this.children = []; 
	this.counter =0; 
	this.multiplier = random(0.01,0.1);  
	
	this.growth = 0; 
	this.growthVel = 0; 
	
	
	if(generation<10) { 
		this.children.push(new branchData(branchlen*random(0.7,0.95), random(0,Math.PI/6), this.generation+1)); 
		this.children.push(new branchData(branchlen*random(0.7,0.95), random(0,-Math.PI/6), this.generation+1)); 
		
		
	}
	
	this.render = function(c) { 
		
		this.counter++; 
		

		c.save(); 

		
		this.growthVel*=0.8;
		
		var diff = 1 - this.growth; 
		
		this.growthVel +=(diff*0.1);
		this.growth +=this.growthVel; 	

		c.strokeStyle = "green"; 
		c.lineWidth = 1; 
		c.beginPath(); 
		c.rotate(this.angle + (Math.sin(this.counter*this.multiplier)*Math.PI/128)); 
		c.moveTo(0,0); 
		c.lineTo(this.branchlen * this.growth, 0); 
		c.stroke(); 
		
		c.translate(this.branchlen * this.growth, 0); 
		
		if(this.growth>0.6){
			for(var i=0; i<this.children.length; i++) { 
				var child = this.children[i]; 
				child.render(c); 
			
			}
		}
		c.restore(); 
	};
	
}





// x and y = pos
// a = angle
// s = stroke weight
function branch(length, angle){
	
	c.save(); 
	c.lineWidth = length*0.06;
	c.lineCap = "round"; 
	
	c.rotate(angle); 
	
	c.beginPath();
	c.moveTo(0, 0);
	c.lineTo(length, 0);
	c.stroke();
	
	c.translate(length,0); 
	
	if(length>3){
		//branch on the left
		branch( length * random(0.55,0.80), random(-17,-12) * TO_RADIANS);
		//branch on the right
		branch( length * random(0.55,0.80), random(17,12) * TO_RADIANS);
	}
	c.restore(); 
}


function random(v1, v2){
	return ((Math.random()*(v2-v1))+v1);
	
}

});