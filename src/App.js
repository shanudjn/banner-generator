import { useState } from 'react';
import './App.css';
import NavBar from "./components/nav";
import FormComponent from "./components/FormComponent";
import BannerComponent from "./components/BannerComponent"

function App() {


  function handleSubmit(formValues) {
    console.log(formValues);
  }

  return (
    <div className="App">
      <NavBar />
      <div className='form-and-board'>
        <FormComponent triggerFormSubmission={handleSubmit} />
        <BannerComponent />
        {/* <div className='drawingboard'>right</div> */}
      </div>
    </div>
  );
}

export default App;
