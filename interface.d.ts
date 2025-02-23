import { DefaultValues } from './node_modules/react-hook-form/dist/types/form.d';
import { ReactNode } from "react"
import { FieldValues } from 'react-hook-form';
import { ZodType } from "zod"


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

interface FormProps<T extends FieldValues> {
  type: FormType;  // Ensure FormType is properly defined
  header: string;
  subheader: string;
  schema: ZodType<T>;
  defaultValues: T; // Should be lowercase "d" to match JavaScript/TypeScript conventions
}

interface uploadKit {
  type: "image" | "video";
  onChange: (file: string) => void;
  accept: string;
  folder: string;
  id: string
}