fetch("http://localhost:3000/logos")
.then(resp => resp.json())
.then(data => {
      renderLogos(data)
      darkMode()
      formFunction()
      matchUp()
})

// Render all logos.
function renderLogos(data) {
   for (const item of data) {
        const mainDiv = document.querySelector('#mainDiv')
        const darkId = document.querySelector('#darkId')
        const h3 = document.createElement('h3')
        const img = document.createElement('img')
        //  const h4 = document.createElement('h4')
              img.id = "imgId"
              img.src = item.image
              mainDiv.append(img)

            // Goal horn on click team logo.
            const devilsGoalHorn = new Audio(item.goalHorn)
            let goalCounter = 0;
            img.addEventListener('click', e => {
                  if (goalCounter % 2 === 0) {
                        devilsGoalHorn.play()
                  } else {
                        devilsGoalHorn.pause()
                  }
                  goalCounter++;
            }) 

            // Title for team names on hover.
              img.addEventListener('mouseover', e => {
                    img.title = item.name
              })

            // Drop-down/hide team name.
              let counter = 0;
              img.addEventListener('click', e => { 
                    counter++
                    darkId.append(h3)
                    if (counter % 2 === 0) {
                          h3.innerText = ""
                        } else {
                              h3.innerText = item.name             
                        }
                        console.log(counter)
        }  )
   }

}

// Dark mode.
function darkMode() {
      const darkBtn = document.querySelector('#darkModeBtn')
      darkBtn.addEventListener('click', e => {
          document.body.classList.toggle('dark')
            // const puck = document.createElement('img')
      // puck.id ="puck"
      // puck.src = "https://www.shutterstock.com/image-vector/closeup-illustration-detailed-hockey-puck-260nw-100191989.jpg"
      // darkId.appendChild(puck)
      })
}

// Form event listener.
function formFunction() {
      const form = document.querySelector('#form')
      form.addEventListener('submit', e => {
          const p = document.createElement('p')
          const a = document.createElement('a')
          const userInput = document.querySelector('#userInput').value
                a.setAttribute('href', userInput) 
                a.innerText = userInput
                p.append(a)
                form.append(p)
          e.preventDefault()
          form.reset()
     }
   )
}

function matchUp() {
      const teamDiv = document.createElement('div')
      teamDiv.setAttribute('class', 'theTeams')
      teamDiv.id = "teamDiv"
      teamDiv.innerText = "this is a test"
      form.append(teamDiv)
}