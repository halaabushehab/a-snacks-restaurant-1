// One of the questions in the previous task was to ask the user about his/her gender and if they didn't write the correct answer nothing would happen, today you have to keep asking the user to enter their gender until you get the correct answer (while loop).

let your_gender = prompt("Please enter your gender :");

while (your_gender !== "female" && your_gender !== "male") {
    your_gender = prompt("Please correct your gender:");
}

let your_name = prompt(" enter your name:");

if (your_gender === "female") {
    alert(`Welcome Ms. ${your_name}`);
} else if (your_gender === "male") {
    alert(`Welcome Mr. ${your_name}`);
}



 //Q2: Use a loop to display the numbers 0 through 5, each in a separate alert window.
 

 for( let i=0 ; i<=5 ; i++){
 alert(i);
 }


//Q4: Prompt the user for a number in the range 0…100.  If the number is out of range, display an error message and prompt again until a valid number is entered.  Assume the user enters a number each time
  let   range= prompt("  Enter  number (1-100):");

 while(range <0 || range>100){
  alert("Error, The number must be between 0 and 100")
  range= prompt("  Enter  number (1-100):");

  }

alert(range)

//Q5: Prompt for an integer, then display the sum of the integers from 0 through the number entered.  For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

  let   N= prompt("  Enter any number:");
let sum=0;
for(let i=0 ; i<=N ; i++){
    sum=sum+i
}
 alert(sum)