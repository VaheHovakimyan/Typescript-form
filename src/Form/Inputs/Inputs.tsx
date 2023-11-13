import React from 'react';
import { FormPropsData, FormPropsFunctions } from '../Form';
import './Inputs.scss';




type InputsProps = {
    data: FormPropsData;
}


type InputsFunctions = {
    functions: FormPropsFunctions;
}



const Inputs: React.FC<InputsProps | InputsFunctions> = (props: any) => {


    // Person info
    let data = props.data;

    // Person info destructurization
    let { id, name, surname, age } = data;


    // Functions
    let functions = props.functions;

    // Functions destructurization
    let { setId, setName, setSurname, setAge } = functions;



    const handelInputChange = (setState: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value);
    }



    return (
        <div className="form_inputs_div">

            <input type="text"
                placeholder="Your ID"
                className="form_input"
                onChange={handelInputChange(setId)}
                value={id}
            />

            <input type="text"
                placeholder="Name"
                className="form_input"
                onChange={handelInputChange(setName)}
                value={name}
            />

            <input type="text"
                placeholder="Surname"
                className="form_input"
                onChange={handelInputChange(setSurname)}
                value={surname}
            />

            <input type="text"
                placeholder="Age"
                className="form_input"
                onChange={handelInputChange(setAge)}
                value={age}
            />

        </div>
    )
}


export default Inputs;