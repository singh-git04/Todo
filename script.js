function opencard() {
    var allelem = document.querySelectorAll('.elem')
    var fullelemPage = document.querySelectorAll('.fullelem')
    var fullelemBackbtn = document.querySelectorAll('.back')
    allelem.forEach(function (elem) {
        elem.addEventListener('click', function () {
            fullelemPage[elem.id].style.display = 'block'
        })
    })
    fullelemBackbtn.forEach(function (close) {
        close.addEventListener("click", function () {
            fullelemPage[close.id].style.display = 'none'
        })
    })
}
opencard()
 
let currenttask = []
 
if(localStorage.getItem('currenttask')){
    currenttask = JSON.parse(localStorage.getItem('currenttask'))
    console.log('task is full')
}else{
    console.log('task is empty')
}

function rendertask() {
    let addtask = document.querySelector('.addtask')
    let sum = ''
    currenttask.forEach(function (elem) {
        sum = sum + `<div class="tasks">
            <h5>${elem.task}<span class = "${elem.imp}">imp</span></h5>
            <button>Mark as Completed</button>
            </div>`
    })

    addtask.innerHTML = sum
}
rendertask()

let form = document.querySelector('form')
let forminput = document.querySelector(".form-input")
let formdetail = document.querySelector("textarea")
let formcheckbox = document.querySelector("#checkbox")

form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (forminput.value == '' && formdetail.value == '') {
        return
    }
    currenttask.push(
        {
            task: forminput.value,
            detail: formdetail.value,
            imp: formcheckbox.checked
        }
    )
     localStorage.setItem('currenttask',JSON.stringify(currenttask))
    forminput.value = '',
    formdetail.value = '',
    formcheckbox.checked = false
    rendertask()
})

