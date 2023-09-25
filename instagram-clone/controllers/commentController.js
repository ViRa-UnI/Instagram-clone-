const express = require('express');
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new comment
router.post('/:postId', authMiddleware, async (req, res) => {
    const { text } = req.body;
    const comment = new Comment({
        text,
        postedBy: req.user,
        post: req.params.postId
    });

    try {
        const savedComment = await comment.save();
        await Post.findByIdAndUpdate(req.params.postId, {
            $push: { comments: savedComment._id }
        });
        res.json({ message: 'comment-success', comment: savedComment });
    } catch (err) {
        res.status(500).json({ error: 'comment-error' });
    }
});

// Delete a comment
router.delete('/:commentId', authMiddleware, async (req, res) => {
    try {
        const comment = await Comment.findOne({ _id: req.params.commentId });
        if (comment.postedBy.toString() === req.user._id.toString()) {
            await comment.remove();
            await Post.findByIdAndUpdate(comment.post, {
                $pull: { comments: req.params.commentId }
            });
            res.json({ message: 'delete-comment-success' });
        } else {
            res.status(403).json({ error: 'delete-comment-error' });
        }
    } catch (err) {
        res.status(500).json({ error: 'delete-comment-error' });
    }
});

module.exports = router;