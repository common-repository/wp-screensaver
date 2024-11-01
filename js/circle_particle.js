

jQuery(document).ready(function(){

var canvas = document.createElement('canvas'); 
//document.body.appendChild(canvas);

canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 

var ctx = canvas.getContext('2d'); 

var particles = []; 
var counter = 0; 

//every thing is here====================================================================

function fgh(){setInterval(draw, 1000/60);
jQuery('body').append(canvas); }

pqrs = setTimeout(function(){fgh();},wp_scr_wait_time*1000);
jQuery(document).on('mousemove click keypress', function(){
jQuery(canvas).remove();
clearTimeout(pqrs);
pqrs = setTimeout(function(){fgh();},wp_scr_wait_time*1000);
});

//====================================================================
function draw() { 

	ctx.clearRect(0,0,canvas.width, canvas.height);
	
	if(counter%10 == 0) { 
		var p = new Particle(canvas.width/2, 0); 
		particles.push(p); 
	}
	
	if(particles.length>100) particles.shift(); 
	
	
	for(var i = 0; i<particles.length; i++) { 
		p = particles[i]; 
		p.update(); 
		p.colour = 'blue';
		
	}

	for(var i = 0; i<particles.length; i++) { 
		
		var p1 = particles[i]; 
		
		for(var j = i+1; j<particles.length; j++) { 
			var p2 = particles[j]; 
			
			// compare p1 and p2
			
			if(p1.pos.isCloseTo(p2.pos, p1.radius+p2.radius)) { 
				// overlapping! 
				
				p1.colour = 'red'; 
				p2.colour = 'red';
				
				var v = p2.pos.minusNew(p1.pos); 
				var dist = v.magnitude(); 
				v.normalise(); 
				
				
				var overlap = dist - p1.radius - p2.radius; 
				v.multiplyEq(overlap); 
			
				v.multiplyEq(0.5); 
				p2.vel.minusEq(v); 
				p1.vel.plusEq(v); 			
				
			}
						
		}
		
	}

	for(var i = 0; i<particles.length; i++) { 
		p = particles[i]; 
		p.render(ctx); 
	}

	counter++; 

}

function Particle(x, y) { 

	var pos = this.pos = new Vector2(x,y); 
	var vel = this.vel = new Vector2(random(-0.1,0.1), random(2,5)); 
	this.radius = random(10,11); 
	this.colour = 'white'; 
	
	this.update = function() { 
		pos.plusEq(vel); 
		vel.multiplyEq(0.97); 
		vel.y +=0.3; 
		
		if((pos.y> canvas.height-100) && (pos.y-vel.y<=canvas.height-100) && (pos.x>100) && (pos.x<canvas.width-100)) { 
			pos.y = canvas.height-100; 
			vel.y*=-0.6; 		
		}		
		
	}
	
	this.render = function(ctx) { 
		ctx.strokeStyle= this.colour; 
		ctx.lineWidth = 3; 
		ctx.beginPath(); 
		ctx.arc(pos.x,pos.y,this.radius,0,Math.PI*2, true); 
		ctx.stroke();		
	}	
	
}


function random(min, max) { 
	return Math.random()* (max-min) + min; 	
}

});