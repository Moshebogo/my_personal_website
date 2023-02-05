// Initial fetch.
fetch("https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster")
.then(resp => resp.json())
.then(data => {
    renderPlayerDetails(data.teams)
    // console.log(data.teams)
})

// Render all 32 teams to DOM.
function renderPlayerDetails(data) {
for (const item of data) {
       const testDiv = document.querySelector('#testDiv')
       const h5 = document.createElement('h5')
             h5.className = "teamBorder"
             h5.innerText = item.name
             testDiv.appendChild(h5)
             // Embedded event listener for player names.
             h5.addEventListener('click', e => {
                                for (const upperSub of item.roster.roster) {
                                    const leftDiv = document.querySelector('#leftDiv')
                                    const nameH6 = document.createElement('h6')
                                    nameH6.innerText = upperSub.person.fullName
                                    nameH6.className ="playerBorder"
                                    leftDiv.appendChild(nameH6)


                                    const teamPoints = document.createElement('h5')
                                        //   teamPoints.innerText = "hello"
                                          h5.appendChild(teamPoints)
                                          

                                        // Embedded event listener for player stats.
                                        nameH6.addEventListener('click', e => {
                                            fetch(`https://statsapi.web.nhl.com${upperSub.person.link}/stats?stats=careerRegularSeason`)
                                            .then(resp => resp.json())
                                            .then(data => data.stats.forEach(element => {
                                                          element.splits.forEach(element => {
                                                    const nextRightDiv = document.querySelector('#nextRightdiv')
                                                    const playerGoals = element.stat.goals
                                                    const h6 = document.createElement('h6')
                                                          h6.innerText = playerGoals
                                                          nameH6.append(h6)
                                     })
                                  }))
                                                    const playerAssists = (data) => {
                                                        data.stats.forEach(element => {
                                                            element.splits.forEach(element => {
                                                        const nextRightDiv = document.querySelector('#nextRightdiv')
                                                        const playerGoals = element.stat.assists
                                                        const h6 = document.createElement('h6')
                                                            h6.innerText = playerGoals
                                                            nameH6.append(h6)   
                                                }
                                            )
                                        })
                                            
                 }
               })
             }
})}}

// Dark mode.
const darkBtn = document.querySelector('#darkModeBtn')
      darkBtn.addEventListener('click', e => {
          document.body.classList.toggle('dark')
        if (darkBtn.innerText === "DARK-MODE ON") {
            darkBtn.innerText = "DARK-MODE OFF"
        } else {
            darkBtn.innerText = "DARK-MODE ON"
        }
      })



      data.forEach(element => {
        
      })