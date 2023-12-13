"use strict"

let coursesService;

document.addEventListener("DOMContentLoaded", () => {
    coursesService = new CoursesService();

    const saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", saveButtonClicked);
})

async function saveButtonClicked(event) {
    event.preventDefault();

    const dept = document.getElementById("dept").value;
    const courseNum = document.getElementById("courseNum").value;
    const courseName = document.getElementById("courseName").value;
    const instructor = document.getElementById("instructor").value;
    const startDate = document.getElementById("startDate").value;
    const numDays = document.getElementById("numDays").value;

    const course = {
        "dept": dept,
        "courseNum": courseNum,
        "courseName": courseName,
        "instructor": instructor,
        "startDate": startDate,
        "numDays": numDays
    }

    const newCourse = await coursesService.add(course);

    console.log(newCourse);
    location.href = "/website/index.html"
}