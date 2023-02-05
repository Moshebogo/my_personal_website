import React from 'react'
import ReactDom from 'react-dom'

function App() {
    return (
        <>
            <div>
                <h1>My personal website, using only React</h1>
            </div>
        </>
    )
}


ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)