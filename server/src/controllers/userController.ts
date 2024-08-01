import { Request, Response } from "express";
import { IUser } from "../models/userModel.js";
import userService from "../services/userService.js";

class UserController {
    getAll = async (req: Request, res: Response) => {
        try {
            const users: IUser[] = await userService.getAll();

            res.json(users);
        } catch (error) {
            res.status(500).json({ error: "Failed to get users" });
        }
    };
    getOne = async (req: Request, res: Response) => {
        try {
            const userId: string = req.params.id;
            const user = await userService.getUserById(userId);

            if (!user) {
              return  res.status(404).json({ error: "User not found" });
            }

            res.json(user);
        } catch (error) {
            res.status(500).json({ error: "Failed to get user" });
        }
    };
    register = async (req: Request, res: Response) => {
        try {
            const userToCreate: IUser = req.body;
            const createdUser: any = await userService.register(userToCreate);
            res.status(201).json(createdUser);
        } catch (error) {
            res.status(500).json({ error: "Failed to create user" });
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const userId: string = req.params.id;
            const userToUpdate: IUser = req.body;
            const updatedUser = await userService.update(
                userId,
                userToUpdate
            );

            if (!updatedUser) {
                res.status(404).json({ error: "User not found" });
            }
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: "Failed to update user" });
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const userId: string = req.params.id;
            const deletedUser = await userService.delete(userId);

            if (!deletedUser) {
                res.status(404).json({ error: "User not found" });
            }
            res.json(deletedUser);
        } catch (error) {
            res.status(500).json({ error: "Failed to delete user" });
        }
    };
}

export default new UserController();
