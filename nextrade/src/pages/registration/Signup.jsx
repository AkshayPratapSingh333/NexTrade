/* eslint-disable react/no-unescaped-entities */
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, FireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const context = useContext(myContext);
    const {loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    /**========================================================================
     * Signup Function
    *========================================================================**/

    const userSignupFunction = async (e) => {
        e.preventDefault();
        
        // Input validation
        if (userSignup.name === ""|| userSignup.email === "" || userSignup.password === "") {
            return toast.error("All fields are required");
            
        }
        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            // create user Refrence
            const userRefrence = collection(FireDB, "user")

            // Add User Detail
            addDoc(userRefrence, user);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            })

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/login')
        } catch (error) {
            console.log(error);
            setLoading(false);
        }


    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            {/* SignUp Form Form  */}
            {/* Loader Component*/ }
            {loading && <Loader />}
            <div className="login_Form bg-blue-50 px-4 lg:px-8 py-6 border border-blue-200 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className="text-center text-3xl font-bold text-gray-800">
                        Signup
                    </h2>
                </div>

                {/* Input Name  */}
                <div className="mb-3">
                    <input
                        type="text"
                        value={userSignup.name}
                        onChange={(e) => {setUserSignup({ ...userSignup, name: e.target.value })}}
                        placeholder='Full Name'
                         className="px-2 py-2 w-96 rounded-md outline-none bg-blue-50 border border-blue-200 text-gray-800 placeholder-blue-300"
                    />
                </div>

                {/* Input Email  */}
                <div className="mb-3">
                    <input
                        type="email"
                        value={userSignup.email}
                        onChange={(e) => {setUserSignup({ ...userSignup, email: e.target.value })}}
                        placeholder='Email Address'
                        className="px-2 py-2 w-96 rounded-md outline-none bg-blue-50 border border-blue-200 text-gray-800 placeholder-blue-300"
                    />
                </div>

                {/* Input PAssword  */}
                <div className="mb-5 relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        value={userSignup.password}
                        onChange={(e) => {setUserSignup({ ...userSignup, password: e.target.value })}}
                        placeholder="Password"
                        className="px-2 py-2 w-96 rounded-md outline-none bg-blue-50 border border-blue-200 text-gray-800 placeholder-blue-300"/>
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-800" >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        onClick={userSignupFunction}
                        type='button'
                        className="w-full text-center py-2 font-bold rounded-md bg-blue-500 text-white hover:bg-blue-600"
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-gray-700 text-center'>Have an account <Link className="font-bold text-blue-600 hover:underline" to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;
export { FireDB, auth };