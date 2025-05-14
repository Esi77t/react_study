import axios from "axios";
import { API_BASE_URL } from "../api-config";

const apiClient = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

export function call(api, method, request) {
    return apiClient({
        url : api,
        method,
        data : request || undefined,
    })
        .then(result => result.data);
}