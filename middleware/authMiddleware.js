const authMiddleware= (req,res,next) => {
    if (req.query){
        if (req.query.token ==='validtoken'){
            next()
        }
        else{
            res.status(200).json({
                success:false,
                statuscode:401,
                message:"Not Authorized"
            })
        }
    }
    else{
        res.status(200).json({
            success:false,
            statuscode:401,
            message:'Not Authorized'
        })

    }
}

module.exports=authMiddleware;