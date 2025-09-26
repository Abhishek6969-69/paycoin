"use server"
import axios from "axios"

export const Webhookcall = async({token, amount, user_identifier}: {token: string, amount: Number, user_identifier: string}) => {
  try {
    // Validate environment variable and construct URL properly
    const bankServerUrl = process.env.NEXT_PUBLIC_BANKSERVER_URL;
    
    if (!bankServerUrl) {
      console.error("NEXT_PUBLIC_BANKSERVER_URL environment variable is not set");
      return false;
    }

    // Ensure URL is properly formatted
    const baseUrl = bankServerUrl.endsWith('/') ? bankServerUrl.slice(0, -1) : bankServerUrl;
    const fullUrl = `${baseUrl}/confirm-payment`;

    console.log("Making webhook call to:", fullUrl);
    console.log("Payload:", { token, user_identifier, amount });

    const response = await axios.post(fullUrl, {
      token, 
      user_identifier,
      amount,
    }, {
      timeout: 10000, // 10 second timeout
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log("Webhook call successful:", response.status);
    return true;
  } catch (error) {
    console.error("Error in webhook call:", error);
    
    if (axios.isAxiosError(error)) {
      console.error("Axios error details:", {
        message: error.message,
        code: error.code,
        config: {
          url: error.config?.url,
          method: error.config?.method,
        }
      });
    }
    
    return false;
  }
}