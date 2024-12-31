// //EX1: If Else Problem domain: You will build a web page for a Snack restaurant, where the user can enter their order, display it, and check the status for each one. 
 
// //Ask the user to enter his/her name as input 
// let your_name = (prompt("Enter your name:"));

// //*Ask the user to enter his/her gender. The answer should be either (male or female) 

// let your_gender = (prompt(" Please Enter your gender:"));

// if(your_gender === "female" ){
//     alert(` welcome  Ms.${your_name}`)
// }
// else if(your_gender === "male" ) {
//     alert(` welcome  Mr.${your_name}`)
// }
//  else{
//     alert(` welcome  ${your_name}`)


//  }


// //*Ask the user if he/she wants to order a shawarma, zinger, or burger. 

// let your_order = (prompt("hi" +your_name+" , Would you like to order a shawarma, zinger, or burger?"));
//  if( your_order === "shawarma" || your_order === "zinger" ||  your_order === "burger"  ){
//  }
//  else{
//     alert(` Your order is not  available`)
//      your_order = (prompt("hi"  +your_name+" , Would you like to order a shawarma, zinger, or burger?"));

//  }
//  alert(` Your order for  ${your_order} is being prepared`)

// console.log(` ${userName} y ordered ${orderName}.`);









//Q2: If you have a “Number” variable,  Your task is to print:
let YourNumber = parseInt(prompt("Enter your number:"));

switch (YourNumber) {
    case 1:
        num = "ONE";
        break;
    case 2:
        num = "TWO";
        break;
    case 3:
        num = "THREE";
        break;
    case 4:
        num = "FOUR";
        break;
    case 5:
        num = "FIVE";
        break;
    case 6:
        num = "SIX";
        break;
    case 7:
        num = "SEVEN";
        break;
    case 8:
        num = "EIGHT";
        break;
    case 9:
        num = "NINE";
        break;
    default:
        num = "PLEASE TRY AGAIN";
}

alert("Number variable: " + num);

