class CoursesService {
    
    baseUrl = "http://localhost:8081/api/courses/";

    // GET
    getAll() {
        return fetch(this.baseUrl).then(response => response.json());
    }

    // POST
    async add(course) {
        const requestInfo = {
            method: "POST",
            body: JSON.stringify(course),
            headers: {"Content-type": "application/json;charset=UTF-8"}
        }

        return fetch(this.baseUrl, requestInfo).then(response => response.json())
    }

    // DELETE
    async delete(id) {
        const requestInfo = {
            method: "DELETE"
        }

        return fetch(this.baseUrl + id, requestInfo).then(response => response.json());
    }
}