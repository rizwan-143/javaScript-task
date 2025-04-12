

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
    if(userInputList === li.textContent){
        alert("list can not be same")
    }
    li.textContent = userInputList;
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
