const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const box_onclick = function(){
    box.style.background = "#8e44ad"
}
const ulEle = document.getElementById("ulEle")

const ul_onclick = function(){
    const subUl = document.createElement("li")
    subUl.innerHTML = "A new item"
    ulEle.appendChild(subUl)    
}



const reservation_input = document.getElementById('Reservatio_input')
const reservatio_button = document.getElementById('Reservatio_button')

//Exce1
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
const container1 = document.getElementById('ex2')

const checkReservation = function(name){
    const person = reservations[name]
    if(person == undefined)
        return "You have no reservation"
    if(!person.claimed)
        return "Welcome, Bob"
    return "Hmm, someone already claimed this reservation"
}

reservatio_button.onclick = function(){
    const input = reservation_input.value
    const reservationStatus = checkReservation(input)

    const newElement = document.createElement('div')
    newElement.innerHTML = reservationStatus
    
    container1.appendChild(newElement)
}


//ex 2
const container = document.getElementById("container")
const main_container3 = document.getElementById('ex3')
const boxes = []

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }

const boxex_function = {
    colorBox : function(object){
        object.style.backgroundColor = "rgb("+getRandomInt(255)+", "+getRandomInt(255)+", "+getRandomInt(255)+")"
    },
    //extra:
    checkColorsMatchings: function(){
        const firstBox = boxes[0]
        for(let i = 1; i<6 ; i++){
            if(firstBox.style.backgroundColor != boxes[i].style.backgroundColor)
                return false
        }
        const newElement = document.createElement('div')
        newElement.innerHTML = "Nice job!"
        
        main_container3.appendChild(newElement)
    }
}

const onMouseEnter = function(){
    boxex_function.colorBox(this)
    //extra:
    boxex_function.checkColorsMatchings()
}

for(let i=0 ; i<6 ;i++){
    const box = document.createElement('button')
    box.setAttribute("class", "boxes2")
    boxex_function.colorBox(box)
    box.onmouseenter = onMouseEnter
    boxes.push(box)
    container.appendChild(box)
}

//ex 3
const submit = document.getElementById('sub')
const output = document.getElementById('error_output')
const form = document.getElementById('form')

const validate = function(name,salary,birthday,phone){
    if(name == ""){
        output.innerHTML = "Name is missing"
        return false;
    }
    if(salary == ""){
        output.innerHTML = "Salary is missing"
        return false;

    }
    if(birthday == ""){
        output.innerHTML = "Birthday is missing"
        return false;
    }
    if(phone == ""){
        output.innerHTML = "Phone is missing"
        return false;
    }
    return true;
}

submit.onclick = function(){
    output.innerHTML = ""
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const birthday = document.getElementById('birthday').value
    const salary = document.getElementById('salary').value
    //extra:
    if(validate(name,salary,birthday,phone)){
        form.style.display = "none"
        alert("Welcome "+name+"!")
    }
}

