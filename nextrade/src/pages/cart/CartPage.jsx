import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import { Trash } from "lucide-react";
import { decrementQuantity, deleteFromCart, incrementQuantity } from "../../redux/cartSlice";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { useEffect , useState} from "react";
import { FireDB } from "../../firebase/FirebaseConfig";
import BuyNowModal from "../../components/buyNowModal/BuyNowModal";
import { Navigate } from "react-router-dom";

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Removed From Cart");
    };

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    const cartDistinctCount = cartItems.length; // Number of distinct items in the cart
    const cartItemTotal = cartItems
        .map((item) => item.quantity)
        .reduce((prevValue, currValue) => prevValue + currValue, 0); // Total items (including quantities)
    const cartTotal = cartItems
        .map((item) => item.price * item.quantity)
        .reduce((prevValue, currValue) => prevValue + currValue, 0); // Total price

    // Discount Logic: Flat ₹100 off for orders above ₹500
    const discount = cartTotal > 50000 ? 5000 : 100;
    const totalAfterDiscount = cartTotal - discount;

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

     // Buy Now Function 
     // user
    const user = JSON.parse(localStorage.getItem('users'))

    // Buy Now Function
    const [addressInfo, setAddressInfo] = useState({
        name: "",
        address: "",
        pincode: "",
        mobileNumber: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    const buyNowFunction = () => {
        // validation 
        if (addressInfo.name === "" || addressInfo.address === "" || addressInfo.pincode === "" || addressInfo.mobileNumber === "") {
            return toast.error("All Fields are required")
        }

        // Order Info 
        const orderInfo = {
            cartItems,
            addressInfo,
            email: user.email,
            userid: user.uid,
            status: "confirmed",
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
        try {
            const orderRef = collection(FireDB, 'order');
            addDoc(orderRef, orderInfo);
            setAddressInfo({
                name: "",
                address: "",
                pincode: "",
                mobileNumber: "",
            })
            toast.success("Order Placed Successfully")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Layout>
            <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                <div className="container mx-auto px-4 max-w-7xl lg:px-0">
                    <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                        <h1 className="text-3xl font-bold flex justify-center tracking-tight sm:text-4xl">
                            Product Details
                        </h1>
                        <p className="text-center text-lg font-medium mt-2">
                            You have <span className="font-bold">{cartDistinctCount}</span>{" "}
                            unique {cartDistinctCount === 1 ? "item" : "items"} in your cart.
                        </p>
                        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                            <section
                                aria-labelledby="cart-heading"
                                className="rounded-lg bg-gray-200 dark:bg-gray-800 lg:col-span-8"
                            >
                                <h2 id="cart-heading" className="sr-only">
                                    Items in Shopping Cart
                                </h2>
                                <ul role="list" className="divide-y divide-gray-300 dark:divide-gray-700">
                                    {cartItems.length > 0 ? (
                                        <>
                                            {cartItems.map((item, index) => {
                                                const { id, title, price, ImageUrl, quantity, category } = item;
                                                return (
                                                    <div key={index} className="">
                                                        <li className="flex py-6 sm:py-6">
                                                            <div className="flex-shrink-0">
                                                                <img
                                                                    src={ImageUrl}
                                                                    alt="img"
                                                                    className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                                                                />
                                                            </div>
                                                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                                    <div>
                                                                        <div className="flex justify-between">
                                                                            <h3 className="text-sm">
                                                                                <div className="font-semibold">
                                                                                    {title}
                                                                                </div>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="mt-1 flex text-sm">
                                                                            <p>{category}</p>
                                                                        </div>
                                                                        <div className="mt-1 flex items-end">
                                                                            <p className="text-sm font-medium">
                                                                                ₹{price}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <div className="mb-2 flex">
                                                            <div className="min-w-24 flex">
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleDecrement(id);
                                                                    }}
                                                                    type="button"
                                                                    className="h-7 w-7 bg-gray-300 dark:bg-gray-700"
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    type="text"
                                                                    className="mx-1 h-7 w-9 rounded-md border text-center bg-gray-200 dark:bg-gray-700"
                                                                    value={quantity}
                                                                    readOnly
                                                                />
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleIncrement(id);
                                                                    }}
                                                                    type="button"
                                                                    className="h-7 w-7 bg-gray-300 dark:bg-gray-700"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                            <div className="ml-6 flex text-sm">
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        deleteCart(item);
                                                                    }}
                                                                    type="button"
                                                                    className="flex items-center space-x-1 px-2 py-1 pl-0"
                                                                >
                                                                    <Trash
                                                                        size={12}
                                                                        className="text-red-500 dark:text-red-400"
                                                                    />
                                                                    <span className="text-xs font-medium text-red-500 dark:text-red-400">
                                                                        Remove
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </>
                                    ) : (
                                        <h1 className="text-center">Have You Added Any Product ?</h1>
                                    )}
                                </ul>
                            </section>
                            <section
                                aria-labelledby="summary-heading"
                                className="mt-16 rounded-md bg-gray-200 dark:bg-gray-800 lg:col-span-4 lg:mt-0 lg:p-0"
                            >
                                <h2
                                    id="summary-heading"
                                    className="border-b flex justify-center border-gray-300 dark:border-gray-700 px-4 py-3 text-lg font-medium"
                                >
                                    Pricing Details
                                </h2>
                                <div>
                                    <dl className="space-y-1 px-2 py-4">
                                        <div className="flex items-center justify-between">
                                            <dt>Total Items: {cartItemTotal}</dt>
                                            <dd>₹ {cartTotal}</dd>
                                        </div>
                                        <div className="flex items-center justify-between py-4">
                                            <dt>Discount</dt>
                                            <dd className="text-red-700 dark:text-red-500">- ₹ {discount}</dd>
                                        </div>
                                        <div className="flex items-center justify-between border-y border-dashed py-4">
                                            <dt>Total Amount (After Discount)</dt>
                                            <dd>₹ {totalAfterDiscount}</dd>
                                        </div>
                                        <div className="flex items-center justify-between py-4">
                                            <dt>Delivery Charges</dt>
                                            <dd className="text-green-700 dark:text-green-500">Free</dd>
                                        </div>
                                    </dl>
                                    <div className="px-2 pb-4">
                                        <div className="flex gap-4 mb-6">
                                        {user
                                            ? <BuyNowModal
                                                addressInfo={addressInfo}
                                                setAddressInfo={setAddressInfo}
                                                buyNowFunction={buyNowFunction}
                                            /> : <Navigate to={'/login'}/>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CartPage;
