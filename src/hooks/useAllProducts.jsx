import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useAllProducts = () => {

    // using tanstack query 
    const { data: products = [],  refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            await new Promise(resolve => setTimeout(resolve, 1500));
            const { data } = await axios.get('https://ecommerce-server-sable-zeta.vercel.app/products');
            // console.log(data);
            return data;
        },
        staleTime: 1000 * 60 * 5, // Optional: Holds Cache data for 5 minutes
    });

    return [products,  refetch];
}

export default useAllProducts;