import axios from "axios";
import { ApiRoutes } from "./apiRoutes";
import { CustomerEnquiry } from "../models/ICustomerEnquiries";

export const API = axios.create({
  baseURL: ApiRoutes.BASE_URL_LIVE,
});



export function useCreateCustomerEnquiry() {
    async function createCustomerEnquiry(data: CustomerEnquiry) {
      return API.post(ApiRoutes.CustomerEnquiries, data);
    }
  
    return createCustomerEnquiry;
  }