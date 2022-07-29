import React from 'react'

const LatestOrder = () => {
    return (

        <div class="card mx-5 my-9 bg-base-100 shadow-xl rounded">

            <div class="card-body">
                <h1 class='text-3xl font-semibold text-left p-4'>Latest Order</h1>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr className='text-2xl'>
                                <th>Order ID</th>
                                <th>Order Total</th>
                                <th>Payment Method</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>

                            <tr class="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>

                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>

                    </table>
                    <div className='flex '>

                        <button class="btn btn-wide bg-primary border-none">Views All Orders</button>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default LatestOrder
