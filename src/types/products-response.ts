import { Product } from "./product"

export interface ProductsFetchResponse {
    data: {
        products: Product[]
    }
}