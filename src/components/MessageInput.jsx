import React from "react";

import SendIcon from "@mui/icons-material/Send";
import { TextField, Button, Box } from "@mui/material";

import useChat from "../hooks/useChat";

const MessageInput = () => {
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
      ></TextField>
      <Button
        variant="contained"
        onClick={handleSend}
        className="w-2/12 flex gap-2 rounded-md"
      >
        Send <SendIcon />
      </Button>
    </Box>
  );
};

export default MessageInput;
