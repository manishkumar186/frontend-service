import axios from 'axios';


const signup_API_BASE_URL = "http://localhost:8080/medilife/register";


const login_API_BASE_URL = "http://localhost:8080/medilife/token";


const all_PRODUCT_BASE_URL = "http://localhost:8080/medilife/allProduct";


const GET_PRODUCT_BY_CATEGORYID = "http://localhost:8080/medilife/category?categoryName=";


const ADD_PRODUCT = "http://localhost:8080/medilife/addProduct" ;


const DELETE_PRODUCT_BYADMIN = "http://localhost:8080/medilife/deleteproduct";


const GET_PRODUCT_BY_ID = "http://localhost:8080/medilife";


const UPDATE_PRODUCT = "http://localhost:8080/medilife/updateproduct";


const all_CATEGORY_BASE_URL = "http://localhost:8080/medilife/allCategory";


const ADD_CATEGORY_BASE_URL = "http://localhost:8080/medilife/addCategory";

const ADD_TO_CART = "http://localhost:8080/medilife/addToCart"

const GET_CART_DETAIL_BY_USERNAME = "http://localhost:8080/medilife/cartDetail?userName=";

const DELETE_CART_BY_ID = "http://localhost:8080/medilife/cartDetail";

const ADD_ORDER_DETAIL = "http://localhost:8080/medilife/addOrder";

const ALL_ORDER_DETAIL = "http://localhost:8080/medilife/allOrder";

const ORDER_DELETE_BY_ADMIN = "http://localhost:8080/medilife/order";

const GET_ORDER_DETAIL_BY_USERNAME = "http://localhost:8080/medilife/userOrderDetail?userName=";

//// const PRESCRIPTION_UPLOAD = "http://localhost:9095/upload";
// //const ALL_PRESCRIPTION_FILES = "http://localhost:9095/files";

const USER_ADD_FEEDBACK = "http://localhost:8080/medilife/addFeedback";

const ALL_FEEDBACK = "http://localhost:8080/medilife/allFeedback";




class AddressService {
    createSignup(registerNewUser){
        return axios.post(signup_API_BASE_URL, registerNewUser);
    }

    createLogin(loginData){
        return axios.post(login_API_BASE_URL, loginData);
    }

    getAllMedicine(){
        return axios.get(all_PRODUCT_BASE_URL);
    }

    getAllCategory(){
        return axios.get(all_CATEGORY_BASE_URL);
    }

    getProductByCategory(categoryName){
        return axios.get(GET_PRODUCT_BY_CATEGORYID + categoryName);
        
    }
    addCategory(addCategory){
        return axios.post(ADD_CATEGORY_BASE_URL,addCategory);
    }

    addProduct(addProduct){
        return axios.post(ADD_PRODUCT,addProduct);
    }

    addToCart(cartDetail){
        return axios.post(ADD_TO_CART,cartDetail);
    }

    getCartByUserName(userName){
        return axios.get(GET_CART_DETAIL_BY_USERNAME + userName);
        
    }

    deleteCartDetail(cartId){
        return axios.delete(DELETE_CART_BY_ID +'/'+cartId)
    }

    addOrderDetail(orderDetail){
        return axios.post(ADD_ORDER_DETAIL,orderDetail);
    }

    // prescriptionUpload(data){
    //     return axios.post(PRESCRIPTION_UPLOAD,data);
    // }

    // getPrescription(){
    //     return axios.get(ALL_PRESCRIPTION_FILES);
    // }

    getAllOrderDetail(){
        return axios.get(ALL_ORDER_DETAIL);
    }

    deleteOrderDetail(orderId){
        return axios.delete(ORDER_DELETE_BY_ADMIN +'/'+ orderId);
    }

    deleteProductById(productId){
        return axios.delete(DELETE_PRODUCT_BYADMIN+'/'+productId);
    }

    getProductById(productId){
        return axios.get(GET_PRODUCT_BY_ID+'/'+productId);
    }
    updateProduct(product, productId){
        return axios.put( UPDATE_PRODUCT+'/'+productId,product)
    }
    getOrderByUserName(userName){
        return axios.get(GET_ORDER_DETAIL_BY_USERNAME + userName);
        
    }
    addFeedback(feedback){
        return axios.post(USER_ADD_FEEDBACK,feedback);
    }
    allFeedback(){
        return axios.get(ALL_FEEDBACK);
    }

}
export default new AddressService();
