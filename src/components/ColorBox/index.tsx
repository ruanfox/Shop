import styles from "./ColorBox.module.scss"

interface ColorBoxProps {
    style?: React.CSSProperties;
    onClick?: () => void;
    classeName?: string;
}
export function ColorBox({ style, onClick, classeName }: ColorBoxProps) {
    return(

        <div 
            className={`${styles.color} ${classeName}`} style={style}
            onClick={onClick} 
            >
            
        </div>
    )
}