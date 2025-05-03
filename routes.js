const router=require('express').Router();
const authMiddleware=require('./middleware/authMiddleware');
const {addProduct, updateProduct, deleteProduct}=require('./controllers/userController');
const {getProducts}=require('./controllers/userController');

router.post('/POST/products',authMiddleware,addProduct);
router.get('/GET/products',authMiddleware,getProducts);
router.put('/PUT/products',authMiddleware,updateProduct);
router.delete('/DELETE/products',authMiddleware,deleteProduct);



module.exports=router;