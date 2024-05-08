import { MdKeyboardArrowUp } from 'react-icons/md';
import styles from './Filtercolor.module.scss';
import { useContext, useState } from 'react';
import { TypeContext } from '../../context/TypeProvider';
import { FilterColor as FilterColorType } from '../../types/filter-color';

export function FilterColor() {
    const {setColor } = useContext(TypeContext);
    const [selectedColor, setSelectedColor] = useState<FilterColorType | null>();

    const handleChangeColor = (value: FilterColorType) => {
        setColor(value);
        setSelectedColor(value);
    };

    return (
        <div className={styles.colors}>
            <div className={styles.title}>
                <h2>Colors</h2>
                <MdKeyboardArrowUp />
            </div>
            <ul className={styles.colors1}>
                <li
                    className={`${styles.green} ${selectedColor === FilterColorType.green ? styles.selected : ''}`}
                    onClick={() => handleChangeColor(FilterColorType.green)}
                ></li>
                <li
                    className={`${styles.red} ${selectedColor === FilterColorType.red ? styles.selected : ''}`}
                    onClick={() => handleChangeColor(FilterColorType.red)}
                ></li>
                <li
                    className={`${styles.yellow} ${selectedColor === FilterColorType.yellow ? styles.selected : ''}`}
                    onClick={() => handleChangeColor(FilterColorType.yellow)}
                ></li>
                <li
                    className={`${styles.orange} ${selectedColor === FilterColorType.orange ? styles.selected : ''}`}
                    onClick={() => handleChangeColor(FilterColorType.orange)}
                ></li>
                <li
                    className={`${styles.babyBlue} ${selectedColor === FilterColorType.babyBlue ? styles.selected : ''}`}
                    onClick={() => handleChangeColor(FilterColorType.babyBlue)}
                ></li>
            </ul>
            <ul className={styles.colors2}>
                <li
                    className={`${styles.blue} ${selectedColor === FilterColorType.blue ? styles.selected : ''}`}
                    onClick={() => handleChangeColor(FilterColorType.blue)}
                ></li>
                <li
                    className={`${styles.purple} ${selectedColor === FilterColorType.purple ? styles.selected : ''}`}
                    onClick={() => handleChangeColor(FilterColorType.purple)}
                ></li>
                <li
                    className={`${styles.pink} ${selectedColor === FilterColorType.pink ? styles.selected : ''}`}
                    onClick={() => handleChangeColor(FilterColorType.pink)}
                ></li>
                <li
                    className={`${styles.white} ${selectedColor === FilterColorType.white ? styles.selectedWhite : ''}`}
                    onClick={() => handleChangeColor(FilterColorType.white)}
                ></li>
                <li
                    className={`${styles.black} ${selectedColor === FilterColorType.black ? styles.selected : ''}`}
                    onClick={() => handleChangeColor(FilterColorType.black)}
                ></li>
            </ul>
        </div>
    );
}
