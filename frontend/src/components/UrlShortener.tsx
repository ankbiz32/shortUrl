import { useState } from "react";
import axios from "axios";

const UrlShortener = () => {
    const [originalUrl, setOriginalUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/shorten`, { originalUrl });
            setShortUrl(`${window.location.origin}/${response.data.shortUrl}`);
        } catch (error) {
            console.error("Error shortening URL", error);
        }
    };

    return (
        <div>
            <h2>URL Shortener</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    placeholder="Enter URL"
                    required
                />
                <button type="submit">Shorten</button>
            </form>
            {shortUrl && (
                <div>
                    <p>Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
                </div>
            )}
        </div>
    );
};

export default UrlShortener;