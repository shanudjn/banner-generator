import React, { useState } from "react";
import '../styles/formComponent.css';

const initialFormValues = {
    name: "",
    firstSkill: "",
    secondSkill: "",
    thirdSkill: "",
    bgColor: ""
}

export default function FormComponent(props) {
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        //console.log(name, value)
        setFormValues({
            ...formValues,
            [name]: value
        })
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
        props.triggerFormSubmission(formValues)

    }
    return (
        <div className="form">
            <form onSubmit={handleFormSubmit}>
                {/* <label>
                        Name
                    </label> */}
                <label>Enter your information</label>

                <input type="text" name="name" placeholder='Name' onChange={handleChange} />
                <input type="text" name="firstSkill" placeholder='First Skill' onChange={handleChange} />
                <input type="text" name="secondSkill" placeholder='Second Skill' onChange={handleChange} />
                <input type="text" name="thirdSkill" placeholder='Third Skill' onChange={handleChange} />
                <label>Choose your favorite color</label>
                <input type="color" name="bgColor" onChange={handleChange} ></input>
                <button>Submit</button>
            </form>
        </div>
    )
}
