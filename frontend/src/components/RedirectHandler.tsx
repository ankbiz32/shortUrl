import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectHandler = () => {
    const { shortUrl } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/${shortUrl}`);
                window.location.href = response?.data;
            } catch (error) {
                navigate("/not-found");
            }
        };

        fetchUrl();
    }, []);

    return <p>Redirecting...</p>;
};

export default RedirectHandler;