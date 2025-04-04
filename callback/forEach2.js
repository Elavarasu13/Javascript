//creating list using js
arr = ['ECE' , 'CSe' , 'IT' , 'EEE','MECH','CIVil']
let list = document.getElementById('list');

arr.forEach(val => {
    const li = document.createElement('li');
    li.textContent = val;
    console.log(li)
    list.appendChild(li)   
});

//find sum of positive integer using foreach

numbers = [6,-5,7,-2,4,6,-9];

let values = 0;

positivenumber = numbers.filter(num => num > 0)

positivenumber.forEach(val => {
    values += val;
   console.log(val)
})
console.log("Sum of Positive integer is " + values)