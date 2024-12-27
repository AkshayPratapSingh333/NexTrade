import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    const context = useContext(myContext);
    const { getAllProduct } = context;

    // Search State 
    const [search, setSearch] = useState("");

    // Filter Search Data
    const filterSearchData = getAllProduct.filter((obj) =>
        obj.title.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 8);

    const navigate = useNavigate();

    return (
        <div className="relative">
            {/* Search input */}
            <div className="flex justify-center items-center">
                <div className="relative w-96 lg:w-96 md:w-96">
                    <FaSearch className="absolute top-3 left-3 text-gray-800" />
                    <input
                        type="text"
                        placeholder="Search here"
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-gray-300 placeholder-black text-gray-600 rounded-full px-10 py-2 w-full outline-none transition-colors duration-200 focus:ring-2 focus:ring-gray-100"
                    />
                </div>
            </div>

            {/* Search drop-down */}
            {search && (
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black w-96 md:w-96 lg:w-96 z-50 mt-1 rounded-lg px-2 py-2 shadow-lg">
                    {filterSearchData.length > 0 ? (
                        <>
                            {filterSearchData.map((item, index) => (
                                <div
                                    key={index}
                                    className="py-2 px-2 cursor-pointer hover:bg-gray-200 rounded-md transition-colors duration-200"
                                    onClick={() => navigate(`/productinfo/${item.id}`)}
                                >
                                    <div className="flex items-center gap-2">
                                        <img className="w-10 rounded-md" src={item.ImageUrl} alt="" />
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className="flex justify-center">
                            <img
                                className="w-20"
                                src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                                alt="No results"
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
