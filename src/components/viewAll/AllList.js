import React, { useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {resetsearched, searched, typed} from '../../features/transaction/transactionSlice';
import Layout from '../Layout'
import AllTransactions from './AllTransactions'
import Formedit from './Formedit'
import Pagination from './Pagination';


export default function AllList() {
    const dispatch = useDispatch();
    const {search} = useSelector((state) => state.transaction);
    const [input, setInput] = useState(search);

    const [type, setType] = useState("");

    

    
    

    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searched(input));
        setType('')
        
    };
    
    dispatch(typed(type));
    

    const Reset = () => {
        dispatch(resetsearched())
        setInput('')
        setType('')
    }
    return (
        <>
            <Layout>

                <div className='grid grid-cols-3 items-center justify-items-center mb-5 ml-12'>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input className="outline-none border mr-2" type="search" name="search" placeholder="Search"
                                value={input}
                                onChange={
                                    (e) => setInput(e.target.value)
                                }/>
                        </form>
                    </div>
                    <div>
                        <form className="form-group radio">
                            <div className="radio_group font-semibold">
                                <input required type="radio" value="income" name="type" placeholder="Income"
                                checked={type === "income"}
                                onChange={(e) => setType("income")}
                                
                                />
                                <label>Income</label>
                            </div>
                            <div className="radio_group font-semibold">
                                <input type="radio" value="expense" name="type" placeholder="Expense"
                                   checked={type === "expense"}
                                   onChange={(e) => setType("expense")}
                                />
                                <label>Expense</label>
                            </div>
                        </form>
                    </div>
                    { search !== '' || type !== "" ?
                        <div>
                            <button class="rounded-full bg-red-500 text-white px-3"
                            onClick={Reset}>
                            Reset x</button>
                        </div>:''
                    
                    }
                </div>

                <Formedit></Formedit>
                <AllTransactions></AllTransactions>
                <Pagination></Pagination>

            </Layout>
        </>
    )
}
