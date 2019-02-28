// Quote Machine 
// Feb 2019
// Lee Gainer

let quotes;
let index, nextIndex = 0;
let indexArr = [];
const url = "https://api.myjson.com/bins/xpqq2";
let imageArr = [];
let nextAuthor, nextQuote = "";
let nextImage;

class MyComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "Mindy Kaling",
			quote:
				"Sometimes you just have to put on lip gloss and pretend to be psyched.",
			image:"https://www.dropbox.com/s/1rm7qesd9rb2izx/kaling.jpg?dl=1"
		};

		this.getNextQuote = this.getNextQuote.bind(this);
		this.tweetQuote = this.tweetQuote.bind(this);
	}
	
	componentDidMount() {
		// get json
		fetch(url)
  	.then(function(response) {
      if (response.status !== 200) {
        console.log('Json fetch Error: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        quotes = data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error : ' + err);
  });
	}	

	// Returns random int between 0 and current indexArr length
	// void -> int
	getRandomIndex() {
		return Math.floor(Math.random() * (indexArr.length - 1));
	}

	getQuote() {
		// if empty, fill array w/ index values
		if (indexArr.length == 0) {
			this.fillArray();
		}

		index = this.getRandomIndex();

		

		indexArr.splice(index, 1);
	}
	
	getNextValues () {
	}
	
	setState(index) {
		this.setState({
			quote: quotes[indexArr[index]].quote,
			author: quotes[indexArr[index]].author,
			image: quotes[indexArr[index]].image
		});
	}
	
	// Fills index number array with values from 0 to quotes length
	// void -> void	
	fillArray() {
		let x = 0;
		quotes.forEach(function(q) {
			indexArr.push(x);
			x++;
		});
	}

	tweetQuote() {
		var url = "twitter.com";
		let text = `${this.state.quote} - ${this.state.author}`;
		let tag = "#quote";
		window.open(
			"http://twitter.com/share?url=" +
				encodeURIComponent(url) +
				"&text=" +
				encodeURIComponent(text) +
				"&hashtag=" +
				encodeURIComponent(tag),
			"quote",
			"top=100,left=100,width= 300px,height=500px,personalbar=0,toolbar=0,scrollbars=0,resizable=yes"
		);
		if (window.focus) {
			newwindow.focus();
		}
		return false;
	}

	render() {
		return (
			<div id="wrapper">
				<div id="quote-box">
					<div id="text-div">
						<div id="text">{this.state.quote}</div>
						<div id="author">- {this.state.author}</div>
					</div>
					<div id="div-links">
						<div>
							<a id="tweet-quote" className="social-link" onClick={this.tweetQuote}>
								<i className="fab fa-twitter fa-2x" />
							</a>
						</div>
						<div>
							<button id="new-quote" onClick={this.getQuote}>
								new quote
							</button>
						</div>
					</div>
				</div>
				<div id="author-portrait-div">
						<img id="author-portrait" src={this.state.image} alt={"portrait of " + this.state.author} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<MyComp />, document.getElementById("app"));
