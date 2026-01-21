// src/components/Reviews.tsx
import React, { useState } from "react";
import "../styles/Reviews.css";

const reviewsData = [
  { name: "Jane Mwangi", text: "Quick response and professional work. Highly recommend!", rating: 5 },
  { name: "Peter Kamau", text: "Installed my bathroom fixtures perfectly. Great service.", rating: 4 },
  { name: "Sarah Njeri", text: "Emergency repair handled immediately. Excellent customer care.", rating: 5 },
  { name: "David Otieno", text: "Affordable pricing and very reliable team.", rating: 4 },
  { name: "Lucy Wambui", text: "They modernized my kitchen plumbing beautifully. Great attention to detail.", rating: 5 },
];

export default function Reviews() {
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState(reviewsData);
  const [newReview, setNewReview] = useState({ name: "", text: "", rating: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.text && newReview.rating > 0) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", text: "", rating: 0 });
      setShowForm(false);
    }
  };

  return (
    <section id="reviews" className="reviews-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Customer Reviews</h2>

        {/* First 3 reviews displayed side by side */}
        <div className="row mb-4">
          {reviews.slice(0, 3).map((review, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div className="card review-card shadow-sm border-0 h-100">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">
                    <i className="bi bi-person-circle me-2 text-primary"></i>
                    {review.name}
                  </h5>
                  <p className="card-text text-muted">{review.text}</p>
                  <div className="stars text-warning">
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for remaining reviews */}
        <div
          id="reviewsCarousel"
          className="carousel slide mb-4"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-inner">
            {reviews.slice(3).map((review, i) => (
              <div
                key={i}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
              >
                <div className="card review-card shadow-sm border-0 mx-auto" style={{ maxWidth: "500px" }}>
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">
                      <i className="bi bi-person-circle me-2 text-primary"></i>
                      {review.name}
                    </h5>
                    <p className="card-text text-muted">{review.text}</p>
                    <div className="stars text-warning">
                      {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Give Review Button */}
        <div className="text-center">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "Give Review"}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="mt-4">
            <form className="review-form shadow-sm p-4 rounded bg-white" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Review</label>
                <textarea
                  className="form-control"
                  rows={3}
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Rating</label>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${newReview.rating >= star ? "selected" : ""}`}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success px-4">Submit Review</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
