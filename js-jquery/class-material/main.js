const cont = $("#container")

const header = $("#header")

console.log(header)

console.log(jQuery)
console.log($)

//spot check 1
$("h4")
$("h4").css("color", "red")


//spotcheck2
$("h1").css("background-color", "blue")
$(".red-div").css("background-color", "red")
$("li:first-child").css("background-color", "green")
$("li:last-child").css("background-color", "pink")
$("#brown-div").css("background-color", "brown")


// jQuery also gives us an addClass method - it takes one parameter, the class name.

// Create two divs in your HTML
// One with an ID of b1 and the second with an ID of b2
// Target each of the divs and use the addClass property to add the class box
// In your CSS file, define some styling for .box


// You should see both boxes come to life.

//spotcheck 3
$("#b1").addClass("box")
$("#b2").addClass("box")

$('#my-input').val("Terabyte")



const color = $("#divData").data().color
console.log(color) //prints #2980b9

{/* <div id="spotcheck5" data-barcode="311192" data-expirationDate="18-02-2030">Items</div> */ }

// Create an element with two data attributes: barcode and expirationDate

// Then, use jQuery to grab both and print out The item with barcode 311192 will expire on 18-02-2030

const barcode = $("#spotcheck5").data().barcode
const expiration = $("#spotcheck5").data().expirationdate
console.log(barcode + " will expire on " + expiration)

$('button').on('click', function () {
    console.log('clicked!')
})

//   $('button').click(function () {
//     alert('clicked!')
//   })

$('.spotcheck6').hover(function () {
    $('.spotcheck6').css("background-color", "blue")
})




$('#spotcheck7').click(function () {
    console.log($("#my-input7").val())
})

$("#b1").hover(function () {
    console.log($(this))
})


$('.box2').hover(function () {
    $(this).css("background-color", "blue")
})



const aDynamicDiv = "<div class='mine'>Oh yes</div>"
const elem = $(aDynamicDiv)
console.log(elem)
$("body").append(elem)

$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')

let text = "Banana"
let item = $("<div class=fruit>" + text + "</div>")

console.log(item) //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!
text = "Banana"
item = $(`<div class=fruit>${text}</div>`)

console.log(item) //the same



$(".feedme").on("click", function () {
    let divCopy = `<div class=feedme> ${$(this).text()} </div>`

    $("body").append(divCopy)
})


const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
  ]
  
for(let name of names){
  $("body").append(`<div>${name.first} - ${name.last}</div>`)
}

//$("p").remove()
$("p").remove(".brown")

$('.spotcheck11').hover(function(){
    $(this).remove()
})

$('#post').click(function(){
    $('#blogs').append(`<div class="blog">blabla text blabla</div>`)
    $(".blog").click(function(){
        $(this).text("blargh")
    })
})

// Write a listener that appends a div with a class of blog to the blogs div
//      Each div should have some text inside of it - it will be the same text each time
// Write another listener that changes any element with a class of blog to have the text "blargh"
//      Use jQuery's text method to change the text inside an element

{/* <div id="blogs"></div>
<button>Post Blog</button> */}
