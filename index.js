
let counter = 0

   const NYR = document.querySelector('#NYR')
   NYR.addEventListener('mouseover', e => {
   console.log(e)
   counter++
   if (counter == 1){
   alert('Are you sure the New York Rangers are worth your time?');
   }
   else if (counter == 2){
   NYR.remove()
   }
   console.log(counter)
   } ) 

let darkCounter = 0;
   const darkBtn = document.querySelector('#darkBtn')
   darkBtn.addEventListener('click', e => {
            document.body.classList.toggle('dark')
            darkCounter++;
            console.log(darkCounter)
            if (darkCounter % 2 === 0) {
            darkBtn.textContent = "TURN DARK-MODE ON"
            } else {
            darkBtn.textContent = "TURN DARK-MODE OFF"
            }
   })

                  
         