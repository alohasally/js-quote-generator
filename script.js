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
    authorText.textContent = quote.author;
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

//On Load
getQuotes();