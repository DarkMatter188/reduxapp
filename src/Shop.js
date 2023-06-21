import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actioncreators} from './state/index'


const Shop = () => {
  const dispatch = useDispatch();
  const {withdraw,depositMoney} = bindActionCreators(actioncreators,dispatch)
  const balance = useSelector(state => state.amount)
  return (
    <>
    {/* <div>
        <h2>Deposit/Withdraw Money</h2>
      <button className="btn btn-primary" onClick={()=>{dispatch(actioncreators.withdraw(100))}}>-</button>
      Update Balance
      <button className="btn btn-primary" onClick={()=>{dispatch(actioncreators.depositMoney(100))}}>+</button>
    </div> */}


    <div>
    <h2>Deposit/Withdraw Money</h2>
    <button className="btn btn-primary" onClick={()=>{withdraw(100)}}>-</button>
    Update Balance({balance})
    <button className="btn btn-primary" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
    </>
  )
}

export default Shop
