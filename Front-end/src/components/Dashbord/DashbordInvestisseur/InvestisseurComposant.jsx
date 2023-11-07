import React, { useState } from 'react'
import Headerinvestor from './HeaderInvest';
import MainBody from './SlideInvest';
import ModalPOPUP from '../DashbordProjet/ModalBtn2';
import Listinginvest from '../../Product/ListProjet2';
import DashbordProjet from '../DashbordProjet/NavbarInvest';

function InvestisseurComponent() {
    const [data, setData] = useState([]);

    return (
        <>
            <Headerinvestor/>
            {/* <MainBody/> */}
            <DashbordProjet/>
            <div>
            <ModalPOPUP setData={setData} />
            <Listinginvest data={data} />
            </div>
        </>
    )
}

export default InvestisseurComponent
