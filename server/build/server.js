"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
router.get('/', function (req, res) {
    res.send("All systems operational");
});
app.use((0, cors_1.default)());
app.use(router);
app.listen(3000, () => console.log('Listening on port 3000 lalit'));
