let quotes;
let index = 0;
let indexArr = [];
let tweet = "";
let quotesSize = 0;

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

quotesSize = quotes.length;

class MyComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "name",
      quote: "quote",
    }
		this.getNextQuote = this.getNextQuote.bind(this);
	}
	
	componentDidMount = () => {
		console.log("comp did mount");
		getNextQuote();
 }
	
	getRandomIndex = () => {
		return Math.floor(Math.random() * (quotesSize - 1));
	}
	
	getNextQuote = () => {
		
		if(indexArr.length == quotesSize) {
			indexArr = [];
		}
		
		index = getRandomIndex();
		console.log("index is: " + index);
		
		if(indexArr.includes(index)) {
			console.log("index/quote already used");
			getNextQuote();
		} else {
			console.log("new index found");
			quotes.concat(index);
			this.setState({
				author: quotes[index].author,
				quote: quotes[index].quote			
			})
		}    	
  }
    
	render() {
		return (
			<div id="quote-box">
				<div id="text-div">
				<div id="text">{this.state.quote}</div>
				<div id="author">- {this.state.author}</div>
				</div>
				<div id="div-buttons">
					<div id="tweet-quote"><a href="twitter.com/intent/tweet?text=this.state.quote&20-&20{this.state.author}"><i class="fab fa-twitter-square fa-2x"></i></a></div>
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
