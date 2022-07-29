import React from 'react';
import BarChat from '../../Components/Analysis/BarChat';
import BuyandSell from '../../Components/Analysis/BuyandSell';
import EmployeeStatus from '../../Components/Analysis/EmployeeStatus';
import LatestOrder from '../../Components/Analysis/LatestOrder';
import ProductCart from '../../Components/Analysis/ProductCart';
import ShortSummary from '../../Components/Analysis/ShortSummary';

const Analysis = () => {
    return (
        <div>
            <ShortSummary></ShortSummary>
            <BarChat></BarChat>
            <LatestOrder />
            <BuyandSell />
            <ProductCart />
            <EmployeeStatus />
        </div>
    );
};

export default Analysis;