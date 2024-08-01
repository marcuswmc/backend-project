import { Router } from 'express';
import UserController from '../controllers/userController.js';
import { check } from 'express-validator';


const router: Router = Router();

const userValidate = [
  check('name').notEmpty().withMessage('User name is required.'),
  check('email').notEmpty().withMessage('User email is required'),
  check('password').isLength({ min: 4 }).withMessage('Password must be 4 digits longer')
]

// Get all users
router.get('/users', UserController.getAll);

// Get user by ID
router.get('/users/:id', UserController.getOne);

// Create a new user
router.post('/users', userValidate, UserController.register);

// Update an existing user
router.put('/users/:id', UserController.update);

// Delete an existing user
router.delete('/users/:id', UserController.delete);

export default router;