import axios from 'axios';
import { QueryClient } from 'react-query';

const BASE_URL =  process.env.REACT_APP_BASE_URL|| "https://backend.getlinked.ai/"

interface QueryKeyType {
    queryKey: any;
}

const defaultQueryFn = async ({ queryKey }: QueryKeyType) => {
    const { data } = await axios.get(`${BASE_URL}${queryKey[0]}`);
    return data;
};

export const queryClient = new QueryClient({
    defaultOptions: {
    queries: {
        queryFn: defaultQueryFn,
    },
    },
});

export const apiMutate = async (url: string, postData: any, headers?: any, method?: 'put' | 'delete' | 'patch') => await axios({
    url: `${BASE_URL}${url}`,
    data: postData,
    headers,
    method: method || 'post',
}).then((response) => {
    return response;
});