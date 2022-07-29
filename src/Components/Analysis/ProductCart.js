import React from 'react'

const ProductCart = () => {
    return (

        <div class="card mx-5 my-9 bg-base-100 shadow-xl rounded">
            <h1 class='text-3xl font-semibold text-left px-10 py-4'>Products Cart</h1>

            <div class="card-body">
                <div class="overflow-x-auto">
                    <table class="table table-zebra w-full">

                        <thead>
                            <tr>
                                <th>Details</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>Cy Ganderton</td>
                                <th>1</th>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>

                            <tr>
                                <td>Hart Hagerty</td>
                                <th>2</th>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>

                            <tr>
                                <td>Brice Swyre</td>
                                <th>3</th>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductCart
