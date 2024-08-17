import UseAuth from "../hooks/UseAuth";


const Register = () => {
     const {  createUser } = UseAuth();


    // sinup with email and password

    const handleSignUp = async e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log({ email, password, name })
        try {
            //2. User Registration
           await createUser(email, password)
             //   close modal
            const modal = document.getElementById('my_modal_2');
            if (modal) modal.close();


            const modal1 = document.getElementById('my_modal_1');
            if (modal) modal1.close();
            
        } catch (err) {
            console.log(err)
           
        }
    }

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn bg-yellow-400" onClick={()=>document.getElementById('my_modal_2').showModal()}>Not Registered? Register Here</button>
            <dialog id="my_modal_2" className="modal">
            <div className="modal-box h-[560px] bg-slate-400">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-red-500 absolute right-2 top-2">✕</button> <br />
                </form>
                <h3 className="font-bold text-lg text-center">Please Register Here</h3> <br />
                <p className="py-4 text-center">Press ESC key or click on ✕ button to close</p>

                    <div className="mt-20">
                        <form
                            onSubmit={handleSignUp} className='flex flex-col '>
                            <label htmlFor="">Name</label>
                                <input type='name' name='name' id='name' />
                                
                            <label htmlFor="">Email</label>
                                <input type='email' name='email' id='email' />
                                
                            <label htmlFor="">Passwrod</label>
                            <input type="password" name="password" id="password" />
                            <button className='btn btn-accent mt-3'>Register</button>
                        </form>
                    </div>
                    
                </div>
            </dialog>
        </div>
    );
};

export default Register;