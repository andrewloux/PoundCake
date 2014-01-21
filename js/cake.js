		//On Document Ready
		
		var queue;
		$(document).ready(function(){
			//Show loadig modal
			$("#loading_modal").modal('show');
			// #start click reaction.
			$("#start").click(function(){
				$("#start").hide();
				Main();
			});
			// #restart click reaction.
			$("#restart").click(function(){
				$("#game_over").hide();
				Main();
			});			
			
			$("#twitter_url").click(function(){
				var score = $("#score").text();
				var msg = "http://twitter.com/share?url=http://cakecakecake.heroku.com&hashtags=cakecakecake&text="+ score +" cakes! #cakecakecake";
				$("#twitter_url").attr("href",msg);
			});
			
			// Preload images
			var manifest = [
                {src:"assets/cake.png", id:"cake"},
                {src:"assets/jayz.png", id:"jayz"},
                {src:"assets/CakeLoop.ogg", id:"CakeLoop"}
            ];			
			//Global variable below
			queue = new createjs.LoadQueue();
			queue.installPlugin(createjs.Sound);
			queue.on("complete", handleComplete, this);			
			queue.loadManifest(manifest);
		});
		
		function handleComplete(){
			$("#loading_modal").modal('hide');
		}
		
		// Array Remove - By John Resig (MIT Licensed)
		Array.prototype.remove = function(from, to) {
		  var rest = this.slice((to || from) + 1 || this.length);
		  this.length = from < 0 ? this.length + from : from;
		  return this.push.apply(this, rest);
		};
		
		/*Since the JS Trig functions take only rads*/
		function toRadians (angle) {
			return angle * (Math.PI / 180);
		}
		
		/*Keyboard input identifiers*/
		var KEYCODE_LEFT = 37, 
			KEYCODE_RIGHT = 39,
			KEYCODE_UP = 38, 
			KEYCODE_DOWN = 40;
		
		var cake_tray = [];
		/*the cake*/
		
		/*Keyboard input handlers - keydown and keyup*/
		var left,
			right,
			up,
			down;

		function keyPressed(event){
			if(!event){ var event = window.event; }
			switch(event.keyCode){
				case KEYCODE_LEFT: 
					console.log("left held");
					left = true;
					break;
				case KEYCODE_RIGHT: 
					console.log("right held");
					right = true; 
					break;
				case KEYCODE_UP: 
					console.log("up held");
					up = true;
					break;
				case KEYCODE_DOWN: 
					console.log("down held");
					down = true;
					break;          
			}
		}

		function keyUp(event){
			if(!event){ var event = window.event; }
			switch(event.keyCode){
				case KEYCODE_LEFT: 
					console.log("left released");
					left = false;
					break;
				case KEYCODE_RIGHT: 
					console.log("right released");
					right = false; 
					break;
				case KEYCODE_UP: 
					console.log("up released");
					up = false;
					break;
				case KEYCODE_DOWN: 
					console.log("down released");
					down = false;
					break;          
			}
		}
		
		//Animations for losing life.
		function lost_life(life_id){
			$("#" + life_id).animate({'opacity':.2},300,function(){
				$("#" + life_id).animate({'opacity':1},300, function(){
						$("#" + life_id).animate({'opacity':.2},300, function(){
								$("#" + life_id).animate({'opacity':1},300, function(){
										$("#" + life_id).css("opacity","0");
									});
								}); 
						});
				});			
		}
		
		function Main(){	
			
			//Loading modal ensures that this is loaded before Main() is called.
			createjs.Sound.play("CakeLoop", createjs.Sound.INTERRUPT_ANY, 0, 0, -1, 0.10, 0);
			
			//Setting up control variables and resetting state
			$(".cake-canvas").css("border","1px solid");
			$(".life").each(function(){$(this).css("opacity","1");});
			var lives_lost = 0;
			var game_on = true;
			$("#score").text(0);

			/*Link Canvas*/
			var stage = new createjs.Stage('demoCanvas');					
			
			/*Jay-Z initialization*/
			var path = queue.getResult("jayz");
						
			var ellip = new createjs.Bitmap(path);
			var current_ellipWidth = ellip.image.width;
			var current_ellipHeight = ellip.image.height;
			var desired_ellipWidth = 65;
			var desired_ellipHeight = 70;
			ellip.x = 120;
			ellip.y = 50;	
			ellip.scaleX = desired_ellipWidth/current_ellipWidth;
			ellip.scaleY = desired_ellipHeight/current_ellipHeight;	
		
			/*Jay-Z initialization*/
			stage.addChild(ellip);
			/*This function must exist after the Stage is initialized so I can keep popping cakes onto the canvas*/
			function make_cake(){
			    var path = queue.getResult("cake");
				var cake = new createjs.Bitmap(path);
				var current_cakeWidth = cake.image.width;
				var current_cakeHeight = cake.image.height;
				var desired_cakeWidth = 20;
				var desired_cakeHeight = 20;
                cake.x = 0;
                cake.y = Math.floor((Math.random()*(stage.canvas.height-35))+1); //Random number between 1 and 10
				cake.scaleX = desired_cakeWidth/current_cakeWidth;
				cake.scaleY = desired_cakeHeight/current_cakeHeight;

				
				//cake.rotation = Math.floor((Math.random()*100)+1); //Random angle between 1 and 180
				cake.rotation = 0;
				stage.addChild(cake);
				cake_tray.push(cake);
			}
			
			/*Speed/Difficulty Control*/
			var cake_speed = 3;		var jay_speed = 7;
			setInterval(function(){cake_speed+=1;},7000);
			setInterval(function(){jay_speed+=1;},10000);
			
			
			/*Connecting keydown input to keyPressed handler*/
			this.document.onkeydown = keyPressed;
			/*Connecting key up event to keyUp handler*/
			this.document.onkeyup = keyUp;
			
			/*Continually updating the stage*/
			createjs.Ticker.addEventListener('tick',handleTick);
			
			function handleTick(event){
				stage.update();
							
			   /*Scaling down the image*/
				//ellip.scaleX = 0.10;
				//ellip.scaleY = 0.10;

				if(left) {
					//If too far left
					if (ellip.x < 0){
						;
					}
					else{
						ellip.x -= jay_speed;
					}
				} else if(right) {
					//If too far right
					if (ellip.x > (stage.canvas.width-35)){
						;
					}
					else{
						ellip.x += jay_speed;
					}
				}

				if(up) {
					//If too far up
					if (ellip.y <=0){
						;
					}
					else{
						ellip.y -= jay_speed;
					}
				} else if(down) {
					//If too far down
					if (ellip.y > (stage.canvas.height-35)){
						;
					}
					else{
						ellip.y += jay_speed;
					}
				}

				if (ellip.x > stage.canvas.width) { 
					ellip.x = stage.canvas.width; 
				}   
				
				/*
				a.) Check cake collisions
				b.) Cake movements
				*/
				
				
				for (var i = 0; i < cake_tray.length; i++) {
				
					var killed_cake = false;
					
					var collision = ndgmr.checkPixelCollision(ellip,cake_tray[i],0.5);
					
					if (collision){
						//Points tallying
						var score = parseFloat($("#score").text());
						score+=10;
						$("#score").text(score);
						
						//Removing cakes Jay Z has eaten.
						stage.removeChild(cake_tray[i]);
						cake_tray.remove(i);
						killed_cake = true;
					}
					else{
						//If the cake moves past the screen, remove from cake_tray and stage. 
						if (cake_tray[i].x > stage.canvas.width){
							//Dock lives over here.
							lives_lost+=1;
		
							if (lives_lost == 1){
								lost_life("one");
							}
							else if (lives_lost == 2){
								lost_life("two");
							}
							else if (lives_lost == 3){
								lost_life("three");
								
								//Game Over, reset game state.
								lives_lost = 0;
								cake_tray = [];
								game_on = false;
								
								//Refresh stage
								createjs.Sound.stop();
								stage.removeAllChildren();
								$("#game_over").show(); //Show Share/Restart Dialog
								createjs.Ticker.removeEventListener('tick', handleTick);
							}
						
							stage.removeChild(cake_tray[i]);
							cake_tray.remove(i);
							killed_cake = true;
						}
						if (killed_cake == false){
							//Moving cake position
							cake_tray[i].x = cake_tray[i].x + Math.cos(toRadians(cake_tray[i].rotation))*cake_speed;
						}
					}
				}
				
				//Populating the canvas
				if (game_on == true){
					if (cake_tray.length < 5){
						make_cake();
					}
				}
				else{
					;
				}
												
			}
			return;
		}