const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuotesBtn = document.getElementById('new-quote')


let apiQuotes = [];

//Show New Quote
function newQuotes(){
    // Pick a random  quote from apiquotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //Check if Ahthor field is blank and replace it with
    if (quote.text) {
        authorText.textContent = 'Unknown'
    }else {
        authorText.textContent = quote.author;
    }
    // Check Quote length to determin styling
    if(quote.text.length > 120 ){
        quoteText.classList.add('long-quote');
    }else { 
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes();
    } catch (error) {
        alert(error)
        // Catch Error Here
    }
}
//Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuotesBtn.addEventListener('click', newQuotes);
twitterBtn.addEventListener('click',tweetQuote);

//On Load
getQuotes();