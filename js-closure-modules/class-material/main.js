let mathOperations = function () {
    const add = function (x, y) {
        return x + y
    }
    return add
}

const math = mathOperations()
console.log(math(1, 2))

const foo = function () {
    const x = 1

    const bar = function () {
        console.log(x) //notice this inner function using the outer function's variable
    }

    return bar
}

const baz = foo() //out here, x doesn't exist
baz() //but when we invoke baz, we're printing x!

const setCounter = function (num) {
    let counter = 0

    const count = function () {
        counter += num;
        console.log(counter)
    }

    return count
}

const increment = setCounter(2)
increment()




// Create a Family function with two variables inside its scope:
// A members array which starts empty
// A birth function
// The birth function should take one parameter, name, and push it to members, then log the updated array
// The Family function should return the birth function, but not the members array


// Call the Family function, store it in a giveBirth variable, then call giveBirth a few times.

const family = function () {
    const members = []

    const birth = function (name) {
        members.push(name)
        console.log(members)
    }

    return birth
}
const giveBirth = family()
giveBirth("yosi")
giveBirth("Oksana")



//spot check 2
mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }
    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }    
}

const mathFuncs = mathOperations()

console.log(mathFuncs.add(13,29))
console.log(mathFuncs.mult(1.75,24))
console.log(mathFuncs.mult(7,mathFuncs.div(36,6)))


//spot check 3
const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()

usersModule.addUser('Oksana')
usersModule.addUser('Tamer')
usersModule.listUsers()

