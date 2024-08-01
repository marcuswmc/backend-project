import userModel, { IUser } from "../models/userModel.js";

class UserService {

    getAll = async (): Promise<IUser[]> => {
        try {
            return await userModel.find()
        } catch (error) {
            throw new Error("Failed to get all users");
        }
    };

    getUserById = async (userId: string): Promise<IUser | null> => {
        try {
            const foundUser: IUser | null = await userModel.findById(userId);

            return foundUser;
        } catch (error) {
            throw new Error("Failed to get user by ID");
        }
    };

    register = async (newUser: IUser): Promise<IUser> => {
        try {
            const createUser = await userModel.create(newUser)
            return createUser;
        } catch (error) {
            throw new Error("Failed to create user");
        }
    };

    update = async (userId: string, user: IUser): Promise<IUser | null> => {
        try {
           
            const userToUpdateWithId = await userModel.findByIdAndUpdate(userId, user, {new: true})

            return userToUpdateWithId;
        } catch (error) {
            throw new Error("Failed to update user");
        }
    };

    delete = async (userId: string): Promise<IUser | null> => {
        try {

            const deletedUser = await userModel.findByIdAndDelete(userId)

            return deletedUser;
        } catch (error) {
            throw new Error("Failed to delete user");
        }
    };
}

export default new UserService();
