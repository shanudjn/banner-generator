import { useState } from 'react';
import './App.css';
import NavBar from "./components/nav";
import FormComponent from "./components/FormComponent";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    firstSkill: '',
    secondSkill: '',
    thirdSkill: '',
    bgColor: ''
  })

  function handleSubmit() {
    console.log('hello')
    setFormData({

    })
  }

  return (
    <div className="App">
      <NavBar />
      <div className='form-and-board'>
        <FormComponent triggerFormSubmission={handleSubmit} />
        <div className='drawingboard'>right</div>
      </div>
    </div>
  );
}

export default App;
