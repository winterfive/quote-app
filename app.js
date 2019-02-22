let quotes;
let index = 0;
let indexArr = [];

/*
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
		*/

/*
console.log('success', response);
                quote = response.quote;
                $('#quote').text('"'+quote+'"');
                $('#author').text('- ' + response.author);
                }
								*/

const url = "https://codepen.io/CodeMoo/pen/KJEmeO.js";

fetch(url)
  .then(response => response.json())
  .then(data => {
		quotes = data;
  })
	.catch(error => console.log("error: " + error));

class MyComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "Mindy Kaling",
      quote: "Sometimes you just have to put on lip gloss and pretend to be psyched."
    }
		
		this.getNextQuote = this.getNextQuote.bind(this);
		this.tweetQuote = this.tweetQuote.bind(this);
	}
	
	getRandomIndex() {
		return Math.floor(Math.random() * indexArr.length);
	}
	
	getNextQuote() {
		// if empty, fill array w/ index values
		if(indexArr.length == 0) {
			let x = 0;
			quotes.forEach(function(q) {
				indexArr.push(x);
				x++;
			})
		}
				
		index = this.getRandomIndex();
		
		//check indexArr for repeated index
		if(indexArr.includes(index)) {
			let y = indexArr.indexOf(index);
			indexArr.splice(y, 1);
			this.setState({
				quote:quotes[index].quote,
				author:quotes[index].author
			})
		} else {
			this.getNextQuote();
		}
		console.log("index len is: " + indexArr.length);
  }
	
	updateState(z) {
		this.setState({
			quote:quotes[z],
			author:author[z]
		});
	}
	
	tweetQuote() {
    var url = "twitter.com";
    let text = `${this.state.quote} - ${this.state.author}`;
		let tag = '#quote';
    window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text)+'&hashtag='+encodeURIComponent(tag), '', 'top=100,left=100,width= 300px,height=500px,personalbar=0,toolbar=0,scrollbars=0,resizable=yes');
		if (window.focus) {
			newwindow.focus()
		}
		return false;
	}
    
	render() {
		return (
			<div id="quote-box">
				<div id="text-div">
				<div id="text">{this.state.quote}</div>
				<div id="author">- {this.state.author}</div>
				</div>
				<div id="div-links">
					<div>
						<a id="tweet-quote" className="social-link" onClick={this.tweetQuote}>
							<i className="fab fa-twitter fa-3x"></i>
						</a>
					</div>
					<div>
						<button id="new-quote" onClick={this.getNextQuote}>new quote</button>
					</div>
				</div>      
			</div>
		)
	}
}

ReactDOM.render(<MyComp />, document.getElementById('app'));
