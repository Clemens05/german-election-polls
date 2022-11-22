"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const axios_1 = __importDefault(require("axios"));
const environment_1 = require("./environment");
class API {
    static async getData() {
        try {
            const { data } = await axios_1.default.get(environment_1.Env.API_URL);
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
