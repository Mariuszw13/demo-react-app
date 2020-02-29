import { useCookies } from "react-cookie";

export const useAuthToken = () => {
    const [cookies] = useCookies(["authToken"]);
    return cookies.authToken;
};
