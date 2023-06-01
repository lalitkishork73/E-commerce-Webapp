import mongoose, { Document, Schema } from 'mongoose';

export interface User {
    fname: string;
    lname: string;
    email: string;
    profileImage: string;
    phone: string;
    password: string;
    address: {
        shipping: {
            street: string;
            city: string;
            pincode: string;
        };
        billing: {
            street: string;
            city: string;
            pincode: string;
        };
    };
}

export interface UserModel extends User, Document {}

const UserModelSchema = new Schema(
    {
        fname: { type: String, required: true, trim: true },
        lname: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, unique: true },
        phone: { type: String, required: true, trim: true, unique: true },
        password: { type: String, required: true, trim: true },
        address: {
            shipping: {
                street: { type: String, trim: true },
                city: { type: String, trim: true },
                pincode: { type: String, trim: true }
            },
            billing: {
                street: { type: String, trim: true },
                city: { type: String, trim: true },
                pincode: { type: String, trim: true }
            }
        }
    },
    { timestamps: true }
);

export default mongoose.model<UserModel>('User', UserModelSchema);
