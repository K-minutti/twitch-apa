"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
// Middleware
// Body parsing
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Serving static files
app.use(express_1.default.static(path_1.default.join(__dirname, "../../public")));
// Root
app.get("/", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "..", "../public/index.html"));
});
exports.default = app;
