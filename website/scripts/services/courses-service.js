class CoursesService {
    
    baseUrl = "http://localhost:8081/api/courses";

    getAll() {
        return fetch(this.baseUrl).then(response => response.json());
    }
}