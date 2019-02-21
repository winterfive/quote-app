let quotes;
let index = 0;
let indexArr = [];

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

/*
console.log('success', response);
                quote = response.quote;
                $('#quote').text('"'+quote+'"');
                $('#author').text('- ' + response.author);
                }
								*/

class MyComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "Bill Murray",
      quote: "The best way to teach your kids about taxes is by eating 30 percent of their ice cream.",
    }
		
		this.getNextQuote = this.getNextQuote.bind(this);
	}
	
	getRandomIndex() {
		return Math.floor(Math.random() * (quotes.length - 1));
	}
	
	getNextQuote() {
		if(indexArr.length == quotes.length) {
			indexArr = [];
		}
		
		index = this.getRandomIndex();		
		
		//check indexArr for repeated index
		if(indexArr.includes(index)) {
			this.getNextQuote();
		} else {
			this.setState({
				author: quotes[index].author,
				quote: quotes[index].quote
			})
			indexArr.push(index);
			console.log("index: " + index);
			console.log("indexArr: " + indexArr);
		}
    
		this.setState({
			author: quotes[index].author,
			quote: quotes[index].quote			
		})
  }
    
	render() {
		return (
			<div id="quote-box">
				<div id="text-div">
				<div id="text">{this.state.quote}</div>
				<div id="author">- {this.state.author}</div>
				</div>
				<div id="div-buttons">
					<div><a id="tweet-quote" href="https://twitter.com/intent/tweet?text={this.state.quote}{this.state.author}"><i class="fab fa-twitter-square fa-2x"></i></a></div>
					<div>
						<a id="facebook-quote" href="https://www.facebook.com/sharer/sharer.php?u=example.org"><i class="fab fa-facebook-square fa-2x"></i></a>
					</div>
					<div>
						<a id="email-quote" href="mailto:?subject=Enjoy this quote!&body={this.state.quote}%20-%20{this.state.author}"><i class="fas fa-envelope-square fa-2x"></i></a>
					</div>
					<div id="new-quote">
						<button onClick={this.getNextQuote}>new quote</button>
					</div>
				</div>      
			</div>
		)
	}
}

ReactDOM.render(<MyComp />, document.getElementById('app'));
