/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  const parsed = parseInt(time)
  if (parsed < 12){
    return "Good Morning"
  } else if (parsed > 17 ){
    return "Good Evening"
  }else{
    return "Good Afternoon"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string){
  let greeting = document.querySelector('h1#greeting')
  greeting.innerText = string
}