const Renderer = function () {

    const getElement = function (class1, dataId, text) {
        const string = `<div>${text}</div>`
        const element = $(string)
        element.addClass(class1)
        element.data("id",dataId)
        return element
    }

    const appendElement = function (element, parent) {
        parent.append(element)
    }

    const renderPosts = function (posts) {
        const postsEl = $("#posts")
        for (let post of posts) {
            const element = getElement("post post-text", post.id, post.text)
            appendElement(element, postsEl)
            for (let comment of post.comments) {
                const element2 = getElement("comments", comment.id, comment.text)
                appendElement(element2, element)
            }
        }
    }

    return { renderPosts }
}


// The renderPosts function should receive one parameter: posts
//      This parameter is the array of post objects that comes from your Tweetermodule
// The function should first empty the #posts element
// It should loop through each post in the posts array and append some HTML to #posts
//      Use jQuery to create and add the elements
//      Functions are your friends
// Notice that each post has its own text, as well as the text of its comments
//      You need to generate the HTML for both
//      Make sure you're adding each post and comment's ID in a data-id attribute
// Use the CSS below for styling - you should be able to figure out which elements receive which class
// We highly encourage you to use template literals

// text: "Aw man, I wanted to be first",
// id: "p2",
// comments: [
//     { id: "c4", text: "Don't wory second poster, you'll be first one day." },
//     { id: "c5", text: "Yeah, believe in yourself!" },
//     { id: "c6", text: "Haha second place what a joke." }


// .post{
//     box-shadow: 1px 1px 3px;
//     margin: 10px;
//     border-radius: 5px;
//     padding: 10px;
// }

// .comments{
//     margin-left: 10px;
//     margin: 10px;
// }