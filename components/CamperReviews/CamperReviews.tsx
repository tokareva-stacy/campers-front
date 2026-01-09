interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export default function CamperReviews({ reviews }: { reviews: Review[] }) {
  return (
    <ul>
      {reviews.map((r, i) => (
        <li key={i}>
          <strong>{r.reviewer_name}</strong>
          <span> ⭐ {r.reviewer_rating}</span>
          <p>{r.comment}</p>
        </li>
      ))}
    </ul>
  );
}
