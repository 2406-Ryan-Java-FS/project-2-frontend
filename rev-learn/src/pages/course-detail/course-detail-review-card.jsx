import Rating from "@mui/material/Rating";
import "../../styles/course-detail/review-card.css";

export default function CourseDetailReviewCard({ enrollment, user }) {
  return (
    <div className="review-card">
      <div className="review-top">
        <div className="user-profile">
          <img
            id="review-profile"
            src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
            alt="user profile"
            width="100px"
          />
        </div>
        <div className="review-rates">
          <div className="review-username">
            <span>
              {user.firstName} {user.lastName}
            </span>
          </div>
          <div className="star-rating">
            <Rating name="read-only" value={enrollment.courseRating} readOnly />
          </div>
        </div>
      </div>
      <div className="review-content">{enrollment.courseReview}</div>
    </div>
  );
}