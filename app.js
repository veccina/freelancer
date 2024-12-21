const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Dummy Data
const projects = [
  { id: 1, title: 'Project One', description: 'Description for project one.', imageUrl: '/images/project1.jpg' },
  { id: 2, title: 'Project Two', description: 'Description for project two.', imageUrl: '/images/project2.jpg' }
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { projects });
});

// Start Server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
