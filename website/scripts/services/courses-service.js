class CoursesService {
    
    baseUrl = "http://localhost:8081/api/courses";

    getAll() {
        return fetch(this.baseUrl).then(response => response.json());
    }

    async add(course) {
        const requestInfo = {
            method: "POST",
            body: JSON.stringify(course),
            headers: {"Content-type": "application/json;charset=UTF-8"}
        }

        return fetch(this.baseUrl, requestInfo).then(response => response.json())
    }
}