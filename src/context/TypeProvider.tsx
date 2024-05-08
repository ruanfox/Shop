import  { ReactNode, createContext, useState, useEffect } from "react";
import { useFilter } from "../hooks/useFilter";
import { FilterType } from "../types/filter-types";
import { FilterClothing } from "../types/filter-clothing";
import { FilterColor } from "../types/filter-color";
import { FilterSize } from "../types/filter-size";


interface Item {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
  idCart: number;
}

interface TypeContextType {
  type: FilterType;
  clothing: FilterClothing;
  priceMin: number,
  priceMax:number,
  color: FilterColor;
  size: FilterSize;
  applyFilter: boolean;
  id:number,
  items: Item[];
  productCart: number,
  amount: number,
  setAmount: (value: number) => void,
  setProductCart: (product: number) => void;
  add: (item: Item) => void;
  updateQuantity: (itemIdCart: number, newQuantity: number) => void;
  remove: (itemId: number) => void;
  setItems: (value: Item[]) => void;
  setId: (value: number) => void;
  setType: (value: FilterType) => void;
  setClothing: (value: FilterClothing) => void;
  setPriceMin: (value: number) => void,
  setPriceMax: (value: number) => void,
  setColor: (value: FilterColor) => void;
  setSize: (value: FilterSize) => void;
  setApplyFilter: (value: boolean) => void
}

export const TypeContext = createContext<TypeContextType>({
  type: FilterType.none,
  clothing: FilterClothing.none,
  priceMin: 0,
  priceMax: 0,
  color: FilterColor.none,
  size: FilterSize.none,
  applyFilter: false,
  id: 0,
  items: [],
  productCart: 0,
  amount: 0,
  setAmount: () => {},
  setProductCart: () => {},
  add: () => {},
  updateQuantity: () => {},
  remove: () => {},
  setItems: () => {},
  setId: () => {},
  setType: () => {},
  setClothing: () => {},
  setPriceMin: () => {},
  setPriceMax: () => {},
  setColor: () => {},
  setSize: () => {},
  setApplyFilter: () => {}
});

export const TypeProvider = ({ children }: { children: ReactNode }) => {
  const { 
    clothing: initialClothing, setClothing: setFilterClothing,
    priceMin: initialPriceMin, setPriceMin: setFilterPriceMin,
    priceMax: initialPriceMax, setPriceMax: setFilterPriceMax,
    color: initiialColor, setColor: setFilterColor,
    size: initialSize, setSize: setFilterSize,
    type: initialType, setType: setFilterType,
    applyFilter: initialApplyFilter, setApplyFilter: setApplyFFilter,
    id: initialId, setId: setIdFilter
  } = useFilter();

  const [type, setType] = useState<FilterType>(initialType);
  const [clothing, setClothing] = useState<FilterClothing>(initialClothing);
  const [priceMin, setPriceMin] = useState<number>(initialPriceMin);
  const [priceMax, setPriceMax] = useState<number>(initialPriceMax);
  const [color, setColor ] = useState<FilterColor>(initiialColor);
  const [size, setSize ] = useState<FilterSize>(initialSize);
  const [ applyFilter, setApplyFilter ] = useState<boolean>(initialApplyFilter);
  const [ id, setId] = useState<number>(0)
  const [items, setItems] = useState<Item[]>([]);
  const [ productCart, setProductCart ] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0)

  useEffect(() => {
    setType(initialType);
    setClothing(initialClothing);
    setPriceMin(initialPriceMin);
    setPriceMax(initialPriceMax);
    setColor(initiialColor);
    setSize(initialSize);
    setApplyFilter(initialApplyFilter);
    setId(initialId);
  }, [initialType, initialClothing, initialPriceMin, initialPriceMax, initiialColor, initialSize, initialApplyFilter, initialId]);

  const updateType = (newType: FilterType) => {
    setType(newType);
    setFilterType(newType);
  };

  const updateClothing = (newClothing: FilterClothing) => {
    setClothing(newClothing);
    setFilterClothing(newClothing);
    
  }

  const updatePriceMin = (newPriceMin: number) => {
    setPriceMin(newPriceMin);
    setFilterPriceMin(newPriceMin);
  };

  const updatePriceMax = (newPriceMax: number) => {
    setPriceMax(newPriceMax);
    setFilterPriceMax(newPriceMax);
  };

  const updateColor = (newColor: FilterColor) =>{
    setColor(newColor);
    setFilterColor(newColor)
  }

  const updateSize = (newSize: FilterSize) => {
    setSize(newSize);
    setFilterSize(newSize)
  }
  
  const updateApplyFilter = (newApplyFilter: boolean) => {
    setApplyFilter(newApplyFilter);
    setApplyFFilter(newApplyFilter);
  }
    
  const updateId = (newId: number) =>{
    setId(newId)
    setIdFilter(newId)
  }

  const addItem = (item: Item) => {
    setItems(prevItems => [...prevItems, item]);
  };

  const removeItem = (itemIdCart: number) => {
    setItems(prevItems => prevItems.filter(item => item.idCart !== itemIdCart));
  };

  const updateAmount = (newAmount: number) =>{
    setAmount(newAmount)
  }

  const updateItemQuantity = (itemIdCart: number, newQuantity: number) => {
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.idCart === itemIdCart) {
          return {...item, quantity: newQuantity};
        }
        return item;
      });
    });
  };

  const updateProductCart = (newProductCart: number) => {
    setProductCart(newProductCart)
  }

  return (
    <TypeContext.Provider value={{ 
      type, setType: updateType, 
      clothing, setClothing: updateClothing,
      priceMin, setPriceMin: updatePriceMin,
      priceMax, setPriceMax: updatePriceMax,
      color, setColor: updateColor, 
      size, setSize: updateSize,
      applyFilter, setApplyFilter: updateApplyFilter,
      id, setId: updateId,
      items,
      productCart, setProductCart: updateProductCart,
      setItems,
      add: addItem,
      remove: removeItem,
      updateQuantity: updateItemQuantity,
      amount, setAmount: updateAmount
      }}>
      {children}
    </TypeContext.Provider>
  );
};
