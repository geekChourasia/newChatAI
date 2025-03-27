import React, { useState } from "react";
import { Box, Button, TextField,Paper ,Typography, Rating, IconButton, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { setFeedback, Message } from "../redux/slices/chatSlice";
import { RootState } from "../redux/store"; // Adjust the path as needed

interface FeedbackFormProps {
  onClose: () => void;
  messages: Message[];
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onClose }) => {
  const theme = useTheme(); // Access theme
  const dispatch = useDispatch();
  const [rating, setRating] = useState<number | null>(0);
  const [comment, setComment] = useState("");

  const messages = useSelector((state: RootState) => state.chat.messages);

  const handleSubmit = () => {
    if (!rating) return;

    dispatch(
      setFeedback({
        index: messages.length - 1,
        feedback: null,
        rating,
        comment,
      })
    );

    setRating(null);
    setComment("");
    alert("Thank you for your feedback!");
    onClose();
  };

  return (
    <Paper variant="outlined">

    
    <Box
      sx={{
        position: "relative",
        p: 2,
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: theme.palette.primary.main, 
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      <Typography variant="h6" textAlign="center" color={theme.palette.text.primary}>
        Rate Your Experience
      </Typography>
      <Rating value={rating} onChange={(_, newValue) => setRating(newValue)} />

      <TextField
        fullWidth
        multiline
        rows={3}
        placeholder="Write your feedback..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        sx={{
          marginTop: 2,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: theme.palette.primary.main },
            "&:hover fieldset": { borderColor: theme.palette.primary.light },
            "&.Mui-focused fieldset": { borderColor: theme.palette.primary.dark },
          },
        }}
      />

      <Box display="flex" flexDirection="column">
        <Button
          variant="outlined"
          onClick={handleSubmit}
          disabled={!rating}
          sx={{
            marginTop: 2,
            color: rating ? theme.palette.primary.main : theme.palette.text.disabled,
            borderColor: rating ? theme.palette.primary.main : theme.palette.divider,
            "&:hover": {
              backgroundColor: rating ? theme.palette.primary.main : "transparent",
              color: rating ? theme.palette.primary.contrastText : theme.palette.text.primary,
              borderColor: theme.palette.primary.main,
            },
            "&.Mui-disabled": {
              color: theme.palette.text.disabled,
              borderColor: theme.palette.divider,
            },
          }}
        >
          Submit Feedback
        </Button>
      </Box>
    </Box>
    </Paper>
  );
};

export default FeedbackForm;
