// $(".remove").on("click", function(){
//     alert($(this).closest(".post").data().id)
//   })
  

//   $('button').on('click', function() {
//     let relevantInputValue = $(this).closest("div").find("input").val()
//     alert(relevantInputValue)
//   })
  

//spot check 1
// $('button').click(function(){
//   let relevantInputValue = $(this).closest('div').find('span').text()
//   alert(relevantInputValue)
// })


//spot check 2
$('button').click(function(){
  let relevantInputValue = $('.container').find('p').text()
  alert(relevantInputValue)
})


    // <div class="container">
    //     <p>Find me</p>
    // </div>
    // <p>Ignore me</p>

    // <button>Get That</button>