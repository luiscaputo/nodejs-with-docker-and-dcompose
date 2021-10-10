import express from "express"
import { Response, Request } from "express"
const app = express()

const HOST = '0.0.0.0';
const PORT = 8080;

app.get('/', async (req: Request, res: Response) => {
	return res.send('Colocando Uma API RestFull no Docker');
});

app.listen(PORT, HOST, () => {
	console.log(`---Server is running on --> ${PORT}`);
})