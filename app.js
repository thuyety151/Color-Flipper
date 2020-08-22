const colors = ["aliceblue", "antiquewhite", "aqua", "aquamarine","azure","beige",
"bisque","black","blanchedalmond"];
const btn = document.getElementById('btn');
const color=document.querySelector(".color");

btn.addEventListener('click',function(){
    //get random number between 0-3 colors[3]
    const randomNumber=getNumberRandom();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent=colors[randomNumber];
})

function getNumberRandom(){
    return Math.floor(Math.random()*colors.length);
}