`use strict`
var userName= prompt("Enter your first name")
if(userName==""||userName==null){alert("you entered invalid name")}
console.log(userName);
var gender= prompt("Enter your gender , male or female")
if(gender==""||gender==null){alert("you didnt enter any gender")}
console.log(gender)
/////var nicName
/////if(gender=="male"){nicName="Mr"}else if(gender=="female"){nicName="Ms"}else if(welcMass==false && console.log(nicName)==undefined){var c=alert("welcome some one")};
//// console.log(nicName);
var age=prompt("Enter your age");
console.log(age);
console.log(typeof age)
if(age<=0){alert("you Entered small number")}else{welcMass};
var welcMass
var welcMass=confirm("Do you want to skip the welcome massage");
console.log(welcMass);
if(welcMass==false && gender.toLowerCase()=="male"){var canclBot=alert(`welcom to my page Mr ${userName}`)}
else if(welcMass==false && gender.toLowerCase()=="female"){var canclBot1=alert(`welcom to my page Ms ${userName}`)}
else if(welcMass==false && gender.toLowerCase()!=="female"&&gender.toLowerCase()!=="male"){var canclBot2=alert(`welcom to my page some one from people`)};

//// Here the day 6 task
   let userAnswer=[]
let userCont= confirm("now you have more questions to answer ,would you like to answer these questions")
console.log(userCont)


if(userCont==true){
var question1=prompt("Do you like playing football ,<Yes> or <No>")
if(question1=="" || question1==null){question1="invalid"}
console.log(question1)
userAnswer.push(question1);
var question2=prompt("Do you like to eat Mansaf,<Yes> or <No>")
if(question2==""||question2==null){question2="invalid"}
userAnswer.push(question2)
console.log(question2);
var question3=prompt("Do you like to read novels,<Yes> or <No> ")
if(question3==""||question3==null){question3="invalid"}
console.log(question3)
userAnswer.push(question3);

console.log(userAnswer)
alert(`your answer are  for Q1)${userAnswer[0]},and for Q2) ${userAnswer[1]},and for Q3) ${userAnswer[2]}`)
for(var i=0;i<userAnswer.length;i++){ 
    console.log(userAnswer[i]) 
}
}

//var userAnswer=[question1,question2,question3];
//console.log(userAnswer)
//let findAnswer;
    //for(let i=0;i<userAnswer.length;i++){
      // if(userAnswer[i]=="yes"||userAnswer[i]=="no"){
      //     console.log(findAnswer) }     
     //  }
  