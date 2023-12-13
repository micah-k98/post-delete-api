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
}

function addButtonClicked() {
    location.href = "/website/new-courses.html"
}