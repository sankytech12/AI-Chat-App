import React from 'react';
import { Box, Typography } from '@mui/material';

const Message = ({ message }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: message.type === 'sent' ? 'flex-end' : 'flex-start',
        marginBottom: 2,
      }}
    >
      <Box sx={{ padding: 1, borderRadius: 2, backgroundColor: message.type === 'sent' ? '#1976d2' : '#f5f5f5' }}>
        <Typography variant="body1" className="text-black bg-inherit">
          {message.text}
        </Typography>
        <Typography variant="caption" className="text-slate-400 bg-inherit">
          {message.timestamp}
        </Typography>
      </Box>
    </Box>
  );
};

export default Message;
