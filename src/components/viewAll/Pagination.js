import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTransactions, searchesTransactions} from "../../features/transaction/transactionSlice";

export default function Pagination() {

    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);

    const dispatch = useDispatch();
    const {search, type} = useSelector(state => state.transaction)

    useEffect(() => {
        const start = 0;
        const limit = 10;

        dispatch(searchesTransactions({search, type, start, limit}))

    }, [dispatch, type, search]);


    const Pagination = (start, limit) => {
        dispatch(searchesTransactions({search, type, start, limit}))
    }
    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                <div className={
                        isActive1 ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer' : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer'
                    }
                    onClick={
                        () => {
                            Pagination(0, 10)
                            setIsActive1(current => !current)
                            setIsActive2(false)
                            setIsActive3(false)
                            setIsActive4(false)

                        }
                }>
                    1
                </div>
                <div className={
                        isActive2 ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer' : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer'
                    }
                    onClick={
                        () => {
                            Pagination(10, 10)
                            setIsActive2(current => !current)
                            setIsActive1(false)
                            setIsActive3(false)
                            setIsActive4(false)
                        }
                }>
                    2
                </div>
                <div className={
                        isActive3 ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer' : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer'
                    }
                    onClick={
                        () => {
                            Pagination(20, 10)
                            setIsActive3(current => !current)
                            setIsActive1(false)
                            setIsActive2(false)
                            setIsActive4(false)
                        }
                }>
                    3
                </div>
                <div className={
                        isActive4 ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer' : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer'
                    }
                    onClick={
                        () => {
                            Pagination(30, 10)
                            setIsActive4(current => !current)
                            setIsActive1(false)
                            setIsActive2(false)
                            setIsActive3(false)
                        }
                }>
                    4
                </div>
            </div>
        </section>
    );
}
