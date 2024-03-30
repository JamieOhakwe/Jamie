// Collect answers from users
// let answer = window.prompt('What is your name?');


// console.log(answer);

// placing answer on the UI



// document.getElementById('nameButton').onclick = function(){
//     // console.log('The button works!');

//    let nameBox =  document.getElementById('nameBox').value 
//    document.getElementById('myName').innerHTML = nameBox
//    document.getElementById('myName').style.color = 'blue'
//    console.log(nameBox);
// }



function testWorking(){
    // console.log('I am working!');
    let value1 = document.getElementById('input1').value
    let value2 = document.getElementById('input2').value
    let value3 = document.getElementById('input3').value

   
    document.getElementById('answer1').innerHTML = value1
    document.getElementById('answer2').innerHTML = value2
    document.getElementById('answer3').innerHTML = value3
    document.getElementById('answer1').style.color = 'purple'
    document.getElementById('answer2').style.color = 'purple'
    document.getElementById('answer3').style.color = 'purple'
   
}

// testWorking()




// sayHello('Jamie', 'Hello')
// let x = 12 ley y = 7 
// turnOnLight()   openDoor()   changeColor()