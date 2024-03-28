function generateQuote() {
    const quotes = [
        {
            quote: "'Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.'",
            author: "Michael Scott, Season 5, 'The Duel'"
        },
        {
            quote: "'I talk a lot, so I’ve learned to tune myself out.'",
            author: "Kelly Kapoor, Season 7, 'Counseling'"
        },
        {
            quote: "'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.'",
            author: "Michael Scott, Season 2, 'The Fight'"
        },
        {
            quote: "'I’m not superstitious, but I am a little stitious.'",
            author: "Michael Scott, Season 4, 'Fun Run'"
        },
        {
            quote: "'If I don’t have some cake soon, I might die.'",
            author: "Stanley Hudson, Season 4, 'Survivor Man'"
        }
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotation").innerHTML = "&quot;" + quotes[arrayIndex].quote + "&quot;";
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}

window.onload = function () {
    generateQuote();
}

document.getElementById("generate").addEventListener('click', generateQuote());