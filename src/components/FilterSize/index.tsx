import { MdKeyboardArrowUp } from 'react-icons/md'
import styles from './FilterSize.module.scss'
import { Button } from '../Button'
import { useContext, useState } from 'react'
import { TypeContext } from '../../context/TypeProvider'
import { FilterSize as FilterSizeType } from '../../types/filter-size'
FilterSize
export function FilterSize(){
    const { setSize } = useContext(TypeContext)
    const [ selected , setSelected] = useState<FilterSizeType | null>()

    const handleChangeFilterSize = (value: FilterSizeType) => {
        setSize(value)
        setSelected(value)
    }

    return(
        <div className={styles.size}>
                <div className={styles.title}>
                    <h2>Size</h2>
                    <MdKeyboardArrowUp />
                </div>

                <Button 
                    text="XX-Small" 
                    onClick={() => handleChangeFilterSize(FilterSizeType['XX-Small'])}
                    className={selected === FilterSizeType['XX-Small'] ? styles.selected : ''}
                />
                <Button 
                    text="X-Small" 
                    onClick={() => handleChangeFilterSize(FilterSizeType['X-Small'])}
                    className={selected === FilterSizeType['X-Small'] ? styles.selected : ''}
                />
                <Button 
                    text="Small" 
                    onClick={() => handleChangeFilterSize(FilterSizeType.Small)}
                    className={selected === FilterSizeType.Small ? styles.selected : ''}
                />
                <Button 
                    text="Medium" 
                    onClick={() => handleChangeFilterSize(FilterSizeType.Medium)}
                    className={selected === FilterSizeType.Medium ? styles.selected : ''}
                />
                <Button 
                    text="Large" 
                    onClick={() => handleChangeFilterSize(FilterSizeType.Large)}
                    className={selected === FilterSizeType.Large ? styles.selected : ''}
                />
                <Button 
                    text="X-Large" 
                    onClick={() => handleChangeFilterSize(FilterSizeType['X-Large'])}
                    className={selected === FilterSizeType['X-Large'] ? styles.selected : ''}
                />
                <Button 
                    text="XX-Large" 
                    onClick={() => handleChangeFilterSize(FilterSizeType['XX-Large'])}
                    className={selected === FilterSizeType['XX-Large'] ? styles.selected : ''}
                />
                <Button 
                    text="3X-Large"  
                    onClick={() => handleChangeFilterSize(FilterSizeType['3X-Large'])}
                    className={selected === FilterSizeType['3X-Large'] ? styles.selected : ''}
                />
                <Button 
                    text="4X-large" 
                    onClick={() => handleChangeFilterSize(FilterSizeType['4X-large'])}
                    className={selected === FilterSizeType['4X-large'] ? styles.selected : ''}
                />

            </div>
    )
}