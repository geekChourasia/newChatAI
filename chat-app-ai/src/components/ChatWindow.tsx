import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  TextField,
  IconButton,
  Typography,
  useTheme,
  Paper,
} from "@mui/material";
import { ThumbUp, ThumbDown } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, setMessages } from "../redux/slices/chatSlice";
import { getMockResponse } from "./mockResponses";
import { RootState } from "../redux/store";
import { AppDispatch } from "../redux/store";
import FeedbackForm from "./FeedbackForm";

const ChatWindow = () => {
  const theme = useTheme(); // Use Material-UI Theme
  const dispatch = useDispatch<AppDispatch>();
  const messages = useSelector((state: RootState) => state.chat.messages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [feedback, setFeedback] = useState<{
    [key: number]: { feedback: "up" | "down" | null; rating?: number };
  }>({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(true);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      dispatch(setMessages(JSON.parse(savedMessages)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user" as "user",
      timestamp: new Date().toISOString(),
    };
    dispatch(addMessage(userMessage));
    setInput("");

    setIsTyping(true);
    setTimeout(() => {
      const aiResponse = {
        text: getMockResponse(input),
        sender: "ai" as "ai",
        timestamp: new Date().toISOString(),
      };
      dispatch(addMessage(aiResponse));
      setIsTyping(false);
    }, 1000);
  };

  const handleFeedback = (index: number, type: "up" | "down") => {
    setFeedback((prev) => ({
      ...prev,
      [index]: {
        feedback: prev[index]?.feedback === type ? null : type,
        rating:
          prev[index]?.feedback === type ? undefined : type === "up" ? 1 : -1,
      },
    }));
  };

  const MESSAGE_THRESHOLD = 8;

  return (
    <>
      <Typography
        variant="h4"
        display="flex"
        justifyContent="center"
        color={theme.palette.primary.main}
      >
        FeedMate
      </Typography>

      <Paper
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "90vh",
          maxWidth: 600,
          margin: "auto",
          padding: 2,
          borderRadius: 2,
          background: theme.palette.background.default,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            padding: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                maxWidth: "75%",
                padding: 2,
                borderRadius: 2,
                wordWrap: "break-word",
                fontSize: 14,
                marginBottom: 1,
                alignSelf:
                  message.sender === "user" ? "flex-end" : "flex-start",
                backgroundColor:
                  message.sender === "user"
                    ? theme.palette.primary.light
                    : theme.palette.background.paper,
                color: theme.palette.text.primary,
                borderBottomRightRadius: message.sender === "user" ? 0 : 2,
                borderBottomLeftRadius: message.sender === "ai" ? 0 : 2,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span>{message.text}</span>
              <Typography
                variant="caption"
                color={theme.palette.text.secondary}
                display="block"
                mt={1}
              >
                {new Date(message.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>

              {message.sender === "ai" && hoveredIndex === index && (
                <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
                  <IconButton
                    onClick={() => handleFeedback(index, "up")}
                    color={
                      feedback[index]?.feedback === "up" ? "primary" : "default"
                    }
                  >
                    <ThumbUp />
                  </IconButton>
                  <IconButton
                    onClick={() => handleFeedback(index, "down")}
                    color={
                      feedback[index]?.feedback === "down" ? "error" : "default"
                    }
                  >
                    <ThumbDown />
                  </IconButton>
                </Box>
              )}
            </Box>
          ))}
          {isTyping && (
            <Typography variant="caption" color="gray">
              AI is typing...
            </Typography>
          )}
          <div ref={chatEndRef} />
        </Box>

        {messages.length >= MESSAGE_THRESHOLD &&
          messages[messages.length - 1].sender === "ai" &&
          showFeedbackForm && (
            <FeedbackForm
              onClose={() => setShowFeedbackForm(false)}
              messages={messages}
            />
          )}

        <Box sx={{ display: "flex", gap: 1, padding: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            sx={{
              "& .MuiOutlinedInput-root fieldset": {
                borderColor: theme.palette.primary.main,
              },
            }}
          />
          <Button variant="contained" onClick={handleSend}>
            Send
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default ChatWindow;
