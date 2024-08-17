
import Register from './Register';
import logo from '../../public/gl.svg'
import UseAuth from "../hooks/UseAuth";

const Login = () => {
    const { signInWithGoogle, signIn, user, logOut  } = UseAuth();


    // Google Signin
    const handleGoogleSignIn = async () => {
        try {
             await signInWithGoogle();
            //   close modal
            const modal = document.getElementById('my_modal_1');
            if (modal) modal.close();
        } catch (err) {
            console.log(err)
            
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log({ email, pass })
        try {
            //User Login
            await signIn(email, password);
            const modal = document.getElementById('my_modal_1');
            if (modal) modal.close();
            
        } catch (err) {
            console.log(err)
            
        }
    }

    // Logout
    const handleLogout = async () => {
        try {
             await logOut();
            //   send user info in server  
        } catch (err) {
            console.log(err)
            
        }
    };

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {user ? <button className="btn" onClick={handleLogout}>LogOut</button> : <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Login</button>}
            
            <dialog id="my_modal_1" className="modal">
            <div className="modal-box h-[560px] bg-slate-400">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click on ✕ button to close</p>

                    <div className='flex flex-col'>
                        <form
                            onSubmit={handleSignIn}
                            className='flex flex-col '>
                            
                            <label htmlFor="">Email</label>
                                <input type='email' name='email' id='email' />
                                
                            <label htmlFor="">Passwrod</label>
                            <input type="password" name="password" id="password" />

                            <button className='btn btn-accent mt-3'>Login</button>
                        </form>
                    </div>


                        <h2 className='text-center p-4'>OR</h2>
                    <div className='divider' style={{ backgroundColor: 'red', height: '1px', width: '100%' }}></div>


                    <div onClick={handleGoogleSignIn} className='flex flex-row  items-center justify-center rounded-xl'>
                        
                        <button className='btn bt-lime-300 flex flex-row text-xl'>Login with Google <img className='w-8 h-8' src={ logo} alt="" /> </button>
                        
                    </div>

                    <div className='divider' style={{ backgroundColor: 'red', height: '1px', width: '100%' }}></div>

                    
                    <div className='flex justify-center items-center mt-20'>
                        <Register></Register>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Login;

