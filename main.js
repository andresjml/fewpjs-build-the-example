// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const glyphInner = {
  "♡": "♥",
  "♥": "♡"
}; 

const glyphColor = {
  "red" : "",
  "": "red"
};

const arrHeart = document.querySelectorAll(".like-glyph");
arrHeart.forEach(element => {  
  element.addEventListener("click", Callback);
})

function Callback(e) {
  const heart = e.target;
  mimicServerCall("Url")
   
    .then(function(){
      heart.style.color = glyphColor[heart.style.color]; 
      heart.innerText = glyphInner[heart.innerText];
       
    })
    .catch(function(error) {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 2000);
    });
}








//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
