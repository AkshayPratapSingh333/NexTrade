import { useNavigate, useParams } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext ,useEffect} from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const CategoryPage = () => {
    const { categoryname } = useParams();

    const context = useContext(myContext);
    const { getAllProduct, loading } = context;

    const navigate = useNavigate();

    // Filter products
    const filterProduct = getAllProduct.filter((obj) => obj.category.includes(categoryname));

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
        <Layout>
            <div className="mt-10 w-100">
                {/* Heading */}
                <div className="">
                    <h1 className="text-center mb-5 text-2xl font-semibold text-gray-800 dark:text-gray-200 first-letter:uppercase">
                        {categoryname}
                    </h1>
                </div>

                {loading ? (
                    <div className="flex justify-center">
                        <Loader />
                    </div>
                ) : (
                    <section className="text-gray-600 dark:text-gray-300 body-font bg-gray-100 dark:bg-gray-900">
                        <div className="container px-5 py-5 mx-auto">
                            <div className="flex flex-wrap -m-4 justify-center">
                                {filterProduct.length > 0 ? (
                                    filterProduct.map((item, index) => {
                                        const { id, title, price, ImageUrl } = item;
                                        return (
                                            <div
                                                key={index}
                                                className="p-4 w-full md:w-1/4"
                                            >
                                                <div className="h-full border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                                    <img
                                                        onClick={() => navigate(`/productinfo/${id}`)}
                                                        className="lg:h-80 h-96 w-full object-cover"
                                                        src={ImageUrl}
                                                        alt="img"
                                                    />
                                                    <div className="p-6">
                                                        <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                                                            {title.substring(0, 25)}
                                                        </h1>
                                                        <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
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
                                        );
                                    })
                                ) : (
                                    <div>
                                        <div className="flex justify-center">
                                            <img
                                                className="mb-2"
                                                src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                                                alt="No product found"
                                            />
                                        </div>
                                        <h1 className="text-gray-800 dark:text-gray-200 text-xl">
                                            No {categoryname} product found
                                        </h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </Layout>
    );
};

export default CategoryPage;