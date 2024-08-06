import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Rating,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "../../styles/course-detail/course-detail-view.css";

export default function ReviewDialog({ open, onClose, onSubmit }) {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(1);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ reviewText, rating });
    setReviewText("");
    setRating(0);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        className: "dialog-paper",
      }}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle className="dialog-title">Review</DialogTitle>
        <DialogContent className="dialog-content">
          <Grid container className="rating-container" spacing={1}>
            <Grid item>
              <Typography variant="h6">Your Rating:</Typography>
            </Grid>
            <Grid item>
              <Rating
                id="rating"
                value={rating}
                onChange={handleRatingChange}
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            required
            placeholder="Write your review here"
            multiline
            rows={6}
            className="dialog-textfield"
            value={reviewText}
            onChange={handleTextChange}
          />
        </DialogContent>
        <div className="dialog-actions">
          <DialogActions>
            <Button
              variant="contained"
              onClick={onClose}
              className="dialog-button"
            >
              Cancel
            </Button>
            <Button variant="contained" type="submit" className="dialog-button">
              Add
            </Button>
          </DialogActions>
        </div>
      </form>
    </Dialog>
  );
}
