import { FaShoppingCart } from "react-icons/fa";

const CardItem = ({ product }) => {
  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md border">
        <div className="relative">
          <span className="absolute top-2 left-2 bg-purple-800 text-white text-xs px-2 py-1 rounded">
            Новинка
          </span>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-contain"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-semibold">{product.title}</h3>
          <p className="text-xs text-gray-500">{product.weight}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg font-bold">{product.price}</span>
            <span className="text-sm text-gray-400 line-through">
              {product.oldPrice}
            </span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-green-600 text-xs">✔ в наличии</span>
            <button className="bg-orange-500 text-white p-2 rounded-md">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
