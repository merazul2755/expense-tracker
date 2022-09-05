import axios from "../../utils/axios";

export const getTransactions = async () => {
    
    const response = await axios.get('/transactions');

    return response.data;
};

export const searchTransactions = async (type,search,start,limit) => {
    let queryString = '';
    if (type !== ''){
        queryString += `q=${type}`
    }
    if (search !== ''){
        queryString += `q=${search}`
    }
    const response = await axios.get(`/transactions/?${queryString}&_start=${start}&_limit=${limit}`);

    return response.data;
};




export const addTransaction = async (data) => {
    const response = await axios.post("/transactions", data);

    return response.data;
};

export const editTransaction = async (id, data) => {
    const response = await axios.put(`/transactions/${id}`, data);

    return response.data;
};

export const deleteTransaction = async (id) => {
    const response = axios.delete(`/transactions/${id}`);

    return response.data;
};
