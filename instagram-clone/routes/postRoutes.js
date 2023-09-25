const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, postController.createPost);
router.get('/all', postController.getAllPosts);
router.get('/:postId', postController.getPostById);
router.put('/:postId', authMiddleware, postController.updatePost);
router.delete('/:postId', authMiddleware, postController.deletePost);
router.put('/:postId/like', authMiddleware, postController.likePost);
router.put('/:postId/unlike', authMiddleware, postController.unlikePost);
router.post('/:postId/comment', authMiddleware, postController.commentOnPost);

module.exports = router;