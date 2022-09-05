import React from 'react'
import Balance from './Balance'
import Form from './Form'
import Layout from './Layout'
import Transactions from './Transactions/Transactions'

export default function Layouts() {
    return (
        <Layout>
            <Balance/>
            <Form/>
            <Transactions/>

        </Layout>
    )
}
