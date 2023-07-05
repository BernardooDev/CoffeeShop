import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('http://localhost:3003/coffee')
  const data = await response.json();
  return data;
};

const usePosts = () => {
  return useQuery('coffee', fetchPosts);
};





export default usePosts; 