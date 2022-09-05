import { createAsyncThunk, createSlice,  } from "@reduxjs/toolkit";
import {
    addTransaction,
    deleteTransaction,
    editTransaction,
    getTransactions,
    searchTransactions
} from "./transactionAPI";

const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: "",
    editing: {},
    search: '',
    type:'',
};

// async thunks
export const fetchTransactions = createAsyncThunk(
    "transaction/fetchTransactions",
    async () => {
        const transactions = await getTransactions();
        return transactions;
    }
);

export const createTransaction = createAsyncThunk(
    "transaction/createTransaction",
    async (data) => {
        const transaction = await addTransaction(data);
        return transaction;
    }
);

export const changeTransaction = createAsyncThunk(
    "transaction/changeTransaction",
    async ({ id, data }) => {
        const transaction = await editTransaction(id, data);
        return transaction;
    }
);

export const removeTransaction = createAsyncThunk(
    "transaction/removeTransaction",
    async (id) => {
        const transaction = await deleteTransaction(id);
        return transaction;
    }
);
export const searchesTransactions = createAsyncThunk(
    "transaction/searchesTransaction",
    async ({type, search,start,limit}) => {
        const transaction = await searchTransactions(type,search,start,limit);
        return transaction;
    }
);

// create slice
const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        editActive: (state, action) => {
            state.editing = action.payload;
        },
        editInActive: (state) => {
            state.editing = {};
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
        typed: (state, action) => {
            state.type = action.payload;
        },
        resetsearched:(state,action)=>{
            state.search = ""
            state.type = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
                state.transactions = [];
            })
            .addCase(createTransaction.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(createTransaction.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.transactions.push(action.payload);
            })
            .addCase(createTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(changeTransaction.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(changeTransaction.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;

                const indexToUpdate = state.transactions.findIndex(
                    (t) => t.id === action.payload.id
                );

                state.transactions[indexToUpdate] = action.payload;
            })
            .addCase(changeTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(removeTransaction.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(removeTransaction.fulfilled, (state, action) => {
                console.log(action);
                state.isError = false;
                state.isLoading = false;

                state.transactions = state.transactions.filter(
                    (t) => t.id !== action.meta.arg
                );
            })
            .addCase(removeTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(searchesTransactions.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(searchesTransactions.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.transactions = action.payload;
            })
            .addCase(searchesTransactions.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
                state.transactions = [];
            })
    },
});

export default transactionSlice.reducer;
export const { editActive, editInActive, searched,resetsearched,typed } = transactionSlice.actions;
