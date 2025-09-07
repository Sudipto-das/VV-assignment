import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Star,
    Shield,
    RotateCcw,
    Award,
    Truck,
} from "lucide-react";
import ProductList from "./product-list";
import { products } from "../data";
export default function ProductPage() {
    const [pincode, setPincode] = useState("");

    return (
        <div className="max-w-7xl mx-auto p-4 bg-white font-montserrat">
            {/* Breadcrumb */}
            <nav className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 flex flex-wrap gap-1">
                <span>Home</span> &gt; <span>Jewellery</span> &gt; <span>Gifts</span> &gt;{" "}
                <span>Necklace</span> &gt; <span>Chains</span> &gt;{" "}
                <span>Shining Diva...</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Product Images */}
                <div className="relative">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative">
                        <button className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
                            <ChevronLeft size={18} />
                        </button>
                        <button className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
                            <ChevronRight size={18} />
                        </button>
                        <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 rounded flex items-center justify-center text-white text-lg sm:text-xl">
                                📷
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="text-xl sm:text-2xl font-medium text-gray-800 mb-2">
                        Gold-Plated Pearls Necklace
                    </h1>
                    <p className="text-gray-500 mb-4 text-sm sm:text-base">
                        Made with 925 Silver
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                        <div className="bg-green-600 text-white px-2 py-1 rounded text-xs sm:text-sm flex items-center">
                            <span>4.1</span>
                            <Star size={12} className="ml-1 fill-current" />
                        </div>
                        <span className="text-gray-600 ml-2 text-xs sm:text-sm">(23)</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center mb-6 flex-wrap gap-2">
                        <span className="text-2xl sm:text-3xl font-bold text-gray-800">
                            ₹ 1,600
                        </span>
                        <span className="text-gray-500 line-through ml-2">₹ 2,000</span>
                        <span className="text-green-600 font-medium ml-2">(20% off)</span>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {[
                            { icon: <RotateCcw size={16} />, text: "Easy 30 Day Return" },
                            { icon: <Award size={16} />, text: "925 Silver Plating" },
                            { icon: <Shield size={16} />, text: "6- Month Warranty" },
                            { icon: <span className="text-yellow-600">👑</span>, text: "Premium Gold" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center">
                                <div className="w-8 h-8 border-2 border-gray-300 rounded mr-3 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <div className="font-medium text-gray-800 text-sm sm:text-base">
                                    {item.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                        <button className="w-full sm:flex-1 bg-white border-2 border-[#FF8F9D] text-pink-500 py-3 px-6 rounded font-medium hover:bg-pink-50 text-sm sm:text-base">
                            ADD TO CART
                        </button>
                        <button className="w-full sm:flex-1 bg-[#FF8F9D] text-white py-3 px-6 rounded font-medium hover:bg-pink-500 text-sm sm:text-base">
                            BUY NOW
                        </button>
                    </div>

                    {/* Delivery */}
                    <div className="mb-6">
                        <h3 className="font-medium text-gray-800 mb-2 sm:mb-3">
                            Estimated Delivery Time
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="text"
                                placeholder="Enter Pincode"
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                            />
                            <button className="text-pink-500 font-medium px-4 py-2 text-sm border border-pink-200 rounded hover:bg-pink-50">
                                Check
                            </button>
                        </div>
                    </div>

                    {/* Offers */}
                    <div className="mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="font-medium text-gray-800">Offers</h3>
                            <div className="flex items-center text-sm">
                                <span className="text-gray-500 mr-2">2 available</span>
                                <button className="text-pink-500 font-medium">Check</button>
                            </div>
                        </div>
                        <p className="text-gray-500 text-xs sm:text-sm italic">
                            Coupon can be applied at checkout
                        </p>
                    </div>

                    {/* Product Description */}
                    <div className="mb-6">
                        <h3 className="font-medium text-gray-800 mb-3">
                            Product Description
                        </h3>
                        <div className="space-y-2 text-sm">
                            {[
                                ["Material", "925 Sterling Silver"],
                                ["Plating", "18K Gold"],
                                ["Weight", "10grams"],
                                ["Stone Type", "Premium Jerkin"],
                            ].map(([label, value], idx) => (
                                <div key={idx} className="flex">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>
                                        <strong>{label}:</strong> {value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shipping */}
                    <div className="mb-6">
                        <h3 className="font-medium text-gray-800 mb-2">Shipping</h3>
                        <div className="flex items-center text-sm">
                            <Truck size={16} className="text-gray-500 mr-2" />
                            <span>
                                Get it by{" "}
                                <span className="text-pink-500 font-medium">25 Sept</span>
                            </span>
                        </div>
                    </div>

                    {/* Customer Ratings */}
                    <div>
                        <h3 className="font-medium text-gray-800 mb-4">Customer Ratings</h3>
                        {[
                            {
                                name: "Anu",
                                date: "15/08/24",
                                review:
                                    "Such a gorgeous necklace. Got many compliments as well. Absolutely loved it",
                                images: [true, true],
                            },
                            {
                                name: "Anu",
                                date: "15/08/24",
                                review:
                                    "Looks beautiful ❤️❤️❤️ Go for it girls 😍😍😍 the quality is good .",
                                images: [true],
                            },
                        ].map((r, idx) => (
                            <div
                                key={idx}
                                className="mb-4 p-3 bg-gray-50 rounded text-sm sm:text-base"
                            >
                                <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                                        {r.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-medium">{r.name}</div>
                                        <div className="text-xs text-gray-500">{r.date}</div>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-2">{r.review}</p>
                                <div className="flex gap-2 mt-2 flex-wrap">
                                    {r.images.map((_, i) => (
                                        <div key={i} className="w-16 h-16 bg-gray-200 rounded"></div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-semibold text-2xl mb-4">Similar to this</h2>
                <ProductList products={products} />
            </div>
            <div className="flex flex-col justify-center items-center mt-2">
                <h2 className="font-semibold text-2xl mb-4">Top picks for you</h2>
                <ProductList products={products} />
            </div>
        </div>
    );
}
