import './App.scss';
import ContactUs from './components/ContactUS';



const pStyle = {color: 'black', fontSize: 25}

function App() {
  if(new Date().getDay() === 2) {
    pStyle.color = 'green'
  }


 return (
  <div className="App">
    <p style={{color:'red', fontSize: 20}}> This is a red colored p tag</p>
    <p style={pStyle}>This is a black colored ptag</p>
    <p className="AppPTAG">This is a p tag of color defined in app.scss</p>
    <hr/>

    <ContactUs/>
  </div>
 );
 }
export default App;