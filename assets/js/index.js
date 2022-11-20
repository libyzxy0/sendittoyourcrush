var buttonYes = document.getElementById("yesBtn");
var buttonNo = document.getElementById("noBtn");
var qtn = document.querySelector("[data-msg]");
var gif = document.querySelector("[data-gif-display]");
var buttonClose = document.getElementById("closeBtn");
var count = 0;
var count1 = 0;
buttonNo.addEventListener("click", function() {
  count++
  if(count == 1) {
    qtn.innerHTML="Wala na lungkot nako."
    gif.src="./assets/img/NoGif/1.gif"
  } else if (count == 2) {
    qtn.innerHTML="Sige na mag Oo kana kase."
    gif.src="./assets/img/NoGif/2.gif"
  } else if (count == 3) {
    qtn.innerHTML="Edi wag, sino ba nmn ako para piliin."
    gif.src="./assets/img/NoGif/3.gif"
  } else if (count == 4){
    qtn.innerHTML="Pangit mo blee."
    gif.src="./assets/img/NoGif/4.gif"
    
    buttonClose.style.display="block"
    buttonYes.style.display="none"
    buttonNo.style.display="none"
  }
});

buttonYes.addEventListener("click", function() {
   count1++
   if(count1 == 1) {
    qtn.innerHTML="We, totoo ba yan?"
    gif.src="./assets/img/YesGif/1.gif"
  } else if (count1 == 2) {
    qtn.innerHTML="Yiiee, iloveyousomuchh🫶🫶"
    gif.src="./assets/img/YesGif/2.gif"
    
    buttonClose.style.display="block"
    buttonYes.style.display="none"
    buttonNo.style.display="none"
  }
});

buttonClose.addEventListener("click", function() {
   close();
});

//Made with libyzxy0(Jan Liby Dela Costa)
