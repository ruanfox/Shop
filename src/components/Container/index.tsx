import { ReactNode } from "react"

import styles from "./Container.module.scss"

interface ContainerProps{
    children: ReactNode;
}

export function Container({children}: ContainerProps){
    return(
        <section className={styles.Container}> 
            {children}
        </section>
    )
}