// const tinderUser = new Object()

const tinderUser = {}
// this is how to add key and values in an object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// output => { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shashwat",
            lastname: "Singh"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);
// output => shashwat

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 }
// console.log(obj4);
// output => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj5 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj5);
// output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const obj6 = {...obj1, ...obj2} // merging obj using spred operator
// console.log(obj6);
// output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const obj7 = {...obj1, ...obj2, ...obj3} // merging obj using spred operator
// console.log(obj7);
// output => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "w@gmail.com"
    },
]


users[1].email
// console.log(users[1].email);
// output => h@gmail.com


const tinderUser1 = {}

tinderUser1.id = "123abc"
tinderUser1.name = "Sammy"
tinderUser1.isLoggedIn = false

// console.log(tinderUser);
// output => { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); // to find all the keys in a object returns in an array

// output => [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser)); // to find all the values in a obj  returns in an array

// output => [ '123abc', 'Sammy', false ]

// console.log(Object.entries(tinderUser)); // to find all the keys and values returns in an array
// output => [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check perperty is available in this array or not returns in boolean (true or false)


//**************   De-structuring ****************

const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Shashwat"
}

// console.log(course.courseInstructor);
// output => shashwat

const {courseInstructor: instructor} = course // de-structured

// console.log(courseInstructor);
// output => shashwat
console.log(instructor);
// output => shashwat

