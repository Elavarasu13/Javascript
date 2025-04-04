//ForEach

arr = ["Ela" , "Dhruv" , "Kaviya" , "Kavs"]

arr.forEach(print);
//callBack()
function print(name)
{
    console.log(name)
}

//arrow function()
//convert val into uppercase

arr.forEach(name => {
    console.log(name.toUpperCase());
});

//convert original to uppercase
arr.forEach((val,index,arr) => {
    arr[index] = val.toUpperCase();
})

//print array values in inner html using foreach
arr.forEach(name => {   
    const tag =  document.createElement('p');
     tag.textContent = name;
    document.getElementById('para').appendChild(tag)
    
});

array = ['MCA',"Ece","CSE","IT","Mech"]

let courses = document.getElementById('branch');

array.forEach(val => {
    const opt = document.createElement('option');
    opt.textContent = val;
    console.log(opt)
    courses.appendChild(opt)
})

