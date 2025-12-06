"use client";

import { Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const categories = [
    {
      name: "Birthday Flowers",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&q=80",
      link: "/occasions/birthday",
    },
    {
      name: "Sympathy",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80",
      link: "/occasions/sympathy",
    },
    {
      name: "Anniversary",
      image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=400&q=80",
      link: "/occasions/anniversary",
    },
    {
      name: "Get Well Soon",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&q=80",
      link: "/occasions/get-well",
    },
    {
      name: "Just Because",
      image: "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?w=400&q=80",
      link: "/occasions/just-because",
    },
    {
      name: "Seasonal",
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400&q=80",
      link: "/occasions/seasonal",
    },
  ];

  const featured = [
    {
      name: "Rose Bouquets",
      image: "https://images.unsplash.com/photo-1606041011872-596597976b25?w=400&q=80",
    },
    {
      name: "Lily Arrangements",
      image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&q=80",
    },
    {
      name: "Mixed Florals",
      image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=400&q=80",
    },
    {
      name: "Succulent Gardens",
      image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&q=80",
    },
    {
      name: "Orchid Plants",
      image: "https://images.unsplash.com/photo-1550845635-576b501d5c0e?w=400&q=80",
    },
    {
      name: "Gift Baskets",
      image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400&q=80",
    },
  ];

  const dropdownMenus = {
    "Shop All": {
      sections: [
        {
          title: "By Flower Type",
          items: ["Roses", "Lilies", "Orchids", "Tulips", "Sunflowers", "Mixed Bouquets"],
        },
        {
          title: "By Price",
          items: ["Under $50", "$50 - $100", "$100 - $150", "$150+", "Luxury Collection"],
        },
        {
          title: "By Style",
          items: ["Modern", "Classic", "Romantic", "Rustic", "Minimalist"],
        },
      ],
    },
    Occasions: {
      sections: [
        {
          title: "Celebrations",
          items: ["Birthday", "Anniversary", "Congratulations", "New Baby", "Graduation"],
        },
        {
          title: "Sympathy & Support",
          items: ["Sympathy", "Get Well Soon", "Thinking of You"],
        },
        {
          title: "Romance",
          items: ["Love & Romance", "Just Because", "I'm Sorry"],
        },
        {
          title: "Holidays",
          items: ["Mother's Day", "Valentine's Day", "Christmas", "Thanksgiving"],
        },
      ],
    },
    "Best Sellers": {
      sections: [
        {
          title: "Top Picks",
          items: [
            "Customer Favorites",
            "New Arrivals",
            "Florist's Choice",
            "Premium Collection",
            "Same-Day Bestsellers",
          ],
        },
      ],
    },
    "Same-Day Delivery": {
      sections: [
        {
          title: "Quick Delivery",
          items: [
            "Available Now",
            "Before 2PM",
            "Before 5PM",
            "Express Delivery",
            "Check Availability",
          ],
        },
      ],
    },
    "Plants & Gifts": {
      sections: [
        {
          title: "Plants",
          items: ["Succulents", "Orchids", "Potted Plants", "Plant Subscriptions"],
        },
        {
          title: "Gifts",
          items: ["Gift Baskets", "Chocolates", "Balloons", "Plush Toys", "Candles"],
        },
        {
          title: "Add-Ons",
          items: ["Greeting Cards", "Vases", "Gift Wrapping"],
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Mother's Day Promotional Banner */}
      <div className="bg-gradient-to-r from-[#9CB09C] via-[#A8BCA8] to-[#9CB09C] text-white text-center py-2.5 px-4 text-sm font-medium tracking-wide">
        Mother's Day Special: 20% Off All Bouquets | Free Same-Day Delivery
      </div>

      {/* Header */}
      <header className="bg-white border-b border-[#E8E4DC] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-[#9CB09C] rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-white font-serif text-2xl tracking-wider">24</span>
              </div>
              <div>
                <h1 className="text-2xl font-serif text-[#5A6B5A] tracking-wide">
                  Bloom Studio
                </h1>
                <p className="text-xs text-[#8A9A8A] tracking-wider">EST. 2024</p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8A9A8A] h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search flowers, occasions..."
                  className="pl-10 bg-[#FAF8F5] border-[#E8E4DC] focus:border-[#9CB09C]"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-[#5A6B5A]">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-[#5A6B5A] relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-[#9CB09C] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation with Dropdowns */}
      <nav className="bg-white border-b border-[#E8E4DC] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 h-12 text-sm relative">
            {Object.keys(dropdownMenus).map((menuName) => (
              <div
                key={menuName}
                className="relative"
                onMouseEnter={() => setActiveDropdown(menuName)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-[#5A6B5A] hover:text-[#9CB09C] transition-colors flex items-center gap-1 h-12">
                  {menuName} <ChevronDown className="h-4 w-4" />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === menuName && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-white border border-[#E8E4DC] rounded-lg shadow-xl p-6 min-w-[600px]">
                      <div className="grid grid-cols-3 gap-8">
                        {dropdownMenus[menuName as keyof typeof dropdownMenus].sections.map(
                          (section, idx) => (
                            <div key={idx}>
                              <h3 className="font-serif text-[#5A6B5A] font-semibold mb-3">
                                {section.title}
                              </h3>
                              <ul className="space-y-2">
                                {section.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link
                                      href={`/${menuName
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}/${item
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                      className="text-[#8A9A8A] hover:text-[#9CB09C] transition-colors text-sm"
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Floral Decorations */}
      <section className="relative h-[500px] bg-gradient-to-br from-[#C8D5C8] to-[#9CB09C] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="max-w-xl">
            <h2 className="text-5xl font-serif text-white mb-4">
              Fresh Blooms,
              <br />
              Delivered Daily
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Handcrafted arrangements from local artisans
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Enter delivery ZIP code"
                className="bg-white border-white max-w-xs"
              />
              <Button size="lg" className="bg-white text-[#5A6B5A] hover:bg-white/90">
                Find Flowers Now
              </Button>
            </div>
          </div>
        </div>

        {/* Beige/White Floral Line Art Doodles */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {/* Decorative floral elements */}
          <svg className="absolute top-10 right-20 w-64 h-64" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="50"
              fill="none"
              stroke="#F5F5DC"
              strokeWidth="2"
            />
            <path
              d="M100 50 Q120 70 100 100 Q80 70 100 50"
              fill="none"
              stroke="#F5F5DC"
              strokeWidth="2"
            />
            <path
              d="M150 100 Q130 120 100 100 Q130 80 150 100"
              fill="none"
              stroke="#F5F5DC"
              strokeWidth="2"
            />
            <path
              d="M100 150 Q80 130 100 100 Q120 130 100 150"
              fill="none"
              stroke="#F5F5DC"
              strokeWidth="2"
            />
            <path
              d="M50 100 Q70 80 100 100 Q70 120 50 100"
              fill="none"
              stroke="#F5F5DC"
              strokeWidth="2"
            />
          </svg>

          <svg className="absolute bottom-20 right-40 w-48 h-48" viewBox="0 0 200 200">
            <path
              d="M100 20 C120 40, 140 60, 120 80 C100 100, 80 100, 60 80 C40 60, 60 40, 80 20 C85 15, 95 15, 100 20"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
            />
            <circle cx="100" cy="60" r="8" fill="rgba(255,255,255,0.3)" />
            <line
              x1="100"
              y1="60"
              x2="100"
              y2="120"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
            />
          </svg>

          <svg className="absolute top-1/3 right-10 w-32 h-32" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="rgba(245,245,220,0.5)"
              strokeWidth="1.5"
            />
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <circle
                key={angle}
                cx={50 + 30 * Math.cos((angle * Math.PI) / 180)}
                cy={50 + 30 * Math.sin((angle * Math.PI) / 180)}
                r="8"
                fill="none"
                stroke="rgba(245,245,220,0.4)"
                strokeWidth="1.5"
              />
            ))}
          </svg>

          {/* Leaf decorations */}
          <svg className="absolute bottom-32 left-20 w-40 h-40" viewBox="0 0 100 100">
            <path
              d="M50 10 Q70 30 60 50 Q50 70 50 90"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
            />
            <path
              d="M50 30 Q70 30 70 45 Q50 45 50 30"
              fill="rgba(255,255,255,0.15)"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1"
            />
            <path
              d="M50 30 Q30 30 30 45 Q50 45 50 30"
              fill="rgba(255,255,255,0.15)"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1"
            />
          </svg>
        </div>
      </section>

      {/* Category Cards - NOW SQUARES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif text-[#5A6B5A] mb-8 text-center">
          Shop by Occasion
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-3 border-2 border-[#E8E4DC] group-hover:border-[#9CB09C] transition-colors">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center text-sm font-medium text-[#5A6B5A]">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-[#5A6B5A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl">
              <h2 className="text-4xl font-serif mb-4">
                20% Off Premium Arrangements
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Elevate any occasion with our signature designer collections
              </p>
              <Button size="lg" className="bg-[#9CB09C] hover:bg-[#8AA08A] text-white">
                Shop Premium Collection
              </Button>
            </div>
            <div className="relative w-full md:w-96 h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1594582312551-204742b6fc17?w=600&q=80"
                alt="Premium flowers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections - NOW SQUARES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif text-[#5A6B5A] mb-8 text-center">
          Featured Collections
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {featured.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-3 border border-[#E8E4DC] group-hover:shadow-lg transition-shadow">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center text-sm font-medium text-[#5A6B5A]">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5A6B5A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-lg mb-4">About Bloom Studio 24</h3>
              <p className="text-sm text-white/80">
                Delivering fresh, beautiful flowers since 2024. Every arrangement is
                handcrafted with care.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Delivery Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#" className="hover:text-white">
                    Same-Day Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Subscriptions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Corporate Gifts
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg mb-4">Stay Connected</h3>
              <p className="text-sm text-white/80 mb-4">
                Get special offers and fresh inspiration
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="bg-[#9CB09C] hover:bg-[#8AA08A] text-white">
                  Join
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            2024 Bloom Studio 24. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
