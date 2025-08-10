import { useEffect, useState } from "react";
import axios from "axios";

function DogImage() {
    const [imageUrl, setImageUrl] = useState('');
    const [imageLoading, setImageLoading] = useState(false);

    useEffect(() => {
        fetchImage();

        return () => {
            console.log("Component Dog unmounted");
        };
    }, []);

    async function fetchImage() {
        try {
            setImageLoading(true);
            const res = await axios.get('https://dog.ceo/api/breeds/image/random');
            setImageUrl(res.data.message);
        } catch (error) {
            console.error("Failed to fetch dog image:", error);
        } finally {
            setImageLoading(false);
        }
    }

    return (
        <div>
            <h2>Random Dog Images</h2>
            <button onClick={fetchImage} disabled={imageLoading}>
                {imageLoading ? "Loading..." : "Click to fetch a random image"}
            </button>

            {imageUrl ? (
                <div style={{ marginTop: '1rem' }}>
                    <img
                        src={imageUrl}
                        alt="A cute dog"
                        style={{ maxWidth: '70vw', borderRadius: '8px' }}
                    />
                </div>
            ) : (
                <p style={{ marginTop: '1rem' }}>No image loaded yet.</p>
            )}
        </div>
    );
}

export default DogImage;