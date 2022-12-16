const create_user = async (req,res)=>{
    const {title , description  } = req.body;
    const blog = blog.store({ title: title, description: description}); 
    
    await blog.save();
    return res.status(200).send({message:"added blog successfull"})
    
}