// extrutura universal de service
import { IProduct } from "../models/productModel.js";
import ProductModel from "../models/productModel.js";

class ProductService {
    getAll =  async (): Promise<IProduct[]> => {
        try {
            return await ProductModel.find();

        } catch (error) {
            throw new Error("Failed to get all products");
        }
    };
    getProductById = async (productId: string): Promise<IProduct | null> => {
        try {
            const foundProduct: IProduct | null = await ProductModel.findById(productId)
            return foundProduct;
        } catch (error) {
            throw new Error("Failed to get product by id");
        }
    };
    create = async (newProduct: IProduct): Promise<IProduct> => {
        try {
          const createdProduct = await ProductModel.create(newProduct);
            return createdProduct;
        } catch (error) {
            throw new Error("Failed to create product");
        }
    };
    update = async (productId: string, product: IProduct): Promise<IProduct | null> => {
        try {
            const updatedProduct = await ProductModel.findByIdAndUpdate(productId, product, { new: true });
            return updatedProduct;
        } catch (error) {
            throw new Error("Failed to update product");
        }
    };
    delete =  async (productId: string): Promise<IProduct | null> => {
        try {
            const deletedProduct = await ProductModel.findByIdAndDelete(productId); // Delete product
            return deletedProduct;
        } catch (error) {
            throw new Error("Failed to delete product");
        }
    };  
}

export default new ProductService();

// fim da extrutura universal de service
