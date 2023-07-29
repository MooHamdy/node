// const mohamed = 9
// if (mohamed < 10) {
//     console.log("hello");
// }
// else {
//     console.log("this is large number");
// }
////---------------------------------------------------
// setInterval(() => {
//     console.log("telda");
// }, 10000);
////--------------------------------------------------
// console.log(__dirname);
// console.log(__filename);
// ----------------------------------------------------
// const  sayHi= (name)=>{
//     console.log(`my name is ${name}`);
// }
// sayHi('mohamed')
// -----------------------------------------------------
// const names = require('./namez')
// console.log(names);
// const modulo = require('./modled')
// console.log(modulo.molo.phone);
// require('./math')
// ------------------------------------------state module
// const os = require('os')
// const user = os.type()
// console.log(user);
// ----------------------------------------------- sync/async
// const { readFileSync, writeFileSync } = require('fs')
// const { readFile, writeFile } = require('fs')
// const first = readFileSync('./first.txt', 'utf-8')
// console.log(first);
// writeFileSync('./contant.txt', `hang is text : ${first}`, { flag: 'a' })
// readFileSync('./first.txt', 'Utf8', (err, result) => {
// if (err) {
// console.log(err);
// return
// }
// console.log(result)
// })
// console.log('mahooo');
// ---------------------------------------- http
// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.write('welcome king of python Hamdy')
//         return res.end()
//     }


//     if (req.url == '/home') {
//         res.write('welcome king of python Hamdy hommeee')
//         return res.end()
//     }

//     res.end(`
//     <h1>PPPPPPPP</h1>
// <p>Oops!!!</p>
// <a href = "/"> back home</a>
//     `)
// })
// server.listen(5000)
//---------------------------------------------
