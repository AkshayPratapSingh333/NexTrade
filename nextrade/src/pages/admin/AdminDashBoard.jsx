import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiShoppingBag, FiUserCheck, FiPackage } from "react-icons/fi";
import ProductDetail from '../../components/admin/ProductDetail';
import OrderDetail from '../../components/admin/OrderDetail';
import UserDetail from '../../components/admin/UserDetail';
import { useContext } from 'react';
import myContext from '../../context/myContext';

const AdminDashboard = () => {
    // Admin Dashboard
    const user = JSON.parse(localStorage.getItem('users'));
    const context = useContext(myContext);
    const {getAllProduct,getAllOrder,getAllUser} = context;
    return  (
        <div className="bg-gray-200 min-h-screen mt-5 py-10  px-5">
            {/* Header Section */}
            <div className="max-w-xl  mx-auto mb-8">
                <div className="bg-blue-50 py-5 px-8 border border-blue-200 rounded-lg shadow-md">
                    <h1 className="text-center text-4xl font-bold text-blue-600">Admin Dashboard</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-full mx-auto">
                {/* Admin Details */}
                <div className="bg-gray-300 border border-gray-500 shadow-md rounded-lg p-6 mb-6">
                    <div className="flex flex-col items-center">
                        {/* Profile Image */}
                        <img
                            className="w-[6rem] h-[8rem] rounded-lg mb-4"
                            src="https://i.pinimg.com/736x/de/5a/f3/de5af380b168d9825765c08cf5f0739a.jpg"
                            alt="Admin Profile"
                        />
                        {/* Admin Info */}
                        {/* Admin Name */}
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">{user?.name}</h2>
                        {/* Admin Email */}
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Email : {user?.email}</h2>
                        {/* Date */}
                        <h1 className="text-lg dark:text-white text-blue-gray-700 font-bold">Date : {user?.date}</h1>
                        {/* Role */}
                        <h1 className="text-lg dark:text-white text-blue-gray-700 font-bold">Role : {user?.role}</h1>
                    </div>
                </div>

                {/* Tabs Section */}
                <Tabs>
                    <TabList className="flex flex-wrap -m-4  text-center justify-center">
                        {/* Total Products */}
                        <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                            <div className="border bg-blue-50 hover:bg-blue-100 border-blue-200 px-4 py-3 rounded-xl">
                                <FiShoppingBag size={40} className="text-blue-500 mb-3" />
                                <h2 className="title-font font-medium text-3xl text-blue-600">{getAllProduct.length}</h2>
                                <p className="text-blue-500 font-bold">Total Products</p>
                            </div>
                        </Tab>

                        {/* Total Orders */}
                        <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                            <div className="border bg-blue-50 hover:bg-blue-100 border-blue-200 px-4 py-3 rounded-xl">
                                <FiPackage size={40} className="text-blue-500 mb-3" />
                                <h2 className="title-font font-medium text-3xl text-blue-600">{getAllOrder.length}</h2>
                                <p className="text-blue-500 font-bold">Total Orders</p>
                            </div>
                        </Tab>

                        {/* Total Users */}
                        <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                            <div className="border bg-blue-50 hover:bg-blue-100 border-blue-200 px-4 py-3 rounded-xl">
                                <FiUserCheck size={40} className="text-blue-500 mb-3" />
                                <h2 className="title-font font-medium text-3xl text-blue-600">{getAllUser.length}</h2>
                                <p className="text-blue-500 font-bold">Total Users</p>
                            </div>
                        </Tab>
                    </TabList>

                    {/* Tab Panels */}
                    <TabPanel>
                       <ProductDetail/>
                    </TabPanel>

                    <TabPanel>
                       <OrderDetail/>
                    </TabPanel>

                    <TabPanel>
                       <UserDetail/>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default AdminDashboard;
