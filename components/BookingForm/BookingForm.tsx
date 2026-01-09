"use client";

export default function BookingForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking successful!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book your campervan now</h3>
      <input placeholder="Name*" required />
      <input placeholder="Email*" required />
      <input type="date" required />
      <textarea placeholder="Comment" />
      <button type="submit">Send</button>
    </form>
  );
}
