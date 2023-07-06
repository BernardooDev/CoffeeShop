import { useQuery } from "react-query";

const fecthComments =  async () => {
    const response = await fetch("http://localhost:3003/comments")
    const data = await response.json()
    return data;
}

const useComments = () => {
   return useQuery("comments", fecthComments)
}

export default useComments;