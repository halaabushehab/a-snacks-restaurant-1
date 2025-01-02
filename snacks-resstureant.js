// //EX1: If Else Problem domain: You will build a web page for a Snack restaurant, where the user can enter their order, display it, and check the status for each one. 
//  let array=[];
// //Ask the user to enter his/her name as input 
// let your_name = (prompt("Enter your name:"));
// //*Ask the user to enter his/her gender. The answer should be either (male or female) 


//  // prompt age
//  let your_gender = prompt("Please Enter your gender:"); 
//  if(your_gender === "female" ){
//      alert(` welcome  Ms.${your_name}`)

//  }
//  else if(your_gender === "male" ) {
//      alert(` welcome  Mr.${your_name}`)
//  }
//   else{
//      alert(` welcome  ${your_name}`)

//   }
//  let your_age = (prompt("Enter your age:"));


// //*Ask the user if he/she wants to order a shawarma, zinger, or burger. 

// let your_order = (prompt(your_name+" , Would you like to order a shawarma, zinger, or burger?"));
//  if( your_order === "shawarma" || your_order === "zinger" ||  your_order === "burger"  ){
//  }
//  else{
//     alert(` Your order is not  available`)
//      your_order = prompt(your_name+" , Would you like to order a shawarma, zinger, or burger?");

//  }
//  alert(` Your order for  ${your_order} is being prepared`)
 //==========================EX3:==========================

//  array.push(your_name)
//  array.push(your_gender)
//  array.push(your_order)
// console.log(array)

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//  }

 

//==========================EX4================================
//NEW Q1:
// const body=document.body;
// const hero=document.createElement("p");
// hero.innerHTML="A restaurant website that offers a menu of delicious meals and beverages, allowing customers to browse, place orders, and enjoy convenient service."
// body.appendChild(hero)


// const div=document.createElement("div");
// div.id="Div"
// body.appendChild(div)
 
// const titel=document.createElement("p");
// const ol=document.createElement("ol");
// const li_gender=document.createElement("li");
// const li_age=document.createElement("li");
// const li_order=document.createElement("li");


// titel.textContent=your_name;
// li_gender.textContent="Gender:"+your_gender;
// li_age.textContent="Age:"+your_age
// li_order.textContent="order:"+your_order


// div.appendChild(titel);
// div.appendChild(ol);
// ol.appendChild(li_gender);
// ol.appendChild(li_age);
// ol.appendChild(li_order);

//================================EX5==================
 let form=document.getElementById("user_inf");
 let name=document.getElementById("name");
 let age=document.getElementById("age");
 let gender=document.getElementById("gender");


//  let zinger=document.getElementById("zinger").value;
//   let burger=document.getElementById("burger").value;
//  let shawerma=document.getElementById("shawerma").value;
let Sandwich=document.getElementById("sandwich");
let combo=document.getElementById("combo");
let submit_btn=document.getElementById("submit_btn")
 let result=document.getElementById("result");




submit_btn.addEventListener("click",(e)=>{
    e.preventDefault();




   let order = "";
   if (document.getElementById("shawerma").checked) {
    order = document.getElementById("shawerma").value;
} else if (document.getElementById("zinger").checked) {
    order = document.getElementById("zinger").value;
} else if (document.getElementById("burger").checked) {
    order = document.getElementById("burger").value;
}
else{
    order ="No order selected"; 
}


let combo_size = combo.checked ? combo.value : "No combo selected";
let sandwich_size = Sandwich.checked ? Sandwich.value : "No sandwich selected";


    result.innerHTML=` Username: ${name.value} .<br>
        Age:${age.value}.<br>
        Gender: ${gender.value}.<br>
        Combo:${combo_size}   ,${sandwich_size} <br>

Order: ${order}.<br>
`
        
    


})

//     let name = document.getElementById("name").value;
//     let age = document.getElementById("age").value;
//     let gender = document.getElementById("gender").value;
//     let order = document.querySelector('input[name="order"]:checked')?.value;
//    let add = [];
//     if (document.getElementById("combo").checked) add.push("Combo");
//     if (document.getElementById("sandwich").checked) combo.push("Sandwich");



// // إضافة معالج الحدث للنقر على الزر
// submit_btn.addEventListener("click", (e) => {
//     e.preventDefault();

//     // الحصول على قيم الإدخالات
//     let name = name.value;
//     let gender = gender.value;
//     let age = age.value;

//     // التحقق من الإشارة المختارة
//     let order = "";
//     if (shawarma.checked) order = shawarma.value;
//     else if (zinger.checked) order = zinger.value;
//     else if (burger.checked) order = burger.value;

//     // التحقق من المربعات المختارة
//     let sizes = [];
//     if (sandwich.checked) sizes.push(sandwich.value);
//     if (combo.checked) sizes.push(combo.value);

//     // عرض النتيجة
//     output.textContent = `
//         Name: ${name}
//         Gender: ${gender}
//         Age: ${age}
//         Order: ${order}
//         Size: ${sizes.join(", ")}
//     `;
// });
//==============================================================

//Q2: If you have a “Number” variable,  Your task is to print:
// let YourNumber = parseInt(prompt("Enter your number:"));

// switch (YourNumber) {
//     case 1:
//         num = "ONE";
//         break;
//     case 2:
//         num = "TWO";
//         break;
//     case 3:
//         num = "THREE";
//         break;
//     case 4:
//         num = "FOUR";
//         break;
//     case 5:
//         num = "FIVE";
//         break;
//     case 6:
//         num = "SIX";
//         break;
//     case 7:
//         num = "SEVEN";
//         break;
//     case 8:
//         num = "EIGHT";
//         break;
//     case 9:
//         num = "NINE";
//         break;
//     default:
//         num = "PLEASE TRY AGAIN";
// }

// alert("Number variable: " + num);

