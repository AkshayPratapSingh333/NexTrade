import { useNavigate } from "react-router";

const category = [
    {
        image: 'https://i.pinimg.com/736x/cd/14/35/cd1435212c7baa1a5011fe75f64f0ba8.jpg',
        name: 'Smartphone',
        bgColor: 'bg-blue-gray-200',
        height: 'h-68',
    },
    {
        image: 'https://i.pinimg.com/736x/29/f3/99/29f399aec2699d49113314f1e96d5063.jpg',
        name: 'Laptop',
        bgColor: 'bg-indigo-400',
        height: 'h-50',

    },
    {
        image: 'https://i.pinimg.com/736x/51/5e/2b/515e2b34a3aafbd704384230328e664c.jpg',
        name: 'Books',
        bgColor: 'bg-cyan-50',
        height: 'h-27',
    },
    {
        image: 'https://i.pinimg.com/736x/38/6f/d5/386fd546d9c7b98d483b6651c354057d.jpg',
        name: 'Shirts',
        bgColor: 'bg-orange-200',
        height: 'h-66',
    },
    {
        image: 'https://i.pinimg.com/736x/e2/ac/85/e2ac8573878a0dc2e30b22b0674ce13c.jpg',
        name: 'Electronics',
        bgColor: 'bg-purple-100',
        height: 'h-98',
    },
    {
        image: 'https://i.pinimg.com/736x/4b/f5/0f/4bf50fc9eca8762f872f362e98610b24.jpg',
        name: 'Cosmetics',
        bgColor: 'bg-pink-100',
        height: 'h-46',
    },
    {
        image: 'https://i.pinimg.com/736x/ea/3b/ff/ea3bff4ab10655a9f900f6f64d337cc4.jpg',
        name: 'Shoes',
        bgColor: 'bg-orange-200',
        height: 'h-42',
    },
    {
        image: 'https://i.pinimg.com/736x/76/e2/f2/76e2f2d3b3b503a336fb7738053f85fc.jpg',
        name: 'Suits',
        bgColor: 'bg-teal-200',
        height: 'h-58',
    },
];

const Category = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.map((item, index) => {
                    return (
                        <div 
                            key={index} 
                            className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105" 
                            onClick={() => navigate(`/category/${item.name}`)}
                        >   <div className="w-full "> 
                            <img 
                                src={item.image} 
                                alt="img" 
                                className="object-cover w-full h-80"
                            />
                            </div>
                            <div className="p-4">
                                <h1 className="text-center text-sm lg:text-lg font-medium text-gray-800 dark:text-gray-200">
                                    {item.name}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Category;

 