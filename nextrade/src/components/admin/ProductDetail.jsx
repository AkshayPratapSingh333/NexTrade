import { useContext } from "react";
import { Link ,useNavigate} from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { FireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
    const context = useContext(myContext);
    const { loading,setLoading, getAllProduct,getAllProductFunction } = context;
    const navigate = useNavigate();

    // Delete function
    const deleteProduct = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(FireDB, 'products', id))
            toast.success('Product Deleted Successfully')
            getAllProductFunction();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    // Debugging Logs
    // console.log('Loading:', loading);
    // console.log('Products:', getAllProduct);

    return (
        <div className="bg-gray-100 min-h-screen py-10 px-5">
            {/* Header */}
            <div className="py-5 flex justify-between items-center">
                <h1 className="text-xl text-blue-600 font-bold">All Products</h1>
                <Link to="/addproductpage">
                    <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Add Product
                    </button>
                </Link>
            </div>

            {/* Loader or Table */}
            {loading ? (
                <div className="flex justify-center relative top-20">
                    <Loader />
                </div>
            ) : getAllProduct && getAllProduct.length > 0 ? (
                <div className="w-full overflow-x-auto mb-5">
                    {/* Table */}
                    <table className="w-full text-left border border-collapse sm:border-separate border-blue-200 text-blue-500">
                        <thead>
                            <tr>
                                <th className="h-12 px-6 text-md border-l first:border-l-0 border-blue-200 text-gray-700 bg-gray-200 font-bold">
                                    S.No.
                                </th>
                                <th className="h-12 px-6 text-md border-l first:border-l-0 border-blue-200 text-gray-700 bg-gray-200 font-bold">
                                    Title
                                </th>
                                <th className="h-12 px-6 text-md border-l first:border-l-0 border-blue-200 text-gray-700 bg-gray-200 font-bold">
                                    Category
                                </th>
                                <th className="h-12 px-6 text-md border-l first:border-l-0 border-blue-200 text-gray-700 bg-gray-200 font-bold">
                                    Image
                                </th>
                                <th className="h-12 px-6 text-md border-l first:border-l-0 border-blue-200 text-gray-700 bg-gray-200 font-bold">
                                    Price
                                </th>
                                <th className="h-12 px-6 text-md border-l first:border-l-0 border-blue-200 text-gray-700 bg-gray-200 font-bold">
                                    Date
                                </th>
                                <th className="h-12 px-6 text-md border-l first:border-l-0 border-blue-200 text-gray-700 bg-gray-200 font-bold">
                                    Stock Status
                                </th>
                                <th className="h-12 px-6 text-md border-l first:border-l-0 border-blue-200 text-gray-700 bg-gray-200 font-bold">
                                    Edit
                                </th>
                                <th className="h-12 px-6 text-md border-l first:border-l-0 border-blue-200 text-gray-700 bg-gray-200 font-bold">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {getAllProduct.map((item, index) => {
                                const { title, category, ImageUrl, price, date, id } = item;
                                return (
                                    <tr key={id || index} className="text-gray-600">
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-blue-200">
                                            {index + 1}.
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-blue-200">
                                            {title}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-blue-200">
                                            {category}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-blue-200">
                                            <div className="flex items-center justify-center">
                                                <img
                                                    className="w-14 h-14 object-cover rounded-lg"
                                                    src={ImageUrl}
                                                    alt={title}
                                                />
                                            </div>
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-blue-200">
                                            ₹{price}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-blue-200">
                                            {date}
                                        </td>
                                        <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-blue-200">
                                            In Stock
                                        </td>
                                        <td 
                                        onClick={() => navigate(`/updateproductpage/${id}`)}
                                        className="h-12 px-6 text-md border-t border-l first:border-l-0 border-blue-200 text-blue-600 font-semibold cursor-pointer hover:text-blue-800">
                                            Edit
                                        </td>
                                        <td 
                                        onClick={() => deleteProduct(id)}
                                        className="h-12 px-6 text-md border-t border-l first:border-l-0 border-blue-200 text-red-500 font-semibold cursor-pointer hover:text-red-700">
                                            Delete
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center text-gray-600 mt-10">
                    No products found.
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
