import './style.css'
import { TextFieldProps } from './TextFieldProps'

const InputField = ({placeholder , id , addClass}:TextFieldProps) =>   {
    return (
    <input type="text" placeholder={placeholder} className={addClass==null ? 'log-in-textfield' : 'log-in-textfield ' + addClass}></input>
)
}

export default InputField;
