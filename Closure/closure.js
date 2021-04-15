// 1.	Новый фильм "Как натренировать своего дракона” только выпустили! В кассах кинотеатра много людей, стоящих в огромную очередь. У каждого из них есть банкнота в 100, 50 или 25 долларов. Билет на «Бэтмен против Супермена: На заре справедливости» стоит 25 долларов. Вася в настоящее время работает клерком. Он хочет продать билет каждому человеку в этой очереди. Может ли Вася продать каждому билет и отдать сдачу, если у него изначально нет денег и он продает билеты строго в том порядке, в котором люди следуют в очереди? Верните YES, если Вася может продать каждому билет и отдать сдачу. В противном случае верните NO. Может ли Вася продать каждому билет и отдать сдачу?
// Условия:
// * принимает массив из очереди людей
// * возвращает строку

function tickets(array){
    var change = 0
    var ticketPrice = 25
    if(Array.isArray(array)){
        for (var i = 0; i < array.length; i++){
            change += array[i]
            if(array[i + 1] - change >= ticketPrice){
                return 'false'
            }
            else return 'true'
        }
    }else return "wrong argument, should be array"
}
// console.log(tickets([25, 25, 50]))
// console.log(tickets([25, 100]))
// console.log(tickets([25, 25, 50, 100]))
// console.log(tickets([25, 50, 100]))





// 2.	Напишите функцию, которая получает два бесконечных числа в виде строк. Вы должны вернуть результат суммы этих двух чисел в виде строки. Математическая работа с этими двумя числами недоступна. Не используйте BigInt. 
// getSum(‘123’, ‘324’)  ->  ‘447’
// getSum(‘111111111111111111111111111111111111111111111111111’,        ’23333333333333333333333333333333333333333333333333’) 
// -> ‘3444444.......4444444’

// function bigNums('num1', 'num2'){

// }

// 3.	Создайте функцию, которая получает два аргумента: первый - это массив объектов, второй - строка (имя автора). Ваша функция должна возвращать количество сообщений с автором из аргумента функции и комментариев с тем же автором. Пример массива: 

function getQuantityPostsByAuthor (array, person) {
    var postsCount = 0
    var commentCount = 0
    for(var i = 0; i < array.length; i++){
        for(var key in array[i]){
            if (Array.isArray(array[i][key])){
                getQuantityPostsByAuthor(array[i][key], person)
            }
            if (array[i][key] === person){
                if (array[i].hasOwnProperty('comment')){
                    commentCount++
                }
                if (array[i].hasOwnProperty('post')){
                    postsCount++
                }
            }
        }
    }
    return person + ' has ' + postsCount + ' posts, and ' + commentCount + ' comments'
}

// 4.Напишите функцию кеш
// let complexFunction = function (arg1,arg2) {
// 	rerurn arg1+arg2; //just for example (any logic can be here)
// 	}
// 	let cachedFunc = cache(complexFunction);
// 	 cachedFunc(‘foo’, ‘bar’) // complexFunction должна выполнится
//  cachedFunc(‘foo’, ‘bar’) // complexFunction не должна выполняться снова,должен вернуться кеш
// cachedFunc(‘foo’, ‘baz’) // complexFunction должна выполнится
// //потому что метод не вызывался раньше с этими аргументами

module.exports = {tickets, getQuantityPostsByAuthor}