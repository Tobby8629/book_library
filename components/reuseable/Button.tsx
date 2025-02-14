import { ReactNode } from "react"

interface button {
 text: string | ReactNode,
 action? : () => void
}

const Button = ({text, action}: button) => {
  return (
   <button className="w-full text-center rounded-lg text-dark-100 h-14 leading-[60px] bg-light-200" onClick={action}>
     {text}
   </button>
  )
}

export default Button
