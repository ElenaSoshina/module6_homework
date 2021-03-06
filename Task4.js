// Задание 4

// Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым.
// Используйте SetInterval

//Например:
// Пользователь ввел числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15
// (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

function printValues (val1, val2) {  // Создфем функцию, которая принимает два числа
    let current = val1; // Устанавливаем начало отсчета для вывода

    let timerId =  setInterval(function() { // Прописываем интервал для вывода значений в консоль 1 с
        console.log(current);

        if (current == val2) { // Прописываем условие, когда таймер должен остановиться
            clearInterval(timerId); // setInterval возвращает timerId
        }
        current++;
    }, 1000);
}

printValues(5, 15);