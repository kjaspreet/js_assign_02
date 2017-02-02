//Made By: Jaspreet Kaur
//function to add value 2 into array elements
function arrAdd (array)
{
    let item
    for(let i=0; i < array.length; i++)
    {
        item = array[i] + 2
        array.splice(i,1,item)
    }
    return array
}


//Program to add 2 into each array element
let arr = [10,20,30,40]
console.log(`Old Array=${arr}`)
let new_Arr = arrAdd(arr)
console.log(`New Array=${new_Arr}`)