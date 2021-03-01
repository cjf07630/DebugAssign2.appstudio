/*
ADD ARRAYS AND SOME ARRAY METHODS - .LENGTH, POP, PUSH

This program gets the user name and age, then outputs a nice, appropriate 
message to the user based on their age. It also sees if the users' name is in the 
friends array. 
*/

let messageNum = ""
let friends = ["Michelle", "Betty", "Bev", "Amy","Marsha"]
let choice= prompt(`Which of my friends do you want to invite over? ${friends[0]}, ${friends[1]}, ${friends[2]}, ${friends[3]}, or ${friends[4]}?`)

let message = [ "You are in your twenties!", "You are in your thirties!", "You are over 40! Wow!"]
let userName = prompt("Enter your first name please. ")
let userAge = prompt("Enter your current age in years. ")

switch (true) {
case (userAge > 20 && userAge <30):
    alert(`${message[0]}`)
    break;
case (userAge > 30 && userAge < 40):
    alert(`${message[1]}`)
    break;
case (userAge > 40):
    alert(`${message[2]}`)
    break;
default:
    alert("I have no idea how old you are.")
    break;
    }
