import { useCallback } from "react";

const base_URL = 'https://v3api.addresstwo.com/api';

const useApiService = () => {

    let accessToken = "";

    const createHeaders = (tokenType) => {
        const headers = new Headers();
        if (tokenType == "supertoken") {
            accessToken = 'pK1YtiuiSer03Ajn8G+qJmyEBesJ6yj+';
            headers.append("SuperTokenAuthentication", accessToken);
        } else if (tokenType == "tokenobj") {
            const Tokenobjectstringfy = localStorage.getItem("Tokenobject");
            const Tokenobject = Tokenobjectstringfy
                ? JSON.parse(Tokenobjectstringfy)
                : null;
            accessToken = Tokenobject?.Token || "";
            headers.append("TokenAuthentication", accessToken);
        } else {
            for (const [key, value] of Object.entries(tokenType)) {
                headers.set(key, value);
            }
        }
        headers.append("Content-Type", "application/json");
        headers.append("Access-Control-Allow-Origin", "*");
        return headers;
    };

    const handleResponse = async (response) => {
        const responseBody = await response.json();
        return responseBody;
    };

    const handleError = (error) => {
        console.error(error);
        return error;
    };

    const apiRequest = useCallback(
        async (method, endpoint, tokenType, payload, flag) => {
            const requestOptions = {
                method,
                headers: createHeaders(tokenType),
                redirect: "follow",
                ...(payload && { body: payload }),
            };

            try {
                const response = await fetch(`${base_URL}${endpoint}`, requestOptions);
                return await flag ? response : handleResponse(response);
            } catch (error) {
                return handleError(error);
            }
        },
        [base_URL, accessToken]
    );

    const postAPI = useCallback(
        (endpoint, tokenType, payload) =>
            apiRequest("POST", endpoint, tokenType, payload),
        [apiRequest]
    );
    const getAPI = useCallback(
        (endpoint, tokenType) => apiRequest("GET", endpoint, tokenType),
        [apiRequest]
    );
    const deleteAPI = useCallback(
        (endpoint, tokenType, payload) =>
            apiRequest("DELETE", endpoint, tokenType, payload),
        [apiRequest]
    );

    return {
        postAPI,
        getAPI,
        deleteAPI,
    };
};

export default useApiService;
