//Made By: Jaspreet Kaur
//function to print array
function arrDisplay (array)
{
    for(let i=0; i < array.length; i++)
    {
        console.log(`${i}:${array[i]}`)
    }
}


//Program to pass array to the function
let arr = [1,'dog','one']
arrDisplay(arr)