import { useContext } from "react";
import { FilterType } from "../types/filter-types";
import { TypeContext } from "../context/TypeProvider";
import { FilterClothing } from "../types/filter-clothing";
import { FilterColor } from "../types/filter-color";
import { FilterSize } from "../types/filter-size";

export function useGetCategoryByType() {
    const { type } = useContext(TypeContext);
    
    const getCategoryByType = () => {
        if (type === FilterType.casual) return "casual";
        if (type === FilterType.formal) return "formal";
        if (type === FilterType.party) return "party";
        if (type === FilterType.gym) return "gym";
        if (type === FilterType.none) return "none";
        
        return "";
    };

    return getCategoryByType();
}

export function useGetFilterClothing(){
    const { clothing } = useContext(TypeContext);

    const getFilterClothing = () => {
        if(clothing === FilterClothing.tshirts) return "T-shirt"
        if(clothing === FilterClothing.jeans) return "Jeans"
        if(clothing === FilterClothing.hoodie) return "Hoodie"
        if(clothing === FilterClothing.shirts) return "Shirt"
        if(clothing === FilterClothing.shorts) return "Shorts"
        if(clothing === FilterClothing.none) return "none"

        return""
    }

    return getFilterClothing
}

export function useGetPriceMin(){
    const { priceMin } = useContext(TypeContext)

    return priceMin
}

export function useGetPriceMax(){
    const { priceMax } = useContext(TypeContext)

    return priceMax
}

export function useGetFilterColor(){
    const { color } = useContext(TypeContext)
    
    const getFilterColor = ()=> {
        if(color === FilterColor.babyBlue) return "babyBlue"
        if(color === FilterColor.black) return "black"
        if(color === FilterColor.blue) return "blue"
        if(color === FilterColor.green) return "green"
        if(color === FilterColor.orange) return "orange"
        if(color === FilterColor.pink) return "pink"
        if(color === FilterColor.purple) return "purple"
        if(color === FilterColor.red) return "red"
        if(color === FilterColor.white) return "white"
        if(color === FilterColor.yellow) return "yellow"
        if(color === FilterColor.none) return "none"

        return ""
    }

    return getFilterColor
}

export function useGetFilterSize(){
    const { size } = useContext(TypeContext);
    
    const getFilterSize = () => {
        if(size === FilterSize.Large)  return "large"
        if(size === FilterSize.Medium)  return "medium"
        if(size === FilterSize.Small)  return "small"
        if(size === FilterSize["3X-Large"])  return "3x-large"
        if(size === FilterSize["4X-large"])  return "4x-large"
        if(size === FilterSize["X-Large"])  return "x-large"
        if(size === FilterSize["X-Small"])  return "x-small"
        if(size === FilterSize["XX-Large"])  return "xx-large"
        if(size === FilterSize["XX-Small"])  return "xx-xmall"
        if(size === FilterSize.none)  return "none"

        return ""
    }

    return getFilterSize
}

export function useGetApplyFilter(){
    const { applyFilter } = useContext(TypeContext);
    
    return applyFilter
}

export const MountQuery = () => {
    const type = useGetCategoryByType();
    //const color = useGetFilterColor()();
    //const size = useGetFilterSize()();
    //const clothing = useGetFilterClothing()();
    //const useApplyFilter = useGetApplyFilter();
    //const priceMin = useGetPriceMin();
    //const priceMax = useGetPriceMax();
    console.log()
   
    return`
    query {
        products(style: "${type}"){
        id
        name
        quality
        price
        image_url
        style
        size
        color
        quality
        }
    }
    `;
}