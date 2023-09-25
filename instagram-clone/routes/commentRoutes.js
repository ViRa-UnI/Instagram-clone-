const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');

// Post a comment
router.post('/post/:postId', authMiddleware, commentController.postComment);

// Get all comments for a post
router.get('/post/:postId', authMiddleware, commentController.getComments);

// Delete a comment
router.delete('/:commentId', authMiddleware, commentController.deleteComment);

// Edit a comment
router.put('/:commentId', authMiddleware, commentController.editComment);

module.exports = router;