"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Web server entry point used in `npm start`.
 */
const app_1 = __importDefault(require("./app"));
const port = 3000;
app_1.default.listen(port, () => {
    console.info(`Server running on port ${port}`);
});
//# sourceMappingURL=index.js.map