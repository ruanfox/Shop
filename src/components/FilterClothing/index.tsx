import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import styles from './FilterClothing.module.scss'
import { TypeContext } from '../../context/TypeProvider'
import { useContext, useState } from 'react'
import { FilterClothing as FilterClothingType } from '../../types/filter-clothing'

export function FilterClothing() {
    const { clothing, setClothing } = useContext(TypeContext);
    const [selectedClothing, setSelectedClothing] = useState<FilterClothingType | null>(null); 
    const [previousClothing, setPreviousClothing] = useState<FilterClothingType | null>(null); 

    const handleChangeClothing = (value: FilterClothingType) => { 
        if (value === previousClothing) {
            setSelectedClothing(null);
            setClothing(0);
        } else {
            setSelectedClothing(value);
            setClothing(value);
        }
        setPreviousClothing(value);
    }
    
    console.log(clothing)
    return (
        <ul className={styles.clothing}>
            <li>
                <p
                    className={selectedClothing === FilterClothingType.tshirts ? styles.selected : ''}
                    onClick={() => handleChangeClothing(FilterClothingType.tshirts)}
                >
                    T-shirts
                </p>
                <MdOutlineKeyboardArrowRight 
                    className={selectedClothing === FilterClothingType.tshirts ? styles.rotated + ' ' + styles.selected : ''} 
                />
            </li>
            <li>
                <p
                    className={selectedClothing === FilterClothingType.shorts ? styles.selected : ''}
                    onClick={() => handleChangeClothing(FilterClothingType.shorts)}
                >
                    Shorts
                </p>
                <MdOutlineKeyboardArrowRight 
                    className={selectedClothing === FilterClothingType.shorts ? styles.rotated + ' ' + styles.selected : ''} 
                />
            </li>
            <li>
                <p
                    className={selectedClothing === FilterClothingType.shirts ? styles.selected : ''}
                    onClick={() => handleChangeClothing(FilterClothingType.shirts)}
                >
                    Shirts
                </p>
                <MdOutlineKeyboardArrowRight 
                    className={selectedClothing === FilterClothingType.shirts ? styles.rotated + ' ' + styles.selected : ''}
                />
            </li>
            <li >
                <p
                    className={selectedClothing === FilterClothingType.hoodie ? styles.selected : ''}
                    onClick={() => handleChangeClothing(FilterClothingType.hoodie)}
                >
                    Hoodie
                </p>
                <MdOutlineKeyboardArrowRight 
                    className={selectedClothing === FilterClothingType.hoodie ? styles.rotated + ' ' + styles.selected : ''} 
                />
            </li>
            <li>
                <p
                    className={selectedClothing === FilterClothingType.jeans ? styles.selected : ''}
                    onClick={() => handleChangeClothing(FilterClothingType.jeans)}
                >
                    Jeans
                </p>
                <MdOutlineKeyboardArrowRight 
                    className={selectedClothing === FilterClothingType.jeans ? styles.rotated + ' ' + styles.selected : ''} 
                />
            </li>
     </ul>
        
    );
}