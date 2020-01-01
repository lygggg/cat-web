import { userSignUp as apiUserSignUp } from './apis/auth';
import { userBasket as apiUserBasket } from './apis/auth';


export const userBasket = async({ productId }) => {
    try {
        return await apiUserBasket({ productId });
    } catch (e) {
        alert(e);
    } 
}

export const userSignUp = async({email, password, name, phoneNumber, location}) =>{
    try {
        return await apiUserSignUp({ email, password, name, phoneNumber, location });   
    } catch (e) {
        alert(e);
    }
}