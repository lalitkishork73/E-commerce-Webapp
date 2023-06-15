import mongoose, {Document, Schema} from "mongoose";

export interface Sellers{
    fname:string;
    lname:string;
    email:string;
    phone:string;
    password:string;            

}