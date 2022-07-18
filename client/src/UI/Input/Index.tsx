import {FC, useState} from 'react'
import cl from './Input.module.sass'
 
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    default?: boolean
}

const Input: FC<InputProps> = (props: InputProps) => {

    const [content, setContent] = useState<string | null>(null)
    const [type, setType] = useState<string>(props.type!)

    const preChange = (e: any) => {
        setContent(e.target.value)
        props.onChange?.(e)
    }
    
    return (
        <div className={`${cl.Input_container} ${props.default ? cl.Default : cl.Margin}`}>
            <div className={cl.Padding_inner}>
                <label className={`${cl.Label} ${content ? cl.Active : ""}`}>
                    <span className={cl.Span}>{props.placeholder}</span> 
                    <input 
                        onChange={preChange} 
                        className={cl.Input}
                        type={type}
                    />
                </label>
                <div className={cl.Spacer}>
                    {
                        props.type === 'password' && content
                            &&
                            <span>
                                <button className={cl.Spacer_viewer} type="button" onClick={() => setType(type === 'password' ? 'text' : 'password')}>
                                    {
                                        type === 'password'
                                            ?
                                            'Показать'
                                            :
                                            'Скрыть'
                                    }
                                </button>
                            </span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Input
