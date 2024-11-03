// 1
let Age = prompt("Insert your age")
let Your = Age
let Rest = 18 - Your
switch (true) {

    case Your >= 18:
        console.log('You are old enought to drive')
        break;

    case Your < 18:
        console.log(`You are left with ${Rest} years to drive `)
        break;
}






// 2

let MyAge = 19
let YourAge = (prompt("Insert your age again"))

if (YourAge < MyAge) {
        console.log(`I am ${MyAge - YourAge} years older than you`)

}
    else if (YourAge > MyAge) {
        console.log(`You are ${YourAge - MyAge} years older than me`)

} 
    else if (MyAge == YourAge) {
        console.log("We are the same Age")
}






// 3

let A = (prompt("Insert the value of A"))
let B = (prompt("Insert the value of B"))

if (A > B) {
    console.log(`Value of ${A} is greater than value of ${B}`)
} else {
    console.log(`Value of ${A} is less than value of ${B}`)
}

let N = A > B ? `${A} is greater than ${B}` : `${A} is less than ${B}`
console.log("Value using ternary operators " + N)






// 4

let Month = prompt("Insert any month")

if (Month == "september" || Month == "october" || Month == "november") {
    console.log("The season is Autumn")

} else if (Month == "december" || Month == "january" || Month == "february") {
    console.log("The season is Winter")

} else if (Month == "march" || Month == "april" || Month == "may") {
    console.log("The season is Spring")

} else if (Month == "june" || Month == "july" || Month == "august") {
    console.log("The season is Summer")
}






let Score = (prompt("Insert student's score"))

switch (true) {

    case Score >= 80:
        console.log ('Grade - A')       
        break;

    case Score >= 70 && Score <= 79:
        console.log ('Grade - B')
        break;

    case Score >= 60 && Score <= 69:
        console.log ('Grade - C')
        break;

    case Score >= 50 && Score <= 59:
        console.log ('Grade - D')
        break;

    case Score >= 0 && Score <=  49:
        console.log ('Grade - F')
        break;
}














