//Створіть функцію reverseArray, яка приймає масив і повертає новий масив, 
//елементи якого розташовані у зворотному порядку.


const dataArr = prompt('Введіть масив даних')
const originalArray = dataArr.split(' ')

console.log(originalArray);

function reverseArray(arr){
    arr.reverse()
    console.log(arr)
}

reverseArray(originalArray);


//Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив, 
//що містить тільки унікальні значення з обох масивів (без дублікатів).


const firstArr = prompt('Введіть перший масив даних')
const secArr = prompt('Введіть другий масив даних')

const array1 = firstArr.split(' ');
const array2 = secArr.split(' ');

console.log(array1);
console.log(array2);

function uniqueValues(arr1, arr2) {
    const valuesArray = arr1.concat(arr2)
    
    const uniqueValuesArray = []

    for (let str of valuesArray) {
        if (!uniqueValuesArray.includes(str)) {
          uniqueValuesArray.push(str);
        }
      }
    
    console.log(uniqueValuesArray)
}

uniqueValues(array1, array2)


//Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів 
//з інформацією про студентів (ім'я, вік, середній бал) і повертає середній бал усіх студентів.


const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];

function calculateAverageGrade(arr){

        let sum = 0;    

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i].grade;
            
        }
        console.log(sum)
        console.log(arr.length)
        let average = sum / arr.length
        console.log(average)
    }




calculateAverageGrade(students);