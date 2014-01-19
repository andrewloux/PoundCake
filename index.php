<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<title>Pound Cake</title>
	<link rel="stylesheet" href="css/cake.css" type="text/css" />
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
	<script type="text/javascript" src="http://code.createjs.com/createjs-2013.12.12.min.js"></script>
	<script type="text/javascript" src="js/ndgmr.Collision.js"></script>
	<script type="text/javascript" src="js/cake.js"></script>
</head>

<body>
<!-- Twitter -->
<div id="game_over">
	<div id="restart">RESTART</div>
	<div id="tweet">
		<a id="twitter_url" href="http://twitter.com/share?url=http://cakecakecake.meteor.com&text=xxx" target="_blank">
			<img style="width:45px;"src="http://www.simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
		</a>
	</div>
	<div style="text-align:center;">
		TWEET YOUR SCORE!
	</div>
</div>
<div class="canvasHolder">
	<canvas class="cake-canvas" id="demoCanvas"></canvas>
	<!-- Call Main() from a handler -->
	<div id="start">START</div>
	<div id="score">0</div>
	<br>
	<div id="lives">
		<!-- Cake column -->
		<div id="one" class="life"></div>
		<div id="two" class="life"></div>
		<div id="three" class="life"></div>
	<div>	
</div>

</body>
</html>
