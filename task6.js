function addFive(num){
    console.log(num+5)
}
addFive(5);
addFive(0);
addFive(-5);

function toseconds(value) {
    console.log( Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : '00'));
   }
toseconds(300)
toseconds(120)
toseconds(180)


function toInteger(mystr) {
console.log(parseInt(mystr));
}
toInteger("6")
toInteger("1000")
toInteger("12")



function nextNumber(myint) {
    console.log(myint+=1);

}
nextNumber(0)
nextNumber(9)
nextNumber(-3)