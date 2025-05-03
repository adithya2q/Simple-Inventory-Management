 const products=[
    {
        'id':1,
        "name":'Product 1',
        "size":"M",
        "price":100,
    },
    {
        'id':2,
        "name":'Product 2',
        "size":"L",
        "price":200,
    },
    {
        'id':3,
        'name':'Product 3',
        "size":"S",
        "price":300,
    },
    {
        'id':4,
        'name':'Product 4',
        "size":"XL",
        "price":400,
    },
    {
        'id':5,
        'name':'Product 5',
        "size":"XXL",
        "price":500,

    }
 ];

 module.exports={
    addProduct:(req,res)=>{

        try{
            const {search}=req.query.search

            console.log("api call:",req?.body);
                products.push(req.body);
    
                res.status(200).json({
                    success:true,
                    statuscode:200,
                    message:'Product added successfully',
                    data: req.body
                }); 
        }
        catch(e){
                res.status(500).json({
                    success:false,
                    statuscode:500,
                    message:'Internal Server Error',
                    error:e.message
                });
        }

    },
    getProducts:(req, res)=>{
        try{
            const {search}=req.query;
            if (search){
                const filteredProducts=products.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()));
                if(filteredProducts.length===0){
                    return res.status(200).json({
                        success:true,
                        statuscode:200,
                        message:'No products found',
                        data:[]
                    });
                }
                else if(filteredProducts.length>0){
                    return res.status(200).json({
                    success:true,
                    statuscode:200,
                    message:'Products fetched successfully',
                    count: filteredProducts.length,
                    data: filteredProducts
                });
            }
            }
            else{ 
                return res.status(200).json({
                success:true,
                statuscode:200,
                message:'Products fetched successfully',
                count: products.length,
                data: products
            });
        }
        }
        catch(e){
            res.status(500).json({
                success:false,
                statuscode:500,
                message:'Internal Server Error',
                error:e.message
            });
        }
    },
    updateProduct:(req,res)=>{
        try{
            console.log("reqBody:",req.body);
            const productIndex=products.findIndex((product)=>product.id===req.body.id);
            if(productIndex===-1){
                return res.status(200).json({   
                    success:false,
                    statuscode:404,
                    message:'Product not found',
                })
            }
            else{
                products[productIndex]=req.body.updatedData;
                res.status(200).json({
                    success:true,
                    statuscode:200,
                    message:'Product updated successfully',
                    data: products[productIndex]
                });
            };
        }
        catch(e){
            res.status(500).json({
                success:false,
                statuscode:500,
                message:'Internal Server Error',
                error:e.message
            });
        }
    },
    deleteProduct:(req,res)=>{
        try{
            const productIndex=products.findIndex((product)=>product.id===req.body.id);
            if(productIndex===-1){
                return res.status(200).json({   
                    success:false,
                    statuscode:404,
                    message:'Product not found',
                })
            }
            else{
                products.splice(productIndex,1);
                res.status(200).json({
                    success:true,
                    statuscode:200,
                    message:'Product deleted successfully',
                });
            };
        }
        catch(e){
            res.status(500).json({
                success:false,
                statuscode:500,
                message:'Internal Server Error',
                error:e.message
            });
        }
    }
}