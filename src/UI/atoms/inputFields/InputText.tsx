import './style.css'
import { TextFieldProps } from './TextFieldProps'

const InputField = ({placeholder , id , addClass, onChange}:TextFieldProps) =>   {
    return (
    <input type="text" placeholder={placeholder} className={addClass==null ? 'log-in-textfield' : 'log-in-textfield ' + addClass} onChange={onChange}></input>
)
}

export default InputField;
