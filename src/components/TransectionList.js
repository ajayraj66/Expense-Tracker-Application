import React, { useContext } from 'react';
import Transection from './Transection';
import { GlobalContext } from '../context/GlobalState'

const TransectionList = () => {

  const { transections } = useContext(GlobalContext);
  

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transections.map(transection => (<Transection key={transection.id} transection={transection} />))}
      </ul>
    </>
  )
}

export default TransectionList
