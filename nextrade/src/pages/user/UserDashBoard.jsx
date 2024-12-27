import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const UserDashboard = () => {
    // user
    const user = JSON.parse(localStorage.getItem('users'));

    const context = useContext(myContext);
    const { loading, getAllOrder } = context;

    return (
        <Layout>
            <div className="container mx-auto px-4 py-5 lg:py-8">
                {/* Top  */}
                <div className="top">
                    {/* main  */}
                    <div className="bg-blue-50 dark:bg-gray-700 py-5 rounded-xl border border-blue-100 dark:border-gray-600">
                        {/* image  */}
                        <div className="flex justify-center">
                            <img src="https://i.pinimg.com/736x/fb/c7/c0/fbc7c0f44564099388f9c5ffcc338944.jpg" alt="User Profile Photo"  className="w-16 h-19 rounded-xl"/>
                        </div>
                        {/* text  */}
                        <div>
                            {/* Name  */}
                            <h1 className="text-center text-lg dark:text-gray-200">
                                <span className="font-bold">Name: </span>
                                {user?.name}
                            </h1>

                            {/* Email  */}
                            <h1 className="text-center text-lg dark:text-gray-200">
                                <span className="font-bold">Email: </span>
                                {user?.email}
                            </h1>

                            {/* Date  */}
                            <h1 className="text-center text-lg dark:text-gray-200">
                                <span className="font-bold">Date: </span>
                                {user?.date}
                            </h1>

                            {/* Role  */}
                            <h1 className="text-center text-lg dark:text-gray-200">
                                <span className="font-bold">Role: </span>
                                {user?.role}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* bottom  */}
                <div className="bottom">
                    {/* main 1 */}
                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                        {/* text  */}
                        <h2 className="text-2xl lg:text-3xl font-bold dark:text-gray-200">Order Details</h2>

                        <div className="flex justify-center relative top-10">
                            {loading && <Loader />}
                        </div>

                        {/* main 2 */}
                        {getAllOrder.filter((obj) => obj.userid === user?.uid).map((order, index) => {
                            return (
                                <div key={index}>
                                    {order.cartItems.map((item, index) => {
                                        const { id, date, quantity, price, title, ImageUrl, category } = item;
                                        const { status } = order;
                                        return (
                                            <div
                                                key={index}
                                                className="mt-5 flex flex-col overflow-hidden rounded-xl border border-blue-100 dark:border-gray-700 md:flex-row"
                                            >
                                                {/* main 3  */}
                                                <div className="w-full border-r border-blue-100 dark:border-gray-700 bg-blue-50 dark:bg-gray-800 md:max-w-xs">
                                                    {/* left  */}
                                                    <div className="p-8">
                                                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold dark:text-gray-200">Order Id</div>
                                                                <div className="text-sm font-medium dark:text-gray-400">#{id}</div>
                                                            </div>

                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold dark:text-gray-200">Date</div>
                                                                <div className="text-sm font-medium dark:text-gray-400">{date}</div>
                                                            </div>

                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold dark:text-gray-200">Total Amount</div>
                                                                <div className="text-sm font-medium dark:text-gray-400">₹ {price * quantity}</div>
                                                            </div>

                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold dark:text-gray-200">Order Status</div>
                                                                <div className="text-sm font-medium text-green-800 dark:text-green-400 first-letter:uppercase">{status}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* right  */}
                                                <div className="flex-1 dark:bg-gray-500">
                                                    <div className="p-8 ">
                                                        <ul className="-my-7 divide-y divide-gray-200 dark:divide-gray-700">
                                                            <li className="flex flex-col justify-between space-x-5 py-7 md:flex-row">
                                                                <div className="flex flex-1 items-stretch">
                                                                    <div className="flex-shrink-0">
                                                                        <img
                                                                            className="h-40 w-40 rounded-lg border border-gray-200 dark:border-gray-700 object-contain"
                                                                            src={ImageUrl}
                                                                            alt="Product"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-5 flex flex-col justify-between">
                                                                        <div className="flex-1">
                                                                            <p className="text-sm font-bold dark:text-white">{title}</p>
                                                                            <p className="mt-1.5 text-sm font-medium dark:text-gray-100">{category}</p>
                                                                        </div>

                                                                        <p className="mt-4 text-sm font-medium dark:text-gray-200">x {quantity}</p>
                                                                    </div>
                                                                </div>

                                                                <div className="ml-auto flex flex-col items-end justify-between">
                                                                    <p className="text-right text-sm font-bold dark:text-gray-200">₹ {price}</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default UserDashboard;
