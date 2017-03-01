<?php include('header.php');
echo("<div id='fakeBody'>");
$dir    = 'blogs';
$files = array_slice(scandir($dir, $sorting_order = SCANDIR_SORT_DESCENDING), 0, $length = -2);

for ($i=0;$i<sizeOf($files) and $i < 10;$i++) {
	
	$file = file_get_contents("blogs/" . (string)$files[$i],True);
	$file = nl2br ($file);
	$findNextBr = stripos($file,'<br');
    echo('<div class="blogPost">');
	echo("<h2>".substr($file,0,$findNextBr)."</h2>"); #title
	$file = substr($file, $findNextBr+8);
    
	$findNextBr = stripos($file,'<br');
	echo("<h3>".substr($file,0,$findNextBr)."</h3>"); #Author
	$file = substr($file, $findNextBr+8);
	$findNextBr = stripos($file,'<br');
	echo("<h5>".substr($file,0,$findNextBr)."</h5>"); #postDate
	$file = substr($file, $findNextBr+8);
    echo('<hr>');
    echo('<br>');
	
	
	echo("<div class='blogText'>".$file."</div>");
    echo("<div style='clear:both'></div>");
    echo('</div>');
    
}
echo("<div id = 'blogList'>");
echo('<ol>');
for ($i=0;$i<sizeOf($files) and $i < 10;$i++) {
    $file = "blogs/" . (string)$files[$i];
    echo("<li><a href=" . 'http://localhost:8080/'.$file.'>' . substr($file,7) . '</a></li>');#Cheating here with the name, sue me.
}
echo('</ol>');
echo("</div>");

echo("</div>");
echo("</body>
</html>");
?>
