import axios from "axios";

const API_BASE_URL = "https://sellmate-ai-backend.onrender.com";

export interface RegisterRequest {

  shop_name: string;

  owner_name: string;

  phone: string;

  password: string;

  requirements: string;

}

export interface RegisterResponse {

  success: boolean;

  message: string;

  shop_id: string;

  business_id: number;

  shop_name: string;

  owner_name: string;

  phone: string;

  requirements: string;

}

export const registerMerchant = async (

  data: RegisterRequest

): Promise<RegisterResponse> => {

  const response = await axios.post(

    `${API_BASE_URL}/api/auth/register`,

    data,

    {

      headers: {

        "Content-Type": "application/json",

      },

    }

  );

  return response.data;

};