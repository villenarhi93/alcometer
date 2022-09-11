import {useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [alcohol, setAlcohol] = useState(0);
  
  const calculate = (e) => {
    e.preventDefault()
    const litres = bottles * 0.33
    const  grams = litres * 8 * 4.5
    const burning = weight / 10
    const left = grams - (burning * time)

    let result = 0;

    if(document.getElementById('gender_Male').checked) {
       result = left / (weight * 0.7)
    }else if(document.getElementById('gender_Female').checked) {
       result = left / (weight * 0.6)
    }

    if (result < 0) {
      result = 0;
    }

    setAlcohol(result)
  }


  return (
    <div>
      <h3>Calculating alchol blood level</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
          <input type="number" value={weight} min="0" onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles</label>
          <input type="number" value={bottles} min="0" max="99" onChange={e => setBottles(e.target.value)}/>
        </div>
        <div>
          <label>Time</label>
          <input type="number" value={time} min="0" max="99" onChange={e => setTime(e.target.value)}/>
        </div>
        <div>
          <span>Gender</span>
          <input type="radio" name="gender" id="gender_Male" value="Male" />
          <label>Male</label>
          <input type="radio" name="gender" id="gender_Female" value="Female" />
          <label>Women</label>
        </div>
        <div>
          <output>{alcohol.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;

