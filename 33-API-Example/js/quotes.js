const loadQuote = () => {
    fetch("https://api.kanye.rest/")
    .then(res => res.json())
    .then(data => displayQuote(data))
}
const displayQuote = quotes =>{
    const blockQuote = document.getElementById("quote");
    blockQuote.innerText = quotes.quote;
}


const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));