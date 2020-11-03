let users = []

const getData = function (calldata) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
        calldata()
    }, 3000);
}

const displayData = function () {
    console.log("Going to display users")
    for (user of users) {
        console.log(user.name)
    }
}

getData(displayData)

  
  //setInterval(function(){
//     console.log(new Date())
//   }, 1000)
  


