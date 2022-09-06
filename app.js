let inp = document.getElementById('textInput');
let test = document.querySelector('h1');
/* inp.focus();
inp.select(); */

let newLine = document.getElementById('flow');
let userInput = document.querySelector('input').value;

let help = [
    "about      Who is CJ?",
    "socials    Links to my socials",
    "projects   Projects I've worked on",
    "clear      Clear terminal"
]
let commands = [];

function input(inp)
{
    switch (inp.toLowerCase())
    {
        case 'help':
            document.write('\n');
            newLine.innerHTML = `<p> ${help} </p>`;
            break;
        case 'about':
            newLine.innerHTML = "Some random stuff about me";
            break;
        case 'socials':
            newLine.innerHTML = "Links to my social media accoutns";
            break;
        case 'projects':
            newLine.innerHTML = "You're looking at it"
            break;
        case 'clear':
            //need to figure out how to clear
            break;
    }
}

function enter(){
    if (keyCode = 13)
    {
        commands.push(inp.innerHTML);
        console.log(userInput);
    }

}


test.addEventListener('click', testing);
function testing(e){
    let newTest = document.querySelector('.textInput').value
    document.write("<br>");
    document.write(help);
    e.preventDefault();
}

