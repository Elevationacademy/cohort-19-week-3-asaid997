
const StringFormatter = function(){

    const capitalizeFirst = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase()

    const skewerCase = (str) => str.replace(" ","-")

    return{
        capitalizeFirst,
        skewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box

//2

// Create a Bank module. It should have a variable and two functions:
//      A private money variable which starts off at 500
//      A depositCash function which takes a cash parameter and uses it to increase money
//      A checkBalance function which logs the money

const Bank = function(){
    let _money = 500
    const depositCash = (cashAmount) => _money+= cashAmount
    const checkBalance = () => console.log(_money)

    return{
        deposit: depositCash,
        showBalance: checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950


//3 challenging
const SongsManager = function(){
    const songs = {}

    const addSong = (name,url) => songs[name] = url.split('=')[1]
    const getSong = (name) => "https://www.youtube.com/watch?v="+songs[name]

    return{
        addSong,
        getSong
    }  
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("how long")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
