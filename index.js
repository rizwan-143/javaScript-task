

let numList = document.getElementById("numList");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let li = document.createElement("li");
li.textContent = 0;
numList.appendChild(li);
let count = 0;
increment.addEventListener(`click` , function(){
    count++;
    li.textContent = count;
    numList.appendChild(li);

});

decrement.addEventListener(`click` , function(){
    count--;
    li.textContent = count;
    numList.appendChild(li);

});



let studentsList = [
    { rollNo: 1, firstName: "rizwan", lastName: "jabbar" },
    { rollNo: 2, firstName: "khan", lastName: "ali" },
    { rollNo: 3, firstName: "ahmad", lastName: "prince" },
    { rollNo: 4, firstName: "wali", lastName: "ahmad" }
];

let addbtn = document.getElementById("search");
let students = document.getElementById("students");
addbtn.addEventListener(`click`, function () {
    let userInput = Number(document.getElementById("userInput").value);
    let found = false;
    for (i = 0; i < studentsList.length; i++) {
        if (userInput === studentsList[i].rollNo) {
            found = true;
            break;
        }
    }
    if (found) {
        // alert( " student first name :  " + studentsList[i].firstName + "  " + " student last name :" + studentsList[i].lastName);
        let li = document.createElement("li");
        let p = document.createElement("p");
        let b = document.createElement("p");
        p.textContent = `first name  : ${studentsList[i].firstName}"`;
        b.textContent = ` last name  : ${studentsList[i].lastName} `;
        li.appendChild(p);
        li.appendChild(b);
        students.appendChild(li);
        document.getElementById("userInput").value = "";

    } else {
        alert("Enter a valid roll no")
    }
});



let toDoList = document.getElementById("toDoList");
let addlistbtn = document.getElementById("add");

addlistbtn.addEventListener(`click` , function(){
    let  userInputList = document.getElementById("userInputList").value;
    if(userInputList === ""){
        alert("please enter something");
        return;
    }
    let li = document.createElement("li");
    let delbtn = document.createElement("button");
    delbtn.textContent = "delete";
    delbtn.addEventListener(`click` , function(){
        li.remove()
    })
    delbtn.style.margin = "20px";
    li.textContent = userInputList;
    li.appendChild(delbtn);
    toDoList.appendChild(li);
});






// let addbtn = document.getElementById("search");
// addbtn.addEventListener('click', function () {
//     let userInput = Number(document.getElementById("userInput").value);
//     let found = false;

//     for (let i = 0; i < studentsList.length; i++) {
//         if (userInput === studentsList[i].rollNo) {
//             found = true;
//             break;
//         }
//     }

//     if (found) {
//         alert("data found");
//     } else {
//         alert("data not found");
//     }
// });
