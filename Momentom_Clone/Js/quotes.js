const quotes = [
    {
        quote: 'The way to get started is to quit talking and begin doing',
        author: 'Walt Disney',
    },
    {
        quote: 'Be yourself, everyone else is already taken',
        author: 'Oscar Wilde',
    },
    {
        quote: "Two things are infinite: the universe and human stupidity, and I'm not sure about the universe",
        author:"Albert Einstein",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on",
        author: "Robert Frost",
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever",
        author: "Mahatma Gandhi",
    },
    {
        quote: "It is our choices, Harry, that show what we truly are, far more than our abilities",
        author: "J.K. Rowling",
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not",
        author: "Andre Gide",
    },
    {
        quote: "Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth",
        author: "William W. Purkey",
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
        author: "Dr. Seuss",
    },
    {
        quote: "You only live once, but if you do it right, once is enough",
        author: "Mae West",
    },
];

const quoteSpan = document.querySelector('.quoteSpan');
const authorSpan = document.querySelector('.authorSpan');

const todaysQoutes = quotes[Math.floor(Math.random() * quotes.length)];

quoteSpan.innerText = todaysQoutes.quote; 
authorSpan.innerText = todaysQoutes.author;
