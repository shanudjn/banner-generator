import React, { Component } from "react";
import '../styles/formComponent.css';

class FormComponent extends Component {
    render() {
        return (
            <div className="form">
                <form>
                    {/* <label>
                        Name
                    </label> */}
                    <label>Enter your information</label>

                    <input type="text" name="name" placeholder='Name' />
                    <input type="text" name="name" placeholder='First Skill' />
                    <input type="text" name="name" placeholder='Second Skill' />
                    <input type="text" name="name" placeholder='Third Skill' />
                    <label>Choose your favorite color</label>
                    <input type="color" id="favcolor" name="favcolor" value="#ff0000"></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default FormComponent;