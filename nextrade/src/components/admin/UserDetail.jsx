import { useContext } from "react";
import myContext from "../../context/myContext";

const UserDetail = () => {
    const context = useContext(myContext);
    const { getAllUser } = context;

    return (
        <div>
            <div>
                <div className="py-5 flex justify-between items-center">
                    {/* Title */}
                    <h1 className="text-xl text-blue-400 font-bold">All Users</h1>
                </div>

                {/* Table */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border border-collapse sm:border-separate border-gray-300 text-gray-600">
                        <tbody>
                            {/* Table Headers */}
                            <tr className="bg-gray-100 text-gray-700 font-semibold">
                                <th className="h-12 px-6 border-l first:border-l-0 border-gray-300">S.No.</th>
                                <th className="h-12 px-6 border-l first:border-l-0 border-gray-300">Name</th>
                                <th className="h-12 px-6 border-l first:border-l-0 border-gray-300">Email</th>
                                <th className="h-12 px-6 border-l first:border-l-0 border-gray-300">Uid</th>
                                <th className="h-12 px-6 border-l first:border-l-0 border-gray-300">Role</th>
                                <th className="h-12 px-6 border-l first:border-l-0 border-gray-300">Date</th>
                            </tr>

                            {/* Table Data */}
                            {getAllUser.map((value, index) => (
                                <tr key={index} className="hover:bg-gray-200 text-gray-600">
                                    <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-300">{index + 1}</td>
                                    <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-300 capitalize">{value.name}</td>
                                    <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-300 cursor-pointer">
                                        {value.email}
                                    </td>
                                    <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-300">{value.uid}</td>
                                    <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-300">{value.role}</td>
                                    <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-300">{value.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
