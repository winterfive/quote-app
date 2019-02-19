

let newQuote;

class MyComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "name",
      quote: "quote",
    }
		
		this.getNextQuote = this.getNextQuote.bind(this);
	}
	
	getNextQuote() {
    $.ajax({
      url: "https://codepen.io/CodeMoo/pen/KJEmeO.js",
      type:"get",
      dataType:'json',  
      success: function(data){				
        newQuote = data;
				console.log(newQuote[9]);
      },
      error: function() {
        console.log("err");
      }
    });
  }
    
	render() {
		return (
			<div id="quote-box">
				<div id="text">{this.state.quote}</div>
				<div id="author">{this.state.author}</div>
				<div id="div-buttons">
					<div id="tweet-quote"><i class="fab fa-twitter-square fa-2x"></i></div>
					<div id="facebook-quote"><i class="fab fa-facebook-square fa-2x"></i></div>
					<div id="email-quote"><i class="fas fa-envelope-square fa-2x"></i></div>
					<div id="new-quote">
						<button onClick={this.getNextQuote}>new quote</button>
					</div>
				</div>      
			</div>
		)
	}
}

ReactDOM.render(<MyComp />, document.getElementById('app'));
