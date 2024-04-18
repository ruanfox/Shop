import  { ReactNode, createContext, useState } from "react";
import { useFilter } from "../hooks/useFilter";
import { FilterType } from "../types/filter-types";

interface TypeContextType {
  type: FilterType;
  setType: (value: FilterType) => void;
}

export const TypeContext = createContext<TypeContextType>({
  type: FilterType.casual,
  setType: () => {},
});


export const TypeProvider = ({ children }: { children: ReactNode }) => {
  const { type: filterType, setType: setFilterType } = useFilter(); // Renomeando para evitar confusão
  const [type, setType] = useState(filterType); // Usando useState para manter o estado

  const updateType = (newType: FilterType) => {
    setType(newType);
    setFilterType(newType); 
  };

  return (
    <TypeContext.Provider value={{ type, setType:updateType }}>
      {children}
    </TypeContext.Provider>
  );
};
