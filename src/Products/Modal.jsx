/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

const Modal = () => {
  const id = localStorage.getItem("id")
  const [idData, setIdData] = useState({});
  
  // console.log(id);
  console.log(idData.title);
  // useEffect(() => {
  //   fetch(`https://ecommerce-server-sable-zeta.vercel.app/details/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setIdData(data)
        
  //     })
  // }, [id]);
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={() => {

        document.getElementById('my_modal_3').showModal()
        fetch(`https://ecommerce-server-sable-zeta.vercel.app/details/${id}`)
      .then(res => res.json())
      .then(data => {
        setIdData(data)
        
      })
      }}>open modal</button>
      
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">{idData?.titile}</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
      
    </div>
  );
};

export default Modal;