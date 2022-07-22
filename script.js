let apiQuotes = [];

//Show New Quote
function newQuotes(){
    // Pick a random  quote from apiquotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);

}

// Get Quotes From API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/qguotes';
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

//newQuotes();
