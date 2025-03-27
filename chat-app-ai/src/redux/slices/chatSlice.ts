import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Message {
  text: string;
  sender: "user" | "ai"; 
  timestamp: string;
}

export interface FeedbackState {
    [key: number]: { 
      feedback: "up" | "down" | null;
      rating?: number;
      comment?: string;
    };

  }

interface ChatState {
  messages: Message[];
  feedback: FeedbackState;
  conversationRating: number | null;
  conversationFeedback: string;
}

const initialState: ChatState = {
  messages: [],
  feedback: {},
  conversationRating: null,
  conversationFeedback: "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    setFeedback: (state, action: PayloadAction<{ index: number; feedback: "up" | "down" | null; rating?: number; comment?: string }>) => {
        state.feedback[action.payload.index] = {
          feedback: action.payload.feedback,
          rating: action.payload.rating,
          comment: action.payload.comment,
        };
      },
    setConversationRating: (state, action: PayloadAction<number>) => {
        state.conversationRating = action.payload;
      },
      setConversationFeedback: (state, action: PayloadAction<string>) => {
        state.conversationFeedback = action.payload;
      },
    submitFeedback: (state) => {
      console.log("Submitting feedback:", {
        rating: state.conversationRating,
        feedback: state.conversationFeedback,
      });
    },
  },
});

export const { 
  addMessage, 
  setMessages, 
  setFeedback, 
  setConversationRating, 
  setConversationFeedback, 
  submitFeedback 
} = chatSlice.actions;

export default chatSlice.reducer;
