const express = require('express');
const http = require('http');
const fs = require('fs');
const { RealtimeSession } = require('speechmatics');
const ffmpeg = require('fluent-ffmpeg');
const cors = require('cors')

const app = express();
const server = http.createServer(app);

const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line to handle URL-encoded data
app.use(cors({
    origin: 'http://127.0.0.1:5502',
    methods: 'POST',
}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/audio', (req, res) => {
    const audioBlob = req.body.audio_data;
    
    // Handle saving the audio blob to a file (similar to your original code)
    
    // Process the audio and get the transcript using Speechmatics
    
    // Send the transcript back to the client
    res.json({ transcript: audioBlob });
});

server.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});
