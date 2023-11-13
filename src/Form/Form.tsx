import React, { useState } from 'react';
import Inputs from './Inputs/Inputs';
import SendBtn from './SendBtn/SendBtn';
import './Form.scss';
import Error from './Error/Error';


export interface FormPropsData {
    id: number | string,
    name: string,
    surname: string,
    age: number | string,
}


export interface FormPropsFunctions {
    setId: any,
    setName: any,
    setSurname: any,
    setAge: any
}



const Form: React.FC = () => {

    const [id, setId] = useState<number | string>("");
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [age, setAge] = useState<number | string>("");



    const [errorBool, setErrorBool] = useState<boolean>(false);


    const data = {
        id: id,
        name: name,
        surname: surname,
        age: age,
    };

    const functions = {
        setId: setId,
        setName: setName,
        setSurname: setSurname,
        setAge: setAge
    }

    const toInitalValue = () => {
        setId("");
        setName("");
        setSurname("");
        setAge("");
    }

    const errorProps = {
        errorBool: errorBool,
        setErrorBool: setErrorBool,
        toInitalValue: toInitalValue
    }




    return (
        <div className='form'>

            <Inputs
                data={data}
                functions={functions}
            />

            <SendBtn
                data={data}
                error={errorProps}
            />

            <div className='form_error'>
                {errorBool && <Error />}
            </div>

        </div>
    );
}

export default Form;