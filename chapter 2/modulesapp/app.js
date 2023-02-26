// // получаем модуль Express
// const express = require("express");
// // создаем приложение
// const app = express();
 
// // устанавливаем обработчик для маршрута "/"
// app.get("/", function(request, response){
 
//     response.end("Hello from Express!");
// });
// // начинаем прослушивание подключений на 3000 порту
// app.listen(3000);


// nodedemon!
// const http = require("http");
 
// let message = "Hello World!";
// http.createServer(function(request,response){
     
//     console.log(message);
//     response.end(message);
     
// }).listen(3000, "127.0.0.1",()=>{
//     console.log("Сервер начал прослушивание запросов");
// });

// function display(data, callback){
 
//     // с помощью случайного числа определяем ошибку
//     var randInt = Math.random() * (10 - 1) + 1;
//     var err = randInt>5? new Error("Ошибка выполнения. randInt больше 5"): null;
     
//     setTimeout(function(){
//         callback(err, data);
//     }, 0);
// }
 
// console.log("Начало работы программы");
 
// display("Обработка данных...", function (err, data){
 
//     if(err) throw err;
//     console.log(data);
// });
 
// console.log("Завершение работы программы");

// Начало работы программы
// without timeout
// Завершение работы программы
// timeout 100
// timeout 500
// function displaySync(callback){
//     callback();
// }
 
// console.log("Начало работы программы");
 
// setTimeout(function(){
         
//         console.log("timeout 500");
// }, 500);
 
// setTimeout(function(){
         
//         console.log("timeout 100");
// }, 100);
 
// displaySync(function(){console.log("without timeout")});
// console.log("Завершение работы программы");


// const fs = require("fs");
 
// // асинхронное чтение
// fs.readFile("hello.txt", "utf8", 
//             function(error,data){
//                 console.log("Асинхронное чтение файла");
//                 if(error) throw error; // если возникла ошибка
//                 console.log(data);  // выводим считанные данные
// });
 
// // синхронное чтение
// console.log("Синхронное чтение файла")
// let fileContent = fs.readFileSync("hello.txt", "utf8");
// console.log(fileContent);

// полностью переписывают файл
// const fs = require("fs");
 
// fs.writeFile("hello.txt", "Hello мир!", function(error){
 
//     if(error) throw error; // если возникла ошибка
//     console.log("Асинхронная запись файла завершена. Содержимое файла:");
//     let data = fs.readFileSync("hello.txt", "utf8");
//     console.log(data);  // выводим считанные данные
// });



// дозапись


// const fs = require("fs");
 
// fs.appendFileSync("hello.txt", "Привет ми ми ми!");
 
// fs.appendFile("hello.txt", "Привет МИД!", function(error){
//     if(error) throw error; // если возникла ошибка
                 
//     console.log("Запись файла завершена. Содержимое файла:");
//     let data = fs.readFileSync("hello.txt", "utf8");
//     console.log(data);  // выводим считанные данные
// });


// удаление
// fs.unlink("hello.txt", (err) => {
//     if (err) console.log(err); // если возникла ошибка    
//     else console.log("hello.txt was deleted");
//   });



// события 



// const Emitter = require("events");
// let emitter = new Emitter();
// let eventName = "greet";
// emitter.on(eventName, function(){
//     console.log("Hello all!");
// });
 
// emitter.on(eventName, function(){
//     console.log("Привет!");
// });
 
// emitter.emit(eventName);

// const EventEmitter = require("events");
  
// let eventName = "greet";
 
// class User extends EventEmitter {
//     sayHi(data) {
//         this.emit(eventName, data);
//     }
// }
 
// let user = new User();
// // добавляем к объекту user обработку события "greet"
// user.on(eventName, function(data){
//     console.log(data);
// });
  
// user.sayHi("Мне нужна твоя одежда...");




// потоки чтения и записи 
// const fs = require("fs");
 
// let writeableStream = fs.createWriteStream("hello.txt");
// writeableStream.write("Привет мир!");
// writeableStream.write("Продолжение записи \n");
// writeableStream.end("Завершение записи");
// let readableStream = fs.createReadStream("hello.txt", "utf8");
 
// readableStream.on("data", function(chunk){ 
//     console.log(chunk);
// });

// // создание файла 
// const fs = require("fs");
 
// let readableStream = fs.createReadStream("hello.txt", "utf8");
 
// let writeableStream = fs.createWriteStream("some2.txt");
 
// readableStream.pipe(writeableStream);



// //  архив 

// const fs = require("fs");
// const zlib = require("zlib");
  
// let readableStream = fs.createReadStream("hello.txt", "utf8");
  
// let writeableStream = fs.createWriteStream("hello.txt.gz");
  
// let gzip = zlib.createGzip();
  
// readableStream.pipe(gzip).pipe(writeableStream);