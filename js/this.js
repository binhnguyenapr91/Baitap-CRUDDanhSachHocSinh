let  studentList=["Becker","Lovren","Van Dirk","Arnold","Robertson","Fabinho","Henderson","Keita","Sadio Mane","Firmino","Salah"];
function displayList(){
        refreshList();
        for(let index=0;index<studentList.length;index++){
                let parentTable = document.getElementById("mainTable");
                let newStudent = document.createElement(`tr`);
                newStudent.className = "arrayInfoContainer";
                newStudent.innerHTML = "<td>"+(index+1)+"</td><td>"+studentList[index]+"</td>";
                parentTable.appendChild(newStudent);
        }
}

function refreshList(){
                document.getElementById("mainTable").innerHTML = ""
}
function create(){
       let addedStudentName = document.getElementById("txtInputInfo").value;
       studentList.push(addedStudentName);
       displayList();
}
function read(){
        let needToReadItem = parseInt(document.getElementById("txtInputInfo").value) - 1;
        alert(studentList[needToReadItem]);
        displayList();
}
function remove(){
        let needToRemoveItem = parseInt(document.getElementById("txtInputInfo").value) - 1;
        studentList.splice(needToRemoveItem,1);
        displayList();
}
function update(){
        let needToUpdateItem = parseInt(document.getElementById("txtInputInfo").value) - 1;
        let newInfoToUpdate = prompt("Dien vao gia tri moi");
        studentList.splice(needToUpdateItem,1,newInfoToUpdate);
        displayList();
}


