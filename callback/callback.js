//Function passed as a parameter is a callback function

function greetConsole(name)
{
    console.log("hello" +  name)
}

function greetHeading(name)
{
    const greets = document.querySelector('h1');
    greets.innerHTML =  'hello' + name;
}

//called function will be stored in callback var 
//greet(greetconsole) = call back is greetconsole
function greet(callback)
{
    let name = 'Elavarasu'
    callback(name)
}
greet(greetConsole);
// greet(greetHeading);

greet(name =>{
    const greets = document.querySelector('h1');
    greets.innerHTML =  'hello ' + name;
})

