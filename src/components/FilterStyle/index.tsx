import { MdKeyboardArrowUp, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import styles from './FilterStyle.module.scss'
import { useContext, useState } from 'react'
import { TypeContext } from '../../context/TypeProvider'
import { FilterType } from '../../types/filter-types'

export function FilterStyle(){
    const {type, setType} = useContext(TypeContext)
    const [selectedSize, setSelectedSize] = useState<FilterType | null>(null);

    const handleChangeType = (value: FilterType) =>{
        setType(value)
        setSelectedSize(value)
    }

    console.log(type)
    return(
        <div className={styles.dressStyle}>
                <div className={styles.title}>
                    <h2>Dress Style</h2>
                    <MdKeyboardArrowUp />
                </div>
                <ul className={styles.styleList}>
                    <li>
                        <p
                            onClick={() => handleChangeType(FilterType.casual)}
                            className={selectedSize === FilterType.casual ? styles.selected : ''}
                        >Casual
                        </p>
                        <MdOutlineKeyboardArrowRight 
                            className={selectedSize === FilterType.casual  ? styles.rotated + ' ' + styles.selected : ''}
                        />
                    </li>
                    <li>
                        <p
                            onClick={() => handleChangeType(FilterType.formal)}
                            className={selectedSize === FilterType.formal ? styles.selected : ''}
                        >Formal
                        </p>
                        <MdOutlineKeyboardArrowRight 
                            className={selectedSize === FilterType.formal  ? styles.rotated + ' ' + styles.selected : ''}
                        />
                    </li>
                    <li>
                        <p
                            onClick={() => handleChangeType(FilterType.party)}
                            className={selectedSize === FilterType.party ? styles.selected : ''}
                        >Party
                        </p>
                        <MdOutlineKeyboardArrowRight 
                            className={selectedSize === FilterType.party  ? styles.rotated + ' ' + styles.selected : ''}
                        />
                    </li>
                    <li>
                        <p
                            onClick={() => handleChangeType(FilterType.gym)}
                            className={selectedSize === FilterType.gym ? styles.selected : ''}
                        >Gym
                        </p>
                        <MdOutlineKeyboardArrowRight 
                            className={selectedSize === FilterType.gym  ? styles.rotated + ' ' + styles.selected : ''}
                        />
                    </li>
                </ul>
            </div>
    )
}