import './App.css';
import NavBar from "./components/nav";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='form-and-board'>
        <FormComponent />
        <div className='drawingboard'>right</div>
      </div>
    </div>
  );
}

export default App;
