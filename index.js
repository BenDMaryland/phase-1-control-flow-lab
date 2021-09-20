
function scuberGreetingForFeet(someNumber){
  if (someNumber < 200) {
     return  'This one is on me!'
     
} else if (someNumber > 2000 && someNumber < 2500){
  return 'I will gladly take your thirty bucks.'
} else {
  return 'No can do.'
}
}

function ternaryCheckCity(cityName){
  return cityName === 'NYC'?'Ok, sounds good.' :"No go."

  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
    return  "Thank you."
    default:
      return"Bye."
  }
  // Write your code here!
}