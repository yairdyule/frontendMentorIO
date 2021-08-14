import './css/App.css';
import Hero from './images/illustration-hero.svg'
import Music from './images/icon-music.svg'

function App() {
  return (
    <div className="card">

      <img class="hero" src={Hero} alt="" />
      <h1>Order Summary</h1>
      <p id="pitch">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

      <div className="container">
        <img src={Music} alt="" />
        <div className="column">
          <h4>Annual Plan</h4>
          <p>$59.99/year</p>
        </div>
        <button id="change">Change</button>
      </div>

      <div className="buttons">
        <button>Proceed to Payment</button>
        <button>Cancel Order</button>
      </div>


    </div>
  );
}

export default App;
