"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const axios_1 = __importDefault(require("axios"));
class API {
    static async getData() {
        try {
            const { data } = await axios_1.default.get('https://api.dawum.de');
            return data;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                return undefined;
            }
            else {
                return undefined;
            }
        }
    }
}
exports.API = API;
