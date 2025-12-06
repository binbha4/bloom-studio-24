"use client";

import { useState } from "react";
import { ChevronDown, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{
    price: string[];
    type: string[];
    color: string[];
  }>({
    price: [],
    type: [],
    color: [],
  });

  const categoryName =
    params.slug.charAt(0).toUpperCase() +
    params.slug.slice(1).replace(/-/g, " ");

  // Sample products
  const products = [
    {
      name: "Floral Embrace",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&q=80",
      badge: "BEST SELLER",
      options: "5 options available",
    },
    {
      name: "Celebrate The Day Bouquet",
      price: 54.99,
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80",
      badge: "NEW ARRIVAL",
      options: "4 options available",
    },
    {
      name: "Birthday Wishes",
      price: 54.99,
      image:
        "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=400&q=80",
      options: "2 options available",
    },
    {
      name: "Daydream Bouquet",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&q=80",
      options: "4 options available",
    },
    {
      name: "Happy Roses",
      price: 41.99,
      oldPrice: 46.99,
      image:
        "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?w=400&q=80",
      badge: "SAVE $5",
      options: "8 options available",
    },
    {
      name: "Lovely Lavender",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400&q=80",
      options: "4 options available",
    },
    {
      name: "Designer's Choice",
      price: 39.99,
      oldPrice: 42.99,
      image:
        "https://images.unsplash.com/photo-1606041011872-596597976b25?w=400&q=80",
      badge: "FREE SHIPPING",
      options: "6 options available",
    },
    {
      name: "Vibrant Harmony",
      price: 64.99,
      image:
        "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&q=80",
      options: "3 options available",
    },
    {
      name: "Vibrant Floral Medley",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=400&q=80",
      options: "4 options available",
    },
    {
      name: "Kaleidoscope Roses",
      price: 64.99,
      image:
        "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&q=80",
      options: "8 options available",
    },
    {
      name: "Winter Wishes",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1550845635-576b501d5c0e?w=400&q=80",
      options: "4 options available",
    },
    {
      name: "Two Dozen Red Roses",
      price: 59.99,
      oldPrice: 64.99,
      image:
        "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400&q=80",
      badge: "SAVE $5",
      options: "6 options available",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center text-sm text-[#8A9A8A]">
            <Link href="/" className="hover:text-[#9CB09C]">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <Link href="/occasions" className="hover:text-[#9CB09C]">
              Occasions
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-[#5A6B5A] font-medium">{categoryName}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Filter Header */}
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="outline"
                  className="w-full border-[#9CB09C] text-[#5A6B5A]"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>

              {/* ZIP Code Search */}
              <div className="bg-white p-4 rounded-lg border border-[#E8E4DC] mb-6">
                <h3 className="font-serif text-[#5A6B5A] font-semibold mb-3 text-sm">
                  FIND AVAILABLE PRODUCTS!
                </h3>
                <p className="text-xs text-[#8A9A8A] mb-3">
                  ENTER DELIVERY ZIP CODE OR ADDRESS*
                </p>
                <Input
                  type="text"
                  placeholder="ZIP code"
                  className="mb-3 border-[#E8E4DC]"
                />
                <div className="mb-3">
                  <label className="text-xs text-[#8A9A8A] mb-1 block">
                    LOCATION TYPE:
                  </label>
                  <select className="w-full border border-[#E8E4DC] rounded-md p-2 text-sm">
                    <option>Residence</option>
                    <option>Business</option>
                    <option>Hospital</option>
                  </select>
                </div>
                <Button className="w-full bg-[#9CB09C] hover:bg-[#8AA08A]">
                  GO
                </Button>
              </div>

              {/* Delivery Type Filter */}
              <div className="bg-white p-4 rounded-lg border border-[#E8E4DC] mb-4">
                <h3 className="font-serif text-[#5A6B5A] font-semibold mb-3 flex items-center justify-between text-sm">
                  DELIVERY TYPE
                  <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="mr-2 accent-[#9CB09C]"
                    />
                    <span className="text-[#5A6B5A]">
                      Shipped in a Gift Box
                    </span>
                  </label>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="mr-2 accent-[#9CB09C]"
                    />
                    <span className="text-[#5A6B5A]">
                      Local Shop Delivery
                    </span>
                  </label>
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="bg-white p-4 rounded-lg border border-[#E8E4DC] mb-4">
                <h3 className="font-serif text-[#5A6B5A] font-semibold mb-3 flex items-center justify-between text-sm">
                  PRICE RANGE
                  <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="mr-2 accent-[#9CB09C]"
                    />
                    <span className="text-[#5A6B5A]">Under $75</span>
                  </label>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="mr-2 accent-[#9CB09C]"
                    />
                    <span className="text-[#5A6B5A]">$75 to $100</span>
                  </label>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="mr-2 accent-[#9CB09C]"
                    />
                    <span className="text-[#5A6B5A]">$100 to $200</span>
                  </label>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="mr-2 accent-[#9CB09C]"
                    />
                    <span className="text-[#5A6B5A]">Above $200</span>
                  </label>
                </div>
              </div>

              {/* Flower Color Filter */}
              <div className="bg-white p-4 rounded-lg border border-[#E8E4DC] mb-4">
                <h3 className="font-serif text-[#5A6B5A] font-semibold mb-3 flex items-center justify-between text-sm">
                  FLOWER COLOR
                  <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="grid grid-cols-6 gap-2">
                  {[
                    "#FF6B9D",
                    "#FF0000",
                    "#FFA500",
                    "#FFFF00",
                    "#90EE90",
                    "#0000FF",
                    "#800080",
                    "#FFFFFF",
                    "#000000",
                    "#FFC0CB",
                    "#FF69B4",
                    "#8B4513",
                  ].map((color, idx) => (
                    <button
                      key={idx}
                      className="w-8 h-8 rounded-full border-2 border-[#E8E4DC] hover:border-[#9CB09C]"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Additional Links */}
              <div className="bg-white p-4 rounded-lg border border-[#E8E4DC]">
                <h3 className="font-serif text-[#5A6B5A] font-semibold mb-3 text-sm uppercase">
                  {categoryName} Flowers and Gifts
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-[#9CB09C] hover:underline">
                      All {categoryName} Gifts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#9CB09C] hover:underline">
                      Same Day Delivery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#9CB09C] hover:underline">
                      Gift Baskets
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#9CB09C] hover:underline">
                      Plants
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#9CB09C] hover:underline">
                      Best Sellers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Category Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-serif text-[#5A6B5A] mb-4">
                {categoryName} Flowers
              </h1>
              <p className="text-[#8A9A8A] leading-relaxed">
                Our {categoryName.toLowerCase()} flowers include fresh roses,
                daisies, and more! Whether your happy {categoryName.toLowerCase()}{" "}
                flower delivery is sent to home or office, you can be sure it
                will be received with a smile. Need your flowers today? Same-day
                delivery is available! You can be sure our flowers will send
                the right message.
              </p>
            </div>

            {/* Filter and Sort Bar */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg border border-[#E8E4DC]">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center text-[#5A6B5A] font-medium"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
              <div className="text-[#8A9A8A] text-sm">
                {products.length} Results
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#8A9A8A]">Sort by</span>
                <select className="border border-[#E8E4DC] rounded-md px-3 py-2 text-sm text-[#5A6B5A]">
                  <option>Best Sellers</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Customer Rating</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-[#E8E4DC] overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative aspect-square">
                    {product.badge && (
                      <div className="absolute top-2 left-2 bg-[#9CB09C] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                        {product.badge}
                      </div>
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-[#5A6B5A] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#8A9A8A] mb-2">
                      {product.options}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-[#8A9A8A]">
                        starting at
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      {product.oldPrice && (
                        <span className="text-sm text-[#8A9A8A] line-through">
                          ${product.oldPrice}
                        </span>
                      )}
                      <span className="text-xl font-semibold text-[#5A6B5A]">
                        ${product.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#9CB09C] mt-2">
                      Passport Eligible
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-[#9CB09C] text-[#5A6B5A] hover:bg-[#9CB09C] hover:text-white"
              >
                View 60 More
              </Button>
            </div>

            {/* Category Description */}
            <div className="mt-16 bg-white p-8 rounded-lg border border-[#E8E4DC]">
              <h2 className="text-2xl font-serif text-[#5A6B5A] mb-4">
                {categoryName} Flower Delivery Made Simple
              </h2>
              <p className="text-[#8A9A8A] leading-relaxed mb-4">
                Celebrate someone's special day with a bouquet of{" "}
                {categoryName.toLowerCase()} flowers designed to match their
                personality, favorite colors, or birth month. At Bloom Studio
                24, we offer a wide range of floral arrangements and gifts,
                from bright, cheerful sunflowers to elegant roses.
              </p>
              <p className="text-[#8A9A8A] leading-relaxed">
                Whether you're planning ahead or sending a last-minute
                surprise, it only takes a few steps to make their day more
                memorable: choose a bouquet, provide the delivery details, and
                let us handle the rest.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
