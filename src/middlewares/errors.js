const notFoundMessage = (req, res) => {
	res.status(404).json({ message: 'Not found' })
};

const internalServerMessage = (err, req, res, next) => {
	res.status(500).json({ message: err.message })
};

export const errorsMidleware = {
  notFoundMessage,
  internalServerMessage,
};