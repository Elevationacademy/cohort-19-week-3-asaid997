


// <input id="name" placeholder="Name" type="text">
// <input id="wish" placeholder="Name" type="text">
// <button id="submit">Submit</button>

const submit = $('#submit')
const name = $('#name')
const wish = $('#wish')

const posts = [
    {
        name: "Alex",
        text: "Happy ksndbsknksndfs"
    },
    {
        name: "Natalie",
        text: "klnxm,bnmbxx"
    }
]

const retrieveIndexOfPostToRemove = function(name){
    for(let i in posts){
        if(posts[i].name == name)
            return i
    }
}

const render = function(post){
    const element = $(`<div>${post.name}: ${post.text}</div>`)
    $('#posts').append(element)
    element.click(function(){
        $('#posts').text('')
        posts.splice(retrieveIndexOfPostToRemove(post.name),1)
        for(let post1 of posts){
            render(post1)
        }
    })
}
for(let post of posts){
    render(post)
}

submit.click(function(){
    const post = {name: name.val(),text: wish.val()}
    posts.push(post)
    render(post)
})



// Recap Exercise
// You'll get to practice MVC more later, but for now - without looking at the code bits spread throughout this lesson (the timeline example) - complete the following:



// Create a simple pair of inputs and a submit button in your HTML
//     The inputs are name and text
// Create a posts array with a few {name: ..., text:...} objects
// Write a function called render that loops through posts and creates a simple div for each post
//     The loop should also add the div to somewhere on the HTML
// Add an on("click") event to the button. When the button is clicked you should:
//     Grab the name and text from the inputs
//     Push a new object to the posts array with the name and text data
//     Call render again


// Once you're done with that, you'll notice that whenever you add a new post, it will duplicate the entire list on the DOM - fix this.

// This might be useful



// Ultimately, it should look something like this (no need to spend time on too much CSS):›