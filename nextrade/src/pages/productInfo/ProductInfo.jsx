import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useParams } from "react-router";
import { FireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Loader } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const ProductInfo = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState("");
    const { id } = useParams();

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(FireDB, "products", id));
            setProduct({ ...productTemp.data(), id: productTemp.id });
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Removed from cart");
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        getProductData();
    }, []);

    const renderStars = (rating) => {
        return Array(4)
            .fill(0)
            .map((_, index) => (
                <span
                    key={index}
                    className={`text-lg ${
                        index < rating
                            ? "text-red-800"
                            : "text-red-400 dark:text-white"
                    }`}
                >
                    ★
                </span>
            ));
    };

    return (
        <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800 bg-gray-100 text-gray-700 dark:text-gray-300">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <div className="max-w-6xl px-4 mx-auto">
                        <div className="flex flex-wrap mb-24 -mx-4">
                            <div className="w-full px-4 mb-8 md:w-1/2">
                                <img
                                    className="w-full lg:h-[39em] rounded-lg shadow-lg"
                                    src={product?.ImageUrl}
                                    alt={product?.title}
                                />
                            </div>
                            <div className="w-full px-4 md:w-1/2">
                                <div className="lg:pl-20">
                                    <h2 className="mb-6 text-2xl font-semibold">
                                        {product?.title}
                                    </h2>
                                    <div className="flex items-center mb-4">
                                        <div className="cursor-pointer flex">{renderStars(product?.rating || 0)}</div>
                                    </div>
                                    <p className="text-2xl font-bold mb-4">
                                        ₹ {product?.price}
                                    </p>
                                    <p className="mb-6">{product?.description}</p>
                                    {cartItems.some((p) => p.id === product.id) ? (
                                        <button
                                            onClick={() => deleteCart(product)}
                                            className="w-full px-4 py-3 text-center text-white bg-red-500 rounded-lg hover:bg-red-600"
                                        >
                                            Remove from Cart
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => addCart(product)}
                                            className="bg-gray-500 hover:bg-gray-800 w-full text-white py-[4px] rounded-lg font-bold">
                                            Add to Cart
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Layout>
    );
};

export default ProductInfo;
