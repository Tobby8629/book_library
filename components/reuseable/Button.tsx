import { ReactNode } from "react"

interface button {
 text: string | ReactNode,
 action? : () => void,
 className?: string
 type?: "button" | "submit" | "reset"
}

const Button = ({text,type, action, className}: button) => {
  return (
   <button type={type} className={`w-full text-center rounded-lg text-dark-100 h-14 leading-[60px] bg-light-200 ${className}`} onClick={action}>
     {text}
   </button>
  )
}

export default Button
