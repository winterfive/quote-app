var newQuote;

class MyComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "name",
      quote: "quote",
    }
		
		this.getNextQuote = this.getNextQuote.bind(this);
		this.checkForNewQuote = this.checkForNewQuote.bind(this);
	}
	
	getNextQuote() {
    $.ajax({
      url: "https://codepen.io/CodeMoo/pen/KJEmeO.js",
      type:"get",
      dataType:'json',  
      success: function(data){
        newQuote = data;
      },
      error: function() {
        console.log("err");
      }
    });
  }
	
	checkForNewQuote() {
    if(newQuote.author != prevAuthor) {
			render();
		}
  }
    
	render() {
		return (
			<div id="quote-box">
				<div id="text">text</div>
				<div id="author">author</div>
				<div id="div-buttons">
					<div id="tweet-quote"><i class="fab fa-twitter-square fa-2x"></i></div>
					<div id="facebook-quote"><i class="fab fa-facebook-square fa-2x"></i></div>
					<div id="email-quote"><i class="fas fa-envelope-square fa-2x"></i></div>
					<div id="new-quote">
						<button>new quote</button>
					</div>
				</div>      
			</div> 
		)
		document.getElementById('app');
	}
}
