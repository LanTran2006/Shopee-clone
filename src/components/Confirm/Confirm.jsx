import React from 'react';
import './Confirm.scss';
import {DeleteCart} from '../../store/Cart'
function Confirm({dispatch,setDialog,id}) {
    return (
        <section className='confirm'>
            <div className="box">
                <div className="heading">
                    <p>Delete this item?</p>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <p className="text">are you sure to delete this permanently</p>
                <div className="buttons">
                    <button onClick={()=>{dispatch(DeleteCart(id.current));setDialog(false)}}>OK</button>
                    <button onClick={()=>{setDialog(false);id.current=null}}>Cancel</button>
                </div>
            </div>
        </section>
    );
}

export default Confirm;