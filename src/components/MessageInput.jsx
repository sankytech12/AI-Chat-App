import React from "react";
import { useSelector } from "react-redux";

import SendIcon from "@mui/icons-material/Send";
import { TextField, Button, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import useChat from "../hooks/useChat";
import { useDarkMode } from "../context/DarkModeContext";



const MessageInput = () => {
    const {isDarkMode}=useDarkMode();
    const {isLoading}=useSelector((state)=>state.chat);
    
  const { message, setMessage, handleSend } = useChat();

  return (
    <Box sx={{ display: "flex", marginTop: 2, gap: 1 }}>
      <TextField
        className="border border-white bg-slate-500/50 pb-2 hover:bg-slate-500/70 w-10/12 rounded-md"
        value={message}
        variant="outlined"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Type a message..."
        sx={{
            "& .MuiOutlinedInput-root": {
              color: `${isDarkMode ? "#faf5f5" : "#2e2e2e"}`,
              fontFamily: "Arial",
              fontWeight: "bold",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: `${isDarkMode && "#faf5f5" }`,
                borderWidth: "2px",
              },
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: `${isDarkMode ? "#faf5f5" : "#2e2e2e"}`,
                  borderWidth: "3px",
                },
              },
              "&:hover:not(.Mui-focused)": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: `${isDarkMode ? "#ccc" : "#2e2e2e"}`,
                },
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#faf5f5",
              fontWeight: "bold",
              "&.Mui-focused": {
                color: "secondary.main",
                fontWeight: "bold",
              },
            },
          }}
      ></TextField>
      <Button
        variant="contained"
        onClick={handleSend}
        disabled={isLoading}
        className="w-2/12 flex gap-2 rounded-md"
      >
        {isLoading ? <CircularProgress size={24} /> :  (<SendIcon />)}
      </Button>
    </Box>
  );
};

export default MessageInput;
