<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<title>Pound Cake</title>
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap-theme.min.css">

	<!-- Latest compiled and minified JavaScript -->
	<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="css/cake.css" type="text/css" />
	<script type="text/javascript" src="http://code.createjs.com/createjs-2013.12.12.min.js"></script>
	<script type="text/javascript" src="js/ndgmr.Collision.js"></script>
	<script type="text/javascript" src="js/cake.js"></script>
	
	<!-- Google Analytics Below! -->
	<script type="text/javascript">
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-38690992-4']);
	  _gaq.push(['_trackPageview']);

	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	</script>
</head>

<body>

<!-- Loading modal button -->
<div class="modal fade" id="loading_modal" role="loading" data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
			<br>
            <!-- Meat of the progress bar -->
                  <div class="progress progress-striped active">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                    </div>
            </div>
      </div>
    </div>
  </div>
</div>


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
	</div>	
</div>

<div id="info">Use your arrow keys to control Jay Z, and DON'T let any of the cakes get away!</div>
<div id="contact">github.com/alouis93</div>


</body>
</html>
