// practice Qs3
// for (let i=0; i<=100; i++){
//     if(i%2===0)
//         console.log(i, "is even number");
// }   
// practice Qs4
let gameNum = 25;
let userNum = prompt("guess the game number:");
while(userNum != gameNum){
    userNum = prompt("wrong game number ,enter again:");
}
console.log("congratulation,yoe entered the right number")
