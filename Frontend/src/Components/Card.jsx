import React from "react";

const donationItems = [
  { id: 1, name: "Food Package", price: "₹500", image: "/assets/food.jpg" },
  { id: 2, name: "School Kit", price: "₹750", image: "/assets/school.jpg" },
  { id: 3, name: "Medical Aid", price: "₹1000", image: "/assets/medical.jpg" },
  { id: 4, name: "Clothing Bundle", price: "₹600", image: "/assets/clothes.jpg" },
  { id: 5, name: "Hygiene Kit", price: "₹450", image: "/assets/hygiene.jpg" },
  { id: 6, name: "Books for Kids", price: "₹300", image: "/assets/books.jpg" },
  { id: 7, name: "Blankets", price: "₹550", image: "/assets/blankets.jpg" },
  { id: 8, name: "Baby Essentials", price: "₹800", image: "/assets/baby.jpg" },
];

const Card = () => {
  return (
    <div className="w-full bg-gray-100 py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-6">Items You Can Donate</h2>

      {/* Scrollable Cards Container */}
      <div className="relative overflow-x-auto scrollbar-hide py-4">
        <div className="flex space-x-6 snap-x snap-mandatory">
          {donationItems.map((item) => (
            <div
              key={item.id}
              className="min-w-[250px] md:min-w-[300px] bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition snap-start"
            >
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 text-lg">{item.price}</p>
              <button className="mt-4 w-full bg-amber-700 text-white font-semibold py-2 rounded-md hover:bg-amber-800 transition">
                Donate Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default Card;
