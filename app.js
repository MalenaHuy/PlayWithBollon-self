// var emoji = document.querySelector('#emoji');
// emoji.innerText = '💥'



// const keyboardInfor = (code) => {
//     let button = "unknown"
//     switch (code) 

// let I="🎈";



const keyboardInfo = (e) =>{     
    console.log(`keyboard event : ${e.type}, key: ${e.keyCode}`)
}

document.addEventListener ('keydown', keyboardInfo)
document.addEventListener ('keyup', keyboardInfo)


let para = document.querySelector('h2');
var stop = false;
    window.addEventListener("keydown", e => {
        if(stop){
        return 0;
    }
      let currentSize = parseInt(para.style.fontSize);

      // If unable to determine current fontSize, default to 50
      if (isNaN(currentSize)) {
        currentSize = 30;
      }

      // Define the rate of change
      let changeAmount = 10; 
      if (e.key == "d" || e.key == "D"){
      
        if (parseInt(para.style.fontSize) <= 10) {
          emoji.innerText = 'Done';
          document.removeEventListener ('keydown', keyboardInfo)
          stop = true;
      }
      else{
        // Protect againt zero or negative font sizes via Math.max() 
        para.style.fontSize = (currentSize - changeAmount) + 'px';
      }
      }
      else if (e.key == "i" || e.key == "I" ) {
          if(para.style.fontSize <= '50px'){
            para.style.fontSize = (currentSize + changeAmount) + 'px';
          }
          else{
            document.querySelector('#emoji');
            emoji.innerText = '💥';
            document.removeEventListener ('keyup', keyboardInfo)
            stop =true;
          }
      };
    });

