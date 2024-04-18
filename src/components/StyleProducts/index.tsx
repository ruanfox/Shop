import { useNavigate } from "react-router-dom";
import { FilterType } from "../../types/filter-types";
import styles from "./StyleProducts.module.scss"
import { TypeContext } from "../../context/TypeProvider";
import { useContext } from "react";


export function StyleProducts(){
    const {setType } = useContext(TypeContext);
    
    const navigate = useNavigate();
    
    const handleChangeType = (value: FilterType) => {
        setType(value);
        
        navigate('../../Pages/CategoryPage')
    }

    return(
        <section className={styles.style}>
        <h1>BROWSE BY DRESS STYLE</h1>
        <div className={styles.part1}>
            <div 
                className={styles.casual}
                onClick={() => handleChangeType(FilterType.casual)}
                >
                <h2>Casual</h2>
            </div>
            <div 
                className={styles.formal}
                onClick={() => handleChangeType(FilterType.formal)}
                >
                <h2>Formal</h2>
            </div>
        </div>
        <div className={styles.part2}>
            <div 
                className={styles.party}
                onClick={() => handleChangeType(FilterType.party)}
                >
                <h2>Party</h2>
            </div>
            <div 
                className={styles.gym}
                onClick={() => handleChangeType(FilterType.gym)}
                >
                <h2>Gym</h2>
            </div>
        </div>
    </section>
    )
}