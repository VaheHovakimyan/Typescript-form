import { FormPropsData } from '../Form';
import './SendBtn.scss';


type InputsProps = {
    data: FormPropsData;
}


type errorProps = {
    error: {
        errorBool: boolean,
        setErrorBool: any,
        toInitalValue: any
    }
}

type toInitFunctionProps = {
    function: {
        init: any
    }
}


const SendBtn: React.FC<errorProps | InputsProps | toInitFunctionProps> = (props: any) => {

    // Initial values function
    let toInitalValueFunction = props.error.toInitalValue;
    

    // Error boolean value and boolean state's change function
    let errorBool = props.error.errorBool;
    let setErrorBool = props.error.setErrorBool;



    // Person info state
    let { id, name, surname, age } = props.data;



    const errorBoolCheck = () => {
        if (name !== "" && surname !== "" && age < 100 && age > 0 && age !== "") {
            toInitalValueFunction();
            return setErrorBool(false);
        }
        return setErrorBool(true);
    }

    console.log(props.error.errorBool);


    return (
        <div className="send_btn_div">

            <button
                className="send_btn"
                onClick={errorBoolCheck}
            >Send</button>

        </div>
    )
}


export default SendBtn;