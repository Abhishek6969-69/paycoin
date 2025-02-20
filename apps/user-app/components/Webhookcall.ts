"use server"
import axios from "axios"
export const Webhookcall=async({token,amount,user_identifier}:{token:string,amount:Number,user_identifier:string})=>{
  try{
    await axios.post(`${process.env.BANKSERVER_URL || ""}/confirm-payment`,{
        token, user_identifier,amount,
 
     })
     return true;
  }
  catch(error){
      console.error("Error in webhook call:",error)
      return false;
  }
   
}