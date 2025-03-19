import express from 'express';
import { getAllRooms, createRoom, getRoomById, updateRoom, deleteRoom } from '../controllers/room_controller.js';

const router = express.Router();

router.get('/', getAllRooms);

router.post('/', createRoom);

router.get('/:id', getRoomById);

router.put('/:id', updateRoom);

router.delete('/:id', deleteRoom);

export default router;
