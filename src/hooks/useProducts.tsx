import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise} from "axios";
import { ProductsFetchResponse } from "../types/products-response";
import { useFilter } from "./useFilter";
import { useContext, useDeferredValue } from "react";
import { MountQuery} from "../utils/graphql-filter";
import { TypeContext } from "../context/TypeProvider";

//const API_URL = process.env.PUBLIC_API_URL as string
const API_URL = 'http://localhost:4000/graphql';

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL,{ query })
}


export function useProducts(){
    const { search } = useFilter()

    const {type} = useContext(TypeContext);

    const searchDEferred = useDeferredValue(search)


    const query = MountQuery()

    const {data} = useQuery({
        queryFn:() => fetcher(query),
        queryKey: ['products', type]
    })

    const products =  data?.data?.data?.products

    const filterProducts = products?.filter(product => product.name.toLowerCase().includes(searchDEferred.toLowerCase()))
    
    return{
        data: filterProducts
    }
}