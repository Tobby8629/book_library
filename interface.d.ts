import { ReactNode } from "react"

interface bookObject {
    id: number,
    title:string,
    author: string,
    genre: string,
    rating: number,
    total_copies: number,
    available_copies: number,
    description:string,
    color:string,
    cover:string,
    video: string,
    summary:string 
}

interface authLayout {
  children: ReactNode
}


type formType = "signup" | "signin"

interface formProps {
  type: formType
  header: string
  subheader: string
}