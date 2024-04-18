import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductsFetchResponse } from "../types/products-response";

//const API_URL = process.env.PUBLIC_API_URL as string
const API_URL = 'http://localhost:4000/graphql';

const fetcher = (): Promise<ProductsFetchResponse> => {
    return axios({
        url: API_URL,
        method: 'POST',
        data: {
            query: `
                query {
                    products {
                        name
                        quality
                        price
                        image_url
                    }
                }
            `
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data);
}

export function useProducts(){
    const {data} = useQuery({
        queryFn: fetcher,
        queryKey: ['products']
    })

    return{
        data: data?.data?.products
    }
}