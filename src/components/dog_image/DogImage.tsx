import { useEffect, useState } from "react";
import axios from 'axios';

function DogImage() {
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        changeImageUrl();
        return () => {
            console.log("Clean off");
        }
    }, []);

    function changeImageUrl() {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then((res) => {
                setImageUrl(res.data.message);
            }, (err) => {
                console.log(err);
            })
    }

    return (<>
        <button onClick={changeImageUrl}>
            <p>
                Click to fetch a random image.
            </p>
        </button>
        <img src={imageUrl} alt='Error loading image'></img>
    </>);
}

export default DogImage;