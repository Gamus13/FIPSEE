import React, { useState } from 'react';
import ModalPOPUP from './ModalBtn';
import List from '../../Product/ListProjet';

function MyComponent() {
    const [data, setData] = useState([]);

    return (
        <div>
        <ModalPOPUP setData={setData} />
        <List data={data} />
        </div>
    );
}

export default MyComponent;