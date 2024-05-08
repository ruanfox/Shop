import styles from "./FilterProducts.module.scss"


import { Divisor } from "../Divider";

import grad from "./image/Frame.svg"
import { Button } from "../Button";
    
import FilterPrice from "../FilterPrice";
import { FilterClothing } from "../FilterClothing";
import { FilterColor } from "../FilterColor";
import { FilterSize } from "../FilterSize";
import { FilterStyle } from "../FilterStyle";
import { useContext } from "react";
import { TypeContext } from "../../context/TypeProvider";


export function FilterProducts() {
    const { applyFilter, setApplyFilter } = useContext(TypeContext);

    const handleChangeApplyFilter = (value: boolean) => {
        setApplyFilter(value)
    }

    console.log(applyFilter)

    return(
        <section className={styles.Filters}>
            <div className={styles.filters}>
                <h2>Filters</h2>
                <img src={grad} alt="" />
            </div>
            <Divisor />
            <div>
                <FilterClothing />
            </div>
            <Divisor />
            <div>
               <FilterPrice />
            </div>
            <Divisor />
            <div>
                <FilterColor />
            </div>
                <Divisor />
            <div>
                <FilterSize />
            </div>
                <Divisor />
            <div>
                <FilterStyle />
            </div>
            <Button 
                text="Apply Filter" 
                onClick={() => handleChangeApplyFilter(true)}
            />
        </section>
    )
}