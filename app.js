let newLine = document.getElementById('flow');
let userInput = document.querySelector('input').value;
let asciiArt = document.querySelector('pre').textContent;
let count = 0;

let help = [
    "about\n",
    "socials\n",
    "projects\n",
    "contact\n",
    "history\n",
    "banner\n",
    "clear"
]

let about = [
    "My name is CJ Pallari, and I am currently studying computer science at Sacramento State University.\n"
]

let link = document.querySelector("social");
link.replace(/^open/,'').replace(/open+$/,'');
console.log(link);


let commands = [];

document.querySelector('.textInput').addEventListener('keypress', main);
function main(e)
{
    let inp = document.querySelector('.textInput').value;
    let inp1 = document.querySelector('input');
    if (e.key === 'Enter') { //If enter is pressed
        let li = document.createElement("li");  //Allows me to create new list items
        let cmd = document.createElement("li");  //Second list item var to print command that was entered
        inp1.value = '';  //Resets text box to empty
            count++;
            commands.push(inp);  //Holds all commands entered for history case
            switch (inp.toLowerCase())  //Accepted commands will be held inside
            {
                case 'help':
                    document.querySelector('.textInput').innerHTML = '<br>';  //Adds new line after pressing enter
                    cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                    cmd.style.color = 'hsl(157deg 35% 41%)';
                    newLine.appendChild(cmd);
                    li.innerText = inp;
                    newLine.appendChild(li);
                    li.innerText = `${help.join('')}`;  //Displays help array
                    newLine.appendChild(li);
                    break;
                    case 'about':
                        document.querySelector('.textInput').innerHTML = '<br>';
                        cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                        cmd.style.color = 'hsl(157deg 35% 41%)';
                        newLine.appendChild(cmd);
                        li.innerText = "Some random stuff about me";
                        newLine.appendChild(li);
                        break;
                        case 'socials':
                            document.querySelector('.textInput').innerHTML = '<br>';
                            cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                            cmd.style.color = 'hsl(157deg 35% 41%)';
                            newLine.appendChild(cmd);
                            li.innerText = `My links:\nTwitter\n Instagram\n LinkedIn`;
                            newLine.appendChild(li);
                            break;
                            case `open ${link}`:
                                if (link == 'instagram'){

                                }
                            case 'projects':
                                document.querySelector('.textInput').innerHTML = '<br';
                                cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                                cmd.style.color = 'hsl(157deg 35% 41%)';
                                newLine.appendChild(cmd);
                                li.innerText = "You're looking at it";
                                newLine.appendChild(li);
                                break;
                                case 'clear':
                                    window.location.reload();
                                    break;
                                    case 'history':
                                        document.querySelector('.textInput').innerHTML = '<br>';
                                        cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                                        cmd.style.color = 'hsl(157deg 35% 41%)';
                                        newLine.appendChild(cmd);
                                        li.innerText = `${commands}`;
                                        newLine.appendChild(li);
                                        break;
                                        case 'banner':
                                            document.querySelector('.textInput').innerHTML= '<br>';
                                            cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                                            cmd.style.color = 'hsl(157deg 50% 41%)';
                                            newLine.appendChild(cmd);
                                            li.innerText = `${asciiArt}`;
                                            newLine.appendChild(li);
                                            break;
                                            default:
                                                document.querySelector('.textInput').innerHTML = '<br>';
                                                li.innerText = `${inp} command not found. For a list of commands, type 'help'.`;
                                                newLine.appendChild(li);
                                                break;
                                }
        }
            
};
