//1
const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}
const pushPull = function (callback) {
    callback()
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"


//2
const returnTime = function (time) {
    console.log('The current time is: ' + time)
}

const getTime = function (callback) {
    const time = new Date()
    callback(time)
}

getTime(returnTime)

//3
const displayData = function (alertDataFunc, logDataFunc, data) {
    //alertDataFunc(data);
    logDataFunc(data);
};
const logData = function (data) {
    console.log(data)
}

displayData(alert, logData, "I like to party")

//4
const sum = (num1, num2, num3) => num1 + num2 + num3
console.log(sum(1, 1, 1))

//5
const capitalize = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase()

console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia

//6
const determineWeather = temp => {
    if (temp > 25) {
        return "hot"
    }
    return "cold"
}
const commentOnWeather = (temp) => "it's " + determineWeather(temp)

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"


//7
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
}

const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"

const makeSound = sound => alert(sound)

explode(shineLight, makeSound, "BOOM")