// productData 
import { useContext , useEffect} from "react";
import myContext from "../../context/myContext";
import { useNavigate } from 'react-router';
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const HomePageProductCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    
    // Add to Cart Function
    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to Cart");
    }
    
    // Delete from Cart Function
    const deleteCart = (item) => {
        dispatch(deleteFromCart(item)); 
        toast.success("Removed From Cart")
    }
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);


    return (
        <div className="mt-0 dark:bg-gray-800 bg-gray-300 text-gray-300">
            {/* Heading */}
            <div className="">
                <h1 className="text-center dark:text-white text-black mb-5 text-3xl font-semibold">Trending Products</h1>
            </div>
            {/* Main */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        { getAllProduct && getAllProduct.slice(0, 8).map((item, index) => {
                            const { id, title, price,ImageUrl } = item;
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer bg-gray-800">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="lg:h-80 h-96 w-full"
                                            src={ImageUrl}
                                            alt="img"
                                        />
                                        <div className="p-6 bg-blue-gray-200">
                                            <h1 className="title-font text-lg  font-medium text-gray-100 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-100 mb-3">
                                                ₹{price}
                                            </h1>
                                            <div className="flex justify-center">
                                                {cartItems.some((p) => p.id === item.id) ?

                                                    <button
                                                        onClick={() => deleteCart(item)}
                                                        className="bg-red-600 hover:bg-red-800 w-full text-white py-[4px] rounded-lg font-bold">
                                                        Remove from Cart
                                                    </button>
                                                    :
                                                    <button
                                                        onClick={() => addCart(item)}
                                                        className="bg-gray-500 hover:bg-gray-800 w-full text-white py-[4px] rounded-lg font-bold">
                                                        Add to Cart
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;