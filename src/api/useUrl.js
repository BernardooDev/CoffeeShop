import { useQuery } from "react-query";

const fecthLuana =  async () => {
    const response = await fetch("http://localhost:3003/luana")
    const data = await response.json()
    return data;
}

export const useLuana = () => {
   return useQuery("luana", fecthLuana)
}
