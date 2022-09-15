/* Extremely unorganized, lots of repetition, will refactor when i feel like it */

let newLine = document.getElementById('flow');
let userInput = document.querySelector('input').value;
let asciiArt = document.querySelector('pre').textContent;
let helpCommand = document.getElementById('helpCommand');
let email = document.createElement('a');
let code = 'Type <span style="color: hsl(342deg 100% 65%);">"help"</span> for a list of commands.';
let count = 0;
const instagram = 'https://instagram.com/cjpallari';
const twitter = 'https://twitter.com/CJPallari';
const linkedin = 'https://linkedin.com/in/cj-pallari-9423541b7/';
const github = 'https://github.com/cjpallari';

let help = [
    `about\n`,
    "projects\n",
    "history\n",
    /* "banner\n", */
    "help\n",
    "email\n",
    "socials\n",
    "clear"
]

let about = [
    "My name is CJ Pallari, and I am currently studying computer science at Sacramento State University.\n",
    "I'm 23 years old and spend most of my time in the gym, playing/watching sports, and working on cool stuff\n",
    "like this web terminal. If you want to reach out to me you can find my contact information by using the contact\n",
    "command."
]

let commands = [];


document.querySelector('.textInput').addEventListener('keypress', main);
function main(e)
{
    let inp = document.querySelector('.textInput').value;
    let inp1 = document.querySelector('input');
    let socials = document.querySelector('.textInput').value.slice(5);
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
                        li.innerText = `${about.join('')}`;
                        newLine.appendChild(li);
                        break;
                        case 'socials':
                            document.querySelector('.textInput').innerHTML = '<br>';
                            cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                            cmd.style.color = 'hsl(157deg 35% 41%)';
                            newLine.appendChild(cmd);
                            li.innerText = `to access any of these links, type 'open ' followed by the name of the site you want to reach.\n my links:\nTwitter\n Instagram\n LinkedIn\n GitHub`;
                            newLine.appendChild(li);
                            break;
                            case `open ${socials}`:
                                //inp.style.color = 'hsl(342deg 100% 65%)';
                                if (socials == 'instagram'){
                                    cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                                    cmd.style.color = 'hsl(157deg 35% 41%)';
                                    newLine.appendChild(cmd);
                                    li.innerText = `navigating to CJ's ${socials}...`;
                                    newLine.appendChild(li);
                                    setTimeout('window.open(instagram)', 1000);
                                }
                                else if (socials == 'twitter'){
                                    cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                                    cmd.style.color = 'hsl(157deg 35% 41%)';
                                    newLine.appendChild(cmd);
                                    li.innerText = `navigating to CJ's ${socials}...`;
                                    newLine.appendChild(li);
                                    setTimeout('window.open(twitter)', 1000);
                                }
                                else if (socials == 'linkedin'){
                                    cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                                    cmd.style.color = 'hsl(157deg 35% 41%)';
                                    newLine.appendChild(cmd);
                                    li.innerText = `navigating to CJ's ${socials}...`;
                                    newLine.appendChild(li);
                                    setTimeout('window.open(linkedin)', 1000);
                                }
                                else if (socials == 'github'){
                                    cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                                    cmd.style.color = 'hsl(157deg 35% 41%)';
                                    newLine.appendChild(cmd);
                                    li.innerText = `navigating to CJ's ${socials}...`;
                                    newLine.appendChild(li);
                                    setTimeout('window.open(github)', 1000);
                                }
                                else{
                                    cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                                    cmd.style.color = 'hsl(157deg 35% 41%';
                                    newLine.appendChild(cmd);
                                    li.innerText = `${socials} was not recognized... either there was a typo or I do not currently have a ${socials} account.`;
                                    newLine.appendChild(li);
                                }
                                break;
                                case 'projects':
                                    document.querySelector('.textInput').innerHTML = '<br';
                                    cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                                    cmd.style.color = 'hsl(157deg 35% 41%)';
                                    newLine.appendChild(cmd);
                                    li.innerText = "in progress... most of my projects are private but a couple are located on GitHub.";
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
                                                case 'email':
                                                    document.querySelector('.textInput').innerHTML = '<br>';
                                                    cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                                                    cmd.style.color = 'hsl(157deg 50% 41%';
                                                    newLine.appendChild(cmd);
                                                    li.innerText = 'opening mailto:cjpallari@gmail.com...';
                                                    newLine.appendChild(li);
                                                    email.href='mailto:cjpallari@gmail.com';
                                                    email.click();
                                                    break;
                                                    default:
                                                        document.querySelector('.textInput').innerHTML = '<br>';
                                                        cmd.innerText = `visitor@cpcodes:~$ ${inp}`;
                                                        cmd.style.color = 'hsl(157deg 50% 41%';
                                                        newLine.appendChild(cmd);
                                                        li.innerHTML = `${inp} command not found. ${code}`;
                                                        newLine.appendChild(li);
                                                        break;
                                }
        }
            
};
