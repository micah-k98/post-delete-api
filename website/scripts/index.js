"use strict"

let coursesService;
let coursesRows;

document.addEventListener("DOMContentLoaded", () => {
    coursesService = new CoursesService();

    coursesRows = document.getElementById("coursesRows");

    loadCourses();
})

function loadCourses() {
    coursesService.getAll().then(courses => {
        displayCourses(courses);
    })
}

function displayCourses(courses) {
    coursesRows.innerText = "";

    courses.forEach(course => {
        displayEach(course);
    });
}

function displayEach(course) {
    const row = coursesRows.insertRow(-1);
    
    const idCell = row.insertCell(0);
    idCell.innerText = course.id;
    const deptCell = row.insertCell(1);
    deptCell.innerText = course.dept;
    const courseNumCell = row.insertCell(2);
    courseNumCell.innerText = course.courseNum;
    const courseNameCell = row.insertCell(3);
    courseNameCell.innerText = course.courseName;
    const instructorCell = row.insertCell(4);
    instructorCell.innerText = course.instructor;
    const startDateCell = row.insertCell(5);
    startDateCell.innerText = course.startDate;

    const buttonCell = row.insertCell(6);
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.innerText = "Delete";
    buttonCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", ()=> {
        const isConfirmed = confirm(`This action will permanently delete ${course.courseName}. Would you like to proceed?`);
        if (isConfirmed) {
            coursesService.delete(course.id).then(()=> {
                coursesRows.removeChild(row);
            })
        }
    })
}

function addButtonClicked() {
    location.href = "/website/new-courses.html"
}

