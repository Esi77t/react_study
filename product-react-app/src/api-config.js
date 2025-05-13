let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname == "hosthost") {
    backendHost = "http://localhost:10000";
}

export const API_BASE_URL = `${backendHost}`;