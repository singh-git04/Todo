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

function todolist(){
     
let currenttask = []
 
if(localStorage.getItem('currenttask')){
    currenttask = JSON.parse(localStorage.getItem('currenttask'))
} 

function rendertask() {
    let addtask = document.querySelector('.addtask')
    let sum = ''
    currenttask.forEach(function (elem,idx) {
        sum = sum + `<div class="tasks">
            <h5>${elem.task}<span class = "${elem.imp}">imp</span>
            <details>
            <summary></summary>
            <p>${elem.detail}</p>
            </details> 
            </h5>
            <button id = ${idx}>Mark as Completed</button>
            </div>`
    })

    addtask.innerHTML = sum
 localStorage.setItem('currenttask',JSON.stringify(currenttask))

    let Cmpltbtn = document.querySelectorAll(".tasks button")

Cmpltbtn.forEach(function (btn){
    btn.addEventListener("click",function(){
        currenttask.splice(btn.id,1)
        rendertask()
    })    
}) 
}
rendertask()

let form = document.querySelector('form')
let forminput = document.querySelector(".form-input")
let formdetail = document.querySelector("textarea")
let formcheckbox = document.querySelector("#checkbox")

form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (forminput.value == '' || formdetail.value == '') {
        return
    }
    currenttask.push(
        {
            task: forminput.value,
            detail: formdetail.value,
            imp: formcheckbox.checked
        }
    )
    
    forminput.value = '',
    formdetail.value = '',
    formcheckbox.checked = false
    rendertask()
})
}
todolist()

function dailyplan()
{
    let dayplanData = JSON.parse(localStorage.getItem('dayplanData'))|| {}


var hour = Array.from({length:18},function(_,idx){
    return  `${6+idx}:00 - ${7+idx}:00`
})

let dailyplan = document.querySelector(".dailyplan")
var wholedaysum = ''
hour.forEach(function(elem,idx){
   var savedata = dayplanData[idx] || ''
    wholedaysum = wholedaysum + ` <div class="dailytime">
                <p class="time">${elem}</p>
                 <input id = ${idx} type="text" placeholder = "..." value = "${savedata} "autocomplete = "off">
              </div>`
})
dailyplan.innerHTML = wholedaysum

var dailyplanInput = document.querySelectorAll(".dailyplan input")
dailyplanInput.forEach(function(elem){
       elem.addEventListener('input',function(){
            dayplanData[elem.id] = elem.value        
            localStorage.setItem('dayplanData',JSON.stringify(dayplanData)) 
       })
})
}
dailyplan()
