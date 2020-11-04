
//1 and 2
$('#add').click(function () {
    $('ul').append(`<li>${$('#name').val()}</li>`)
    $('li:last-child').click(function () {
        $(this).remove()
    })
    $('#name').val("")
})
$('li:last-child').click(function () {
    $(this).remove()
})

//3
$('body').append('<div></div>')
$('body').append('<div id="box1" class="box"></div>')
$('body').append('<div id="box2" class="box"></div>')
$('#box1').hover(function () {
    $(this).css("background-color", "#8e44ad")
    $('#box2').css("background-color", "red")
})
$('#box2').hover(function () {
    $(this).css("background-color", "#8e44ad")
    $('#box1').css("background-color", "red")
})

//4
const counts = {
    Melon: 0,
    Shoe: 0
}
$('.item').click(function () {
    const availability = $(this).data().instock
    if (availability) {
        let uniqStr = ""
        if(counts[$(this).text()] > 0)
            uniqStr += " X"+(counts[$(this).text()]++)
        else
            counts[$(this).text()]++
        
        const newElement = $(`<div>${$(this).text()}${uniqStr}</div>`)
        $('#cart').append(newElement)
        newElement.click(function () {
            $(this).remove()
        })
    }

})


//5 ch
const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
]

for (let fruit of fruits) {
    $('#basket').append(`<div class="${fruit.color}">${fruit.name}</div>`)
}

//6



// Do not change anything in the HTML/CSS
// You should use a for loop
//      In fact, all the required code should be in this for loop
// Start by adding the picker class and background color dynamically to each button
// Then work on making the box change color when you click the colors (adding a listener)

$('#colors').children('span').each(function () {
    const color = $(this).data().color
    $(this).css("background-color", color)
    $(this).addClass('picker')
    $(this).click(function () {
        $('.box2').css("background-color", color)
    })
});

{/* <div class="box2"></div>
<div id="colors"><span data-color="#2980b9">Blue</span><span data-color=#e74c3c>Red</span><span
        data-color=#f1c40f>Yellow</span><span data-color=#27ae60>Green</span>
</div> */}