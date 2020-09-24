import express from 'express';
import blogControllers from "../controllers/blogControllers";

const blogRouters = express.Router();



blogRouters.get('/blogs', blogControllers.getAll);


export default blogRouters