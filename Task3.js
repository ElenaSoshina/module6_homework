// Задание 3

// Написать функцию, которая принимает число как аргумент и возвращает функцию
// которая также принимает число как аргумент и возвращает сумму этих двух чисел

// Выведите результат в консоль.

function argument (a) {
    return function(b) {
        console.log(a + b); // b - принимает число как аргумент и возвращает сумму двух чисел
    };
}

const result = argument(9);
result (3);