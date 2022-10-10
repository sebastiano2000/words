import express from 'express';

import { getUsers, createUser, deleteUser, updateUser } from '../controllers/posts.js';

const router = express.Router();

router.get('http://localhost:3000/get', getUsers);
router.post('/add', createUser);
router.post('/delete', deleteUser);
router.post('/update', updateUser);

export default router;