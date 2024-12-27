import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder ,deleteProduct} = context;

    return (
        <div>
            <div>
                <div className="py-5">
                    {/* text */}
                    <h1 className="text-xl text-blue-500 font-bold">All Orders</h1>
                </div>

                {/* table */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border border-collapse sm:border-separate border-gray-300 text-gray-600">
                        <tbody>
                            <tr>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    S.No.
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Order Id
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Image
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Title
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Category
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Price
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Quantity
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Total Price
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Status
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Name
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Address
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Pincode
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Phone Number
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Email
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Date
                                </th>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-gray-800 bg-gray-100 font-bold">
                                    Action
                                </th>
                            </tr>
                            {getAllOrder.map((order) => (
                                order.cartItems.map((item, index) => (
                                    <tr key={index} className="text-gray-600">
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300">{index + 1}</td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300">{item.id}</td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300">
                                            <img src={item.ImageUrl} alt="img" className="w-10 h-10" />
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300">{item.title}</td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300">{item.category}</td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300">₹{item.price}</td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300">{item.quantity}</td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300">₹{item.price * item.quantity}</td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300 text-blue-500">{order.status}</td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300">{order.addressInfo.name}</td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300">{order.addressInfo.address}</td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300">{order.addressInfo.pincode}</td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300">{order.addressInfo.mobileNumber}</td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300">{order.email}</td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300">{order.date}</td>
                                        <td onClick={()=> deleteProduct(order.id)} className="h-12 px-6 text-md border-t border-l first:border-l-0 border-gray-300 text-red-500 cursor-pointer">Delete</td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
