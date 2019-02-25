$social-button-size: 4em;
$text-color: white;
$a-hover-color: #384a71;
$text-author-size: 1.5em;
$text-quote-size: 1.7em;
$text-author-msize: 1.2em;	//mobile author text size
$text-quote-msize: 1.4em;		//mobile quote text size
$quote-box-bg: #b53607;

body {
  /* fonts */
  font-size: 1em;
  color: $text-color;
  margin: 0 auto;  
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#quote-box {
	height: 350px;
	width: 350px;
  background-color: $quote-box-bg;
  border-radius: 3em;
  padding: 3em;
	margin: 0 auto;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

#quote-box:after {
	content: '';
	position: absolute;
	bottom: 0; 
	left: 40%; 
	width: 0; 
	height: 0; 
	border: 80px solid transparent; 
	border-top-color: $quote-box-bg; 
	border-bottom: 10; 
	border-left: 0;
	margin-left: 60px; 
	margin-bottom: -160px;
}

#author-portrait-div {
	border: 2px solid green;
	margin-top: 100px;
}

#text-div {
	height: 70%;
	margin-top: 10%;
}

#text {
  color: $text-color;
	font-size: $text-quote-size;
	line-height: 1.3em;
}

#author {
	margin-top: 10%;
  display: flex;
  justify-content: right;
  color: $text-color;
  font-size: $text-author-size;
}

#div-links {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

a {
	color: $text-color;
	transition: color .25s ease-in-out;
  -moz-transition: color .25s ease-in-out;
  -webkit-transition: color .25s ease-in-out;
}

a:hover {
	color: $a-hover-color;
}

.social-link {
	width: $social-button-size;
	height: $social-button-size;
	padding: 15px;
}

button {	
  height: $social-button-size;
  border-radius: 2em;
  background-color: $text-color;
	border: 0 solid;
	transition: color .25s ease-in-out, background-color .25s ease-in-out;
  -moz-transition: color .25s ease-in-out, background-color .25s ease-in-out;
  -webkit-transition: color .25s ease-in-out, background-color .25s ease-in-out;
}

button:hover {
	background-color: $a-hover-color;
	color: white;
}

@media only screen and (max-width: 475px) {
	
	body {
		align-items: flex-start;
		margin-top: 10%;
		overflow-y: hidden;
	}
	
	#quote-box {
		height: 30vh;
		width: 75%;
		padding: 2em;
	}
	
	#quote-box:after {
		display: none;
	}
	
	#author-portrait-div {
		display: none;
	}
	
	#text {
		font-size: $text-quote-msize;
	}

	#author {
		font-size: $text-author-msize;
	}
	
	#div-buttons {
		flex-wrap: wrap;	
	}
	
	button {
		margin: 0.4em;
	}
}
