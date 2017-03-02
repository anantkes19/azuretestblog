<!DOCTYPE html>
<html>
	<head>
		<link type='text/css' rel='stylesheet' href='stylesheet.css'/>
        <link rel="icon" href="/img/main.png" type="image/x-icon"/>
		<title>Azure Blog</title>
	</head>
	<body>
	<div id='header'>
    
			<ul>
			  
			  <h1 style="float:left;margin-left:2%;color:#De5c5c;border-bottom:2px black dashed;">N&#178; Rough Blog</h1>
              <div>
              <li id='headerButton'><a <?php if($_SERVER['PHP_SELF']=="/about.php"){
			  echo("id = 'curPage'");}
              ;?>href='about.php'>About Me</a></li>
			  <li id='headerButton'><a <?php if($_SERVER['PHP_SELF']=="/projects.php"){
			  echo("id = 'curPage'");}
			  ;?>href='projects.php'>Projects</a></li>
			  <li id='headerButton'><a <?php if($_SERVER['PHP_SELF']=="/blog-all.php"){
			  echo("id = 'curPage'");}
			  ;?>href='blog-all.php'>Blog</a></li>
			  <li id='headerButton'><a <?php if($_SERVER['PHP_SELF']=="/mainpage.php"){
			  echo("id = 'curPage'");}
			  ;?> href='mainpage.php'>Home</a></li>
              </div>
			</ul>
		</div>
		<div class='image_spacer'></div>