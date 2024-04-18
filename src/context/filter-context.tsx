/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useState } from "react";
import { FilterType } from "../types/filter-types";


export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.casual,
    setSearch: (_value: string) => {},
    setPage: (_value: number) => {},
    setType: (_value: FilterType) => {},

})

interface ProviderProps {
    children: ReactNode
}


export function FilterContextProvider({children}: ProviderProps){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.casual)

    return (
        <FilterContext.Provider value={{
            search,
            page,
            type,
            setSearch,
            setPage,
            setType
            }}>

            {children}
        </FilterContext.Provider>
    )
}