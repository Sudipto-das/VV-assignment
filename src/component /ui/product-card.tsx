import { Heart } from "lucide-react";

type ProductCardProps = {
  title: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  badge?: string;
  image?: string;
};

const ProductCard = ({
  title,
  price,
  oldPrice,
  rating,
  badge,
  image,
}: ProductCardProps) => {
  return (
    <div className="w-full sm:w-64 md:w-72 flex-shrink-0 bg-white shadow-sm hover:shadow-md transition-shadow font-montserrat">
      {/* Product Image with badge + wishlist */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
        {/* Badge */}
        {badge && (
          <span className="absolute top-2 left-2 bg-red-700 text-white text-xs px-2 py-1">
            {badge}
          </span>
        )}

        {/* Wishlist */}
        <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500">
          <Heart size={18} />
        </button>

        {/* Product Image */}
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-contain" />
        ) : (
          <span className="text-gray-400">Image</span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="text-sm sm:text-base text-gray-700 font-medium">{title}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-base sm:text-xl font-semibold">₹ {price}</span>
          {oldPrice && (
            <span className="text-sm sm:text-base text-gray-400 line-through">
              ₹ {oldPrice}
            </span>
          )}
        </div>
        {rating && (
          <div className="text-xs sm:text-sm text-gray-500 mt-1">({rating})</div>
        )}
      </div>

      {/* Add to Cart */}
      <button className="w-full bg-[#CA8787] text-white py-2 text-sm hover:bg-[#b36d6d] transition-colors">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
