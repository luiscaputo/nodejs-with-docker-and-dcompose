import express from "express"
import { Response, Request } from "express"
const app = express()

const HOST = '0.0.0.0';
const PORT = 8080;

app.get('/', async (req: Request, res: Response) => {
	return res.send('Hello Word HEllo Word Estou presente')
});

app.listen(PORT, HOST, () => {
	console.log(`---Server is running on --> ${PORT}`);
})