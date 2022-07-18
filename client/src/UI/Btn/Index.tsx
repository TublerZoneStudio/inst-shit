import { FC, ReactNode } from "react"
import cl from './Btn.module.sass'

interface BtnProps extends React.InputHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
}

const Btn: FC<BtnProps> = (props: BtnProps) => {
    return (
        <button disabled={props.disabled} className={cl.Btn} onClick={props.onClick}>{props.children}</button>
    )
}

export default Btn
