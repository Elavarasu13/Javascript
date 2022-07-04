var num1 = 2
var num2 = 3
while(num1 <= 100 && num2 <=100)
{
    if(num1 % 2 == 0 && num2 % 3 == 0)
    {
        console.log(num1)
        console.log(num2)
    }
    num1++
    num2++
}