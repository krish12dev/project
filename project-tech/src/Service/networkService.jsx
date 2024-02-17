import axios from "axios";
import appConfig from '../config/config'
const appClient = axios.create({
    baseURL: appConfig.apiUrl,
    timeout: 4000,
    headers: {
        "content-Type": "application/json",
    }
})
export default appClient