import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveMessage } from "../store/chatSlice";
import { Box, Container, Typography } from "@mui/material";
import Message from "./Message";
import MessageInput from "./MessageInput";
import { useRef } from "react";
import model from "../utils/genai";

const Chat = () => {
  const chatEndRef = useRef(null);
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(
        receiveMessage({
          text: "Hello, how can I help you today?",
          timestamp: new Date().toLocaleTimeString(),
        })
      );
    }, 2000);

    return () => clearTimeout(timeout);
  }, [dispatch]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container className="bg-gray-100 dark:bg-gray-900 py-4">
      <Typography variant="h4" className="text-center text-black dark:text-white py-4">
        AI Powered Chat
      </Typography>
      <Box className="overflow-y-auto h-[60vh] p-2 mt-4 bg-white dark:bg-gray-800 rounded-md">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        <div ref={chatEndRef} />
      </Box>
      <MessageInput />
    </Container>
  );
};

export default Chat;
