import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import { brouter } from './routes/bookroutes.js';
import { arouter } from './routes/adminroutes.js';
import { urouter } from './routes/userroutes.js';

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("views", path.join(__dirname , "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "public"));

app.use(brouter);
app.use(urouter);
app.use(arouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log('App is running');
});