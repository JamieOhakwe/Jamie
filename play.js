// Collect answers from users
// let answer = window.prompt('What is your name?');


// console.log(answer);

// placing answer on the UI



document.getElementById('nameButton').onclick = function() {
    // console.log('The button works!');

   let nameBox =  document.getElementById('nameBox').value 
   document.getElementById('myName').innerHTML = nameBox
   document.getElementById('myName').style.color = 'blue'
   console.log(nameBox);
}