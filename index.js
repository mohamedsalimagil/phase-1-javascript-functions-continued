// razzle();
// function razzle (){
//     console.log("You've been razzled!");
// }
// function razzle (lawyer = "Billy", target = "'em") {
//     console.log(`${lawyer} razzle-dazzles ${target}!`);
// }
// razzle();
// razzle("Methuselah", "T'challah");

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
consologe.log(saturdayFun());
function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
console.log(mondayWork());
function wrapAdjective(flair = "*") {
    return function(adjective) {
        return `You are ${flair}${adjective}${flair}!`;
    }
}
console.log(wrapAdjective()("a hard worker"));
