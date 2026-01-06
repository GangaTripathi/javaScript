const quotes=[
    "Hard work is the key to success",
"Time and tide wait for none",
"Practice makes a man perfect",
"Where there is a will, there is a way",
"Slow and steady wins the race",
"Unity is strength",
"Actions speak louder than words",
"Knowledge is power",
"Health is wealth",
"Cleanliness is next to godliness",
"Truth always triumphs",
"Patience is a virtue",
"Prevention is better than cure",
"Experience is the best teacher",
"A stitch in time saves nine",
"Honesty builds trust",
"Self-discipline leads to success",
"Kindness costs nothing",
"Learning never stops",
"Think before you act",
"Respect earns respect",
"Failure is the stepping stone to success",
"Small efforts make big changes",
"Confidence is half the victory",
"Silence is sometimes the best answer",
"Simplicity is the ultimate sophistication",
"Good habits shape a good life",
"Courage conquers fear",
"Gratitude brings happiness",
"Consistency creates excellence"

]

const  button=document.querySelector('button');
const quote = document.querySelector('h1');
button.addEventListener('click',()=>{
    const index =Math.floor(Math.random()*30);
    quote.textContent=quotes[index];
    
})

