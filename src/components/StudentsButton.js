const Button = require()
const Deact = require("../libs/deact")
const Http = require("../utils/http")

function StudentsButton() {
    return Button( {
        class: "students-button",
        onclick: () => {
            Http.getRequest("http://localhost:3000/students", function({
                students
            }){
                students.forEach(student)
            })
        }
    })
}