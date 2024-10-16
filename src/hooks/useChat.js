import { useState } from "react";
import { useDispatch } from "react-redux";

import { sendMessage, receiveMessage,setIsLoading } from "../store/chatSlice";
import model from "../utils/genai";

const useChat = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
    
  // Initialize the chat model
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  });

  // Function to handle AI response
  const handleAiResponse = async (message) => {
    try {
        console.log("Setting isLoading to true");
        dispatch(setIsLoading(true));
        let result = await chat.sendMessage(message);
        const responseText = result.response.text(); 
        dispatch(
          receiveMessage({
            text: responseText,
            timestamp: new Date().toLocaleTimeString(),
          })
        );
      } catch (error) {
        console.error("Error fetching AI response: ", error);
        dispatch(setIsLoading(false));
      } finally {
        console.log("Setting isLoading to false");
        dispatch(setIsLoading(false)); 
      }
  };

  // Function to handle message send
  const handleSend = async () => {
    if (message.trim()) {
      const trimmedMessage = message.trim();
      dispatch(
        sendMessage({
          text: trimmedMessage,
          timestamp: new Date().toLocaleTimeString(),
        })
      );
      setMessage("");
      await handleAiResponse(trimmedMessage);
    }
  };

  return {
    message,
    setMessage,
    handleSend
  };
};

export default useChat;
