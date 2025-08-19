import { ReactNode } from "react";


export default function ({children}:{
    children:ReactNode
}){
    return(
        <div>
            <header>header</header>
            <div>{children}</div>
            <footer>footer</footer>
        </div>
    )
}