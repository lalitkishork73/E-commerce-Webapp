"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongonect_1 = require("./configs/mongonect");
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
mongoose_1.default.set('strictQuery', false);
exports.default = mongoose_1.default
    .connect(mongonect_1.config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
    console.log('Mongodb connected');
})
    .catch((err) => console.log(err));
app.listen(process.env.PORT || 3000, () => console.log('Listening on port 3000'));
