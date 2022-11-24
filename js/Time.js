<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Time of Day</title>
    <meta name="robots" content="noindex,nofollow" />
    <style>
		* {padding:0; margin:0;}
		html {background-color:#ccc;}
		body {
			font-family: Arial, Helvetica, sans-serif;
			max-width:960px; /* keeps from getting too large on wide screen */
			width:90%; /* shrink to fit screen */
			margin:auto; /* center in html element */
			background-color:#fff;
			padding:20px;
			min-height:100%; /* keeps from getting too large on wide screen */
			}
		img.flexible {
			float:right;
			display:inline-block;
			padding:20px;
			max-width:300px; /* actual size of image */
			width:33%; /* approximate size taken on screen in maximum view */
		}
		p {margin:10px;}
		h1,h2,h3,h4,h5,h6{
			font-weight:normal;
			margin:10px;
			}
		h1.masthead {margin-top:0;}
		footer {
			text-align:center;
			clear:both; /* ride below all items */
			}
		nav{
			text-align:center; /* centers the nav */
		}
		
		nav ul {
				list-style:none; /* removes the bullets */
			}
		nav ul li
			{
				display:inline-block; /* makes horizontal, but able to declare margins */
				margin:0 2%; /* margin left-right, gets smaller as necessary */
			}
		nav a:hover{
			text-decoration: none;
		}	
    </style>
</head>
<body>
	<header>
		<h1 class="masthead">Time of Day</h1>

	</header>
    <main>
	 <header>
		<h3>A JavaScript project by Adonay Abay</h3>
		<h3 id="my-greeting">Greeting</h3>
	</header>
	 <p>
		This web page created using JavaScript to determine the current hour, 
		and presents a different image, custom message, and color based on 
		each of the following times of day.</p>
	 <p>Morning (5am to 12 noon)</p>
	 <p>Afternoon (12 noon to 6pm)</p>
	 <p>Evening (6pm to 11pm)</p>
	 <p>Night (11pm to 5am)</p>
	  <img id="my-pic" src="http://dummyimage.com/300x400" alt="Time of Day Image" class="flexible" />
     <footer>
		<p><small>&copy; 2022-<span id="this-year"></span> by 
			Adonay Abay, All Rights Reserved ~ 
          <a id="html-checker" href="#">Check HTML</a> ~ 
          <a id="css-checker" href="#">Check CSS</a></small>
     </p>
    </footer>
  </main>
 <script>
    //https://tinyurl.com/dynamic-html-checker
    document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
      
    document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);  
	

	/*

	Create a web page that uses JavaScript to determine the current hour, 
	and presents a different image, custom message, and color based on 
	each of the following times of day:

	Morning (5am to 12 noon)
	Afternoon (12 noon to 6pm)
	Evening (6pm to 11pm)
	Night (11pm to 5am)

	*/



	
	let myDate=new Date();
    let myHour=myDate.getHours();
	let myGreeting="";
    let myColor = "";
	let myPic="";

    //Remove the next line when done testing
	

    if(myHour>=5 && myHour<12){   
      //alert("Good Morning!");
     myGreeting="Good Morning!";
	 myColor = "orange";
	 myPic="morning.jpg";

	}else if(myHour>=12 && myHour<18){ 
     myGreeting="Good Afternoon!";
	 myColor = "green";
	 myPic="afternoon.jpg";


	}else if(myHour>=18 && myHour<23){ 
     myGreeting="Good evening!";
	 myColor = "white";
	 myPic="evening.jpg";
	 
	}else if(myHour>=23 && myHour<5){ 
     myGreeting="Good night!";
	 myColor = "blue";
	 myPic="night.jpg";



    }else{
     //alert("Not Afternoon!");
	 myGreeting="Not Afternoon!";
	 myColor = "white";
	 myPic="";
    }
   //console.log(myGreeting);
   //add images path to my pic
   myPic= "images/"+ myPic;

   //here we are placing the greeting on the page
   document.getElementById("my-greeting").innerHTML=myGreeting;
   
   //here we are changing the background color of html tag
   document.querySelector("html").style.backgroundColor =myColor;
   //here we are changing the pic
   document.getElementById("my-pic").src =myPic;
 
 
 
 
 
 </script>
</body>
</html>
