// Задание 1

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.


function amountNumbers() {
    const arr = [2, 4, 5, , 9, 7]; // Исходный массив
    let checkUp;
    let number;
    let evenNumbers = 0;
    let oddNumbers = 0;
    let nanNumbers = 0;
    for (let i = 0; i < arr.length; i++) {  // Переборираем элементы в массиве
        number = arr[i];
        // Проверка на число
        if (typeof number === 'number') {
            checkUp = true
        }
        if (checkUp ) {
            if (number % 2 === 0) {  // Проверяем число на четность
                evenNumbers++
            } else {
                oddNumbers++
            }
        } else if (typeof number === 'undefined'){  //Проверяем значение на числовой тип
            nanNumbers++
        }
        exam = false;
    }
    console.log('Четных чисел = ' + evenNumbers);
    console.log('Нечетных чисел = ' + oddNumbers);
    console.log('Не чисел = ' + nanNumbers);
}

amountNumbers();

