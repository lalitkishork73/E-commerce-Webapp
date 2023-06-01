import mongoose, { Document, Schema } from 'mongoose';

export interface Product {
    title: string;
    description: string;
    price: number;
    currencyId: string;
    currencyFormate: string;
    isFreeShipping: boolean;
    productImage: [string];
    style: string;
    availableSizes: [string];
    installments: number;
}

export interface ProductModel extends Product, Document {}

const ProductModelSchema = new Schema(
    {
        title: { type: String, trim: true, unique: true, required: true },
        description: { type: String, trim: true, required: true },
        price: { type: Number, required: true, trim: true },
        currencyId: { type: String, required: true, trim: true },
        currencyFormate: { type: String, required: true, trim: true },
        isFreeShipping: { type: Boolean, required: true },
        productImage: { type: [String], required: true },
        style: { type: String },
        availableSizes: { type: [String], required: true, trim: true, enum: ['S', 'XS', 'M', 'X', 'L', 'XXL', 'XL'] },
        installments: { type: Number, trim: true }
    },
    { timestamps: true }
);

export default mongoose.model<ProductModel>('Product', ProductModelSchema);
