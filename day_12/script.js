let name = prompt("What is your Name?");


function printName()
{
    let num = 5 + 7;
    console.log(num)
}


printName();
printName();
printName();
printName();




document.getElementById("clickMe").addEventListener('click', ()=>{

    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
})
console.log(document.getElementsByTagName("button"))
