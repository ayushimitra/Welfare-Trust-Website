import React from 'react'

const events = [
    {
      id: 1,
      title: "Food Distribution Drive",
      date: "March 10, 2025",
      description: "Providing meals to underprivileged families in rural areas.",
      image: "/assets/event1.jpg", // Replace with actual images
    },
    {
      id: 2,
      title: "Health Check-up Camp",
      date: "April 5, 2025",
      description: "Free medical check-ups and medicines for the needy.",
      image: "/assets/event2.jpg",
    },
    {
      id: 3,
      title: "Clothes Donation Drive",
      date: "April 20, 2025",
      description: "Distributing clothes to children and families in need.",
      image: "/assets/event3.jpg",
    },
  ];
  
  const gallery = [
    "/assets/gallery1.jpg",
    "/assets/gallery2.jpg",
    "/assets/gallery3.jpg",
    "/assets/gallery4.jpg",
    "/assets/gallery5.jpg",
  ];

const EventsAndGallery = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-700">Our Events & Gallery</h1>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          Explore the impactful events organized by **Sai Baba Ashray Welfare Trust** and cherish the moments captured in our gallery.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {/* Events Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">📅 Upcoming & Past Events</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-gray-50 p-4 rounded-lg shadow-sm w-full md:w-1/3">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="text-gray-700 mt-2">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">📸 Gallery</h2>
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            {gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-60 h-40 object-cover rounded-lg shadow-sm hover:scale-105 transition"
              />
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="bg-amber-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-amber-800 transition">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
    

export default EventsAndGallery
