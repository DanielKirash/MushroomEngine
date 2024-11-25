import './style.css'
import { TextFieldProps } from './TextFieldProps'

const InputField = ({placeholder , id}:TextFieldProps) =>   {
    return (
    <input type="text" placeholder={placeholder} className='log-in-textfield'></input>
)
}

export default InputField;
