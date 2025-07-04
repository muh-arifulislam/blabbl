"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const checkJWT_1 = __importDefault(require("../../middlewares/checkJWT"));
const router = express_1.default.Router();
router.post('/sync', user_controller_1.UserControllers.syncUser);
router.get('/friends', checkJWT_1.default, user_controller_1.UserControllers.getUserFriends);
router.get('/:id/recipient', user_controller_1.UserControllers.getRecipient);
router.get('/search', checkJWT_1.default, user_controller_1.UserControllers.searchUsers);
router.post('/:id/sent-friend-request', checkJWT_1.default, user_controller_1.UserControllers.sentFriendRequest);
router.post('/:id/accept-friend-request', checkJWT_1.default, user_controller_1.UserControllers.acceptFriendRequestController);
router.post('/:id/delete-friend-request', checkJWT_1.default, user_controller_1.UserControllers.deleteFriendRequestController);
router.get('/user-friend-requests', checkJWT_1.default, user_controller_1.UserControllers.getUserFriendRequests);
router.post('/:id/unfriend', checkJWT_1.default, user_controller_1.UserControllers.unFriendUser);
router.post('/:id/cancel-friend-request', checkJWT_1.default, user_controller_1.UserControllers.cancelFriendRequest);
exports.UserRoutes = router;
