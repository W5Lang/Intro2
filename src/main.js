import './style.css'
import javascriptLogo from './5paedy.svg'
import { setupCounter, setupDogButton } from './JavaScript.js'

document.querySelector('#app').innerHTML = `
  <div>

    <a href="https://wawokee.gumroad.com" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Welcome Ladies N' Gents</h1>
    <p class="read-the-docs">
      This is how my website looks like, pretty cool aye?
    </p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
        <div class="card">
      <button id="second-counter" type="button">Second Button</button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
setupDogButton(document.querySelector('#second-counter'))