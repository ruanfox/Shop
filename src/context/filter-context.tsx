/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useState } from "react";
import { FilterType } from "../types/filter-types";
import { FilterClothing } from "../types/filter-clothing";
import { FilterColor } from '../types/filter-color';
import { FilterSize } from "../types/filter-size";


export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.casual,
    clothing: FilterClothing.none,
    priceMin: 0,
    priceMax: 0,
    color: FilterColor.none,
    size: FilterSize.none,
    applyFilter: false,
    id: 0,
    setId: (_value: number) => {},
    setSearch: (_value: string) => {},
    setPage: (_value: number) => {},
    setType: (_value: FilterType) => {},
    setPriceMin: (_value: number) => {},
    setPriceMax: (_value: number) => {},
    setClothing: (_value: FilterClothing) => {},
    setColor: (_value: FilterColor) => {},
    setSize: (_value: FilterSize) => {},
    setApplyFilter:(_value: boolean) => {}
})

interface ProviderProps {
    children: ReactNode
}


export function FilterContextProvider({children}: ProviderProps){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.casual)
    const [priceMin, setPriceMin] = useState(0)
    const [priceMax, setPriceMax] = useState(0)
    const [clothing, setClothing] = useState(FilterClothing.none)
    const [color, setColor ] = useState(FilterColor.none)
    const [size, setSize ] = useState(FilterSize.none)
    const [applyFilter, setApplyFilter] = useState(false)
    const [id, setId] = useState(0)

    return (
        <FilterContext.Provider value={{
            search,
            page,
            type,
            clothing,
            priceMin,
            priceMax,
            color,
            size,
            applyFilter,
            id,
            setId,
            setSearch,
            setPage,
            setType,
            setClothing,
            setPriceMax,
            setPriceMin,
            setColor,
            setSize,
            setApplyFilter
            }}>

            {children}
        </FilterContext.Provider>
    )
}