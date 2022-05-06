<!DOCTYPE HTML>
<html xmlns='http://www.w3.org/1999/xhtml' xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html"
	  lang='ru'>
<head>
	<meta charset='UTF-8'> <!-- Encoding -->
	<meta name='viewport' content='width=device-width, initial-scale=1.0, max-scale=1.0, user-scalable=0' /> <!--
	 Adobtive window -->

	<link rel='apple-touch-startup' href='/restaimg/menu/interrior.png'/>
	<meta name='HandheldFriendly' content='true'>


	<title>The name site</title>
	<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">

	<!-- link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
	integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" -->
	<link rel='stylesheet' href='/resta/css/nulstyle.css' type='text/css'> <!-- Zero style -->
	<link rel='stylesheet' href='/resta/css/styleScss.css' type='text/css' > <!-- media="screen and
	(min-width:320px) -->
	<link rel='stylesheet' href='/resta/css/screen-style.css' type='text/css'> <!-- Zero style -->

	<!--
	 Common style -->


	<!--link rel='stylesheet' href='/resta/css/slider_style.css' type='text   --> <!-- Slider style -->
	<!-- link rel='stylesheet' href='js/css/carusel/carusel_style.css' type='tex    --> <!-- Carusel style -->



	<!--	«IE=EmulateIE8» -->
	<!--	 «IE» -->
	<!--  link rel='stylesheet' href='/resta/css/ie-style.css' media='all'  --> <!--The browswr's IE style -->


	<meta http-equiv= 'X-UA-Compatible' content='IE-edge'>
	<!-- [if lte IE8] -->
	<!-- script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script -->
	<script type='module' src='/resta/js/js.js'></script>
	<script>
	  $( function() {
	    $( "#slider-range" ).slider({
	      range: true,
	      min: 0,
	      max: 500,
	      values: [ 75, 300 ],
	      slide: function( event, ui ) {
	        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	      }
	    });
	    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	  } );
  </script>

</head>
<body class="">

	<header class="" >
		<!--header start -->
		<?php include '../header.php'; ?>
		<!--header end -->
	</header>
		<!--aside start -->
		<?php include 'aside.php'; ?>
		<!--aside end -->
	<main class="main" id='main'>
		<!--main start -->
		<?php include './main.php'; ?>
		<!--main end -->
	</main>
	<footer>
		<!--footer start -->
		<?php include '../footer.php'; ?>
		<!--footer end -->
	</footer>
</body>
</html>
