const quotes = [
    {
        quote : 'A man that hath no virtue in himself, ever envieth virtue in others',
        author : 'Francis Bacon'
    },
    {
        quote :'As soon go kindle fire with snow, as seek to quench the fire of love with words', 
        author :'William Shakespeare' 
    },
    {
        quote :'Chop your own wood and it will warm you twice', 
        author :'Henry Ford' 
    },
    {
        quote :' Experience is a good school, but the fees are high.', 
        author :'Heinrich Heine' 
    },
    {
        quote :"Experience is a great advantage. The problem is that when you get the experience, you're too damned old to do anything about it.", 
        author :'Jimmy Connors' 
    },
    {
        quote :'For every minute you remain angry, you give up sixty seconds of peace of mind', 
        author :'Ralph Waldo Emerson' 
    },
    {
        quote :'Give the best you have, and it will never be enough. Give your best anyway.', 
        author :'Mother Teresa' 
    },
    {
        quote :'If a man takes no thought about what is distant, he will find sorrow near at hand.', 
        author :'Confucius' 
    },
    {
        quote :"In the book of life, the answers aren't in the back.", 
        author :'Charlie Brown' 
    },
    {
        quote :'Learn as if you would live forever, live as if you would die tomorrow.', 
        author :'Mahatma Gandhi' 
    },
]
const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');

const todaysQuote=quotes[Math.floor((Math.random()*quotes.length))];

quote.innerText = todaysQuote.quote;
author.innerText=todaysQuote.author;
