const router=require('express').Router();
const authMiddleware=require('./middleware/authMiddleware');
const {addCustomers, getCustomers, updateCustomer, deleteCustomer}=require('./controllers/userController');

router.post('/POST/customers',authMiddleware,addCustomers);
router.get('/GET/customers',authMiddleware,getCustomers);
router.put('/PUT/customers',authMiddleware,updateCustomer);
router.delete('/DELETE/customers',authMiddleware,deleteCustomer);



module.exports=router;