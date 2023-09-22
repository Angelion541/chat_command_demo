import { Rooms } from '../models/rooms.js';

async function getRooms(req, res) {
	let rooms = await Rooms.find();

	rooms = rooms
			.map(({ _id: id, roomName, image, description }) => (
				{ id, roomName, image, description }
			));

	return res.status(201).json({
		code: 201,
		rooms,
	})
}

async function addNewRoom(req, res) {
	const { userName, userMood } = req.body;

	const newUser = await User.create({
		userName,
		userMood,
	})

	return res.status(201).json({
		code: 201,
		newUser,
	})
}

export const roomsController = { getRooms, addNewRoom };