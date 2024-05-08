import styles from  "./Button.module.scss";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string; 
}

export function Button({ text, onClick, className }: ButtonProps) {
    return (
        <button 
            className={`${styles.button} ${className}`} 
            onClick={onClick}
        >{text}
        </button>
    );
}
