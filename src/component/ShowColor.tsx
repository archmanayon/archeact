import { ReactNode } from "react"

interface Props{
    children:ReactNode
}

const ShowColor = ({children}:Props) => {
  return (
    <>{children}</>
  )
}

export default ShowColor