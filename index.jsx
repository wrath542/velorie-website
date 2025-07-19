
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Velorié Signature Kurti",
    price: "₹1499",
    image: "https://via.placeholder.com/400x500.png?text=Kurti",
  },
  {
    id: 2,
    name: "Velorié Luxe Western Dress",
    price: "₹1999",
    image: "https://via.placeholder.com/400x500.png?text=Western+Dress",
  },
  {
    id: 3,
    name: "Velorié Casual Co-ord Set",
    price: "₹1799",
    image: "https://via.placeholder.com/400x500.png?text=Co-ord+Set",
  },
];

export default function VelorieHomePage() {
  return (
    <div className="min-h-screen bg-[#fdf7f1] text-[#333] p-4">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold tracking-wide">Velorié</h1>
        <p className="text-lg mt-2">Where Elegance Meets Everyday</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {products.map((product) => (
          <Card key={product.id} className="shadow-xl rounded-2xl overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-[400px] object-cover" />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg font-bold mb-4">{product.price}</p>
              <Button className="w-full bg-black text-white hover:bg-[#333]">Buy Now</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="text-center mt-12 text-sm text-gray-500">
        &copy; 2025 Velorié. All rights reserved.
      </footer>
    </div>
  );
}
