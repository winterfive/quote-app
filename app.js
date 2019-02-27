// Quote Machine 
// Feb 2019
// Lee Gainer

let quotes;
let index = 0;
let indexArr = [];
const url = "https://api.myjson.com/bins/mt93e";
let imageArr = [];

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
		this.preloadImages = this.preloadImages.bind(this);
	}
	
	componentDidMount() {
		console.log("did mount");
		fetch(url)
		.then(function(response) {
			if(!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		})
		.then(function(responseAsJson) {
			quotes = responseAsJson;
			console.log("quotes test: " + quotes[45].quote);
		})
		.catch(error => console.log("fetch error: " + error));
	}

	getRandomIndex() {
		return Math.floor(Math.random() * (indexArr.length - 1));
	}	
	
	preloadImages() {	
		console.log("preload got called");
		let x;
		quotes.forEach(function(x) {
			// fetch image
			fetch(quotes.image)
			.then(function(response) {
				if(!response.ok) {
					throw Error(response.statusText);
				}
			return response.blob()
			})
			.then(function(image){
				imageArr.push(image)
			})
			.catch(error => console.log("image fetch error: " + error));
		})
	}		

	getNextQuote() {
		// if empty, fill array w/ index values
		if (indexArr.length == 0) {
			let x = 0;
			quotes.forEach(function(q) {
				indexArr.push(x);
				x++;
			});
		}

		index = this.getRandomIndex();

		this.setState({
			quote: quotes[indexArr[index]].quote,
			author: quotes[indexArr[index]].author,
			image: quotes[indexArr[index]].image
		});

		indexArr.splice(index, 1);
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
							<button id="new-quote" onClick={this.getNextQuote}>
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
