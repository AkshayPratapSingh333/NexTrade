/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, FireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    /**========================================================================
     *                                Login Function 
    *========================================================================**/

    const userLoginFunction = async () => {
        // validation 
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required")
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
            // console.log(users.user)

            try {
                const q = query(
                    collection(FireDB, "user"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user) )
                    setUserLogin({
                        email: "",
                        password: ""
                    })
                    toast.success("Login Successfully");
                    setLoading(false);
                    if(user.role === "user") {
                        navigate('/user-dashboard');
                    }else{
                        navigate('/admin-dashboard');
                    }
                });
                return () => data;
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            {loading && <Loader />}
            {/* Login Form */}
            <div className="login_Form bg-blue-50 px-4 lg:px-8 py-6 border border-blue-200 rounded-xl shadow-md">
                {/* Top Heading */}
                <div className="mb-5">
                    <h2 className="text-center text-3xl font-bold text-gray-800">
                        Login
                    </h2>
                </div>

                {/* Email Input */}
                <div className="mb-3">
                    <input
                        type="email"
                        value={userLogin.email}
                        onChange={(e) => {setUserLogin({ ...userLogin, email: e.target.value })}}
                        placeholder="Email Address"
                        className="px-2 py-2 w-96 rounded-md outline-none bg-blue-50 border border-blue-200 text-gray-800 placeholder-blue-300"
                    />
                </div>

                {/* Password Input with Toggle */}
                <div className="mb-5 relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={userLogin.password}
                        onChange={(e) => {setUserLogin({ ...userLogin, password: e.target.value })}}v
                        className="px-2 py-2 w-96 rounded-md outline-none bg-blue-50 border border-blue-200 text-gray-800 placeholder-blue-300"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-800"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                {/* Login Button */}
                <div className="mb-5">
                    <button
                    onClick={userLoginFunction}
                        type="button"
                        className="w-full text-center py-2 font-bold rounded-md bg-blue-500 text-white hover:bg-blue-600"
                    >
                        Login
                    </button>
                </div>

                {/* Signup Link */}
                <div>
                    <h2 className="text-gray-700 text-center">
                        Don't have an account?{" "}
                        <Link
                            className="font-bold text-blue-600 hover:underline"
                            to={"/signup"}
                        >
                            Signup
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Login;
