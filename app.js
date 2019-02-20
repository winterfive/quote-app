let quotes;
let index = 0;

$.ajax({
      url: "https://codepen.io/CodeMoo/pen/KJEmeO.js",
      type:"get",
      dataType:'json',  
      success: function(data){				
        quotes = data;
      },
      error: function() {
        console.log("err");
      }
    });

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
    this.setState({
			author: quotes[index].author,
			quote: quotes[index].quote			
		})
		if(index == quotes.length - 1) {
			index = 0;
		} else {
			index += 1;
		}		
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
