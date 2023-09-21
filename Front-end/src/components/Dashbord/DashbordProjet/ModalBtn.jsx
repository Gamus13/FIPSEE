import { Dialog, DialogContent } from "@mui/material";
import { useState } from "react";
// import {DialogTitle} from "@mui/material";

import List from "../../Product/ListProjet";
import CreateProduct from "../../Product/CreateProjet";
import ProjetForm from "./ProjectAdd"

const ModalPOPUP = () => {
    const [open,openchange]=useState(false);
    const functionopenpopup=()=>{
        openchange(true);
    }
    const closepopup=()=>{
        openchange(false);

    }
    return ( 
        <div style={{ textAlign:'center', justifyContent: 'flex-start' }}>
            <button onClick={functionopenpopup} color="primary" variant="contained">Ajouter un projet</button>
            <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm" fullHeight maxHeight="100px">
                <DialogContent><ProjetForm /></DialogContent>
                
            </Dialog>
        </div>
    );
}
 
export default ModalPOPUP;