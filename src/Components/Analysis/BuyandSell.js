import { useState, useEffect } from 'react'

import { LineChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, Line } from "recharts"

const BuyandSell = () => {
    const [bar, setBar] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(json => setBar(json))
    })
    return (

        <div class="card mx-5 bg-base-100 shadow-xl rounded">
            <h1 class='text-3xl font-semibold text-left px-10 py-4'>   Buy / Sell</h1>

            <div class="card-body overflow-x-auto flex items-center">
                <LineChart width={730} height={250} data={bar}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#cb8161" />
                    <Line type="monotone" dataKey="uv" stroke="#868686" />
                </LineChart>

            </div>

        </div>


    )
}

export default BuyandSell
