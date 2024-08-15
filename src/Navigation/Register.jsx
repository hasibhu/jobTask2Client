

const Register = () => {
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn bg-yellow-400" onClick={()=>document.getElementById('my_modal_2').showModal()}>Not Registered? Register</button>
            <dialog id="my_modal_2" className="modal">
            <div className="modal-box h-[560px] bg-slate-400">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-red-500 absolute right-2 top-2">✕</button> <br />
                </form>
                <h3 className="font-bold text-lg text-center">Please Register Here</h3> <br />
                <p className="py-4 text-center">Press ESC key or click on ✕ button to close</p>

                    <div className="mt-20">
                        <div className='flex flex-col '>
                        <label htmlFor="">Name</label>
                            <input type='name' name='name' id='name' />
                            
                        <label htmlFor="">Email</label>
                            <input type='email' name='email' id='email' />
                            
                         <label htmlFor="">Passwrod</label>
                        <input type="password" name="password" id="password" />
                        <button className='btn btn-accent mt-3'>Register</button>
                    </div>
                    </div>
                    
                </div>
            </dialog>
        </div>
    );
};

export default Register;