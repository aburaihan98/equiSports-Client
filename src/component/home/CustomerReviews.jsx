import React from "react";

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      user: "John Doe",
      comment:
        "Great selection of products! The quality is top-notch, and the delivery was super fast.",
      rating: 5,
    },
    {
      id: 2,
      user: "Jane Smith",
      comment:
        "Loved the user-friendly website and the customer support was excellent. Highly recommend!",
      rating: 4,
    },
    {
      id: 3,
      user: "David Wilson",
      comment:
        "Found everything I needed for my soccer training. The discounts were a bonus!",
      rating: 5,
    },
    {
      id: 4,
      user: "Emily Davis",
      comment:
        "Good range of products, but shipping took longer than expected.",
      rating: 3,
    },
    {
      id: 5,
      user: "Michael Brown",
      comment:
        "Amazing quality! The basketball I purchased feels professional-grade.",
      rating: 5,
    },
    {
      id: 6,
      user: "Sophia Lee",
      comment:
        "I’m happy with my purchase. The cricket bat is fantastic and lightweight.",
      rating: 4,
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="card shadow-lg p-6">
              <p className="text-gray-700 italic mb-4">{review.comment}</p>
              <div className="flex items-center mt-2">
                <span className="font-bold text-primary">{review.user}</span>
                <span className="ml-4">{"★".repeat(review.rating)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
