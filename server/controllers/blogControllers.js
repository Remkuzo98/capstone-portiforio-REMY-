import Blog from '../models/blog'
export default new class blogControllers {

    async save(req, res){
        try {
            const blog = new Blog(req.body);
            const savedBlog = await blog.save();
            if(savedBlog){
                return res.status(200).send({
                    message:"Blog saved successfully",
                    data:savedBlog
                })
            }
            else
            {
                return res.status(404).send({
                    error:"Blog Not Saved!!"
                })
            }
        } catch (error) {
            return res.status(500).send({
                error:error.message
            })
        }
        
    }

    
}


