import { useEffect, useState } from "react";
import useOnThirdRender from '../useOnThirdRender';
import axios from 'axios';

function DogImage() {
    const [imageUrl, setImageUrl] = useState('');
    const componentName = "DogImage";
    useEffect(() => {
        changeImageUrl();
        return () => {
            console.log("Clean off");
        }
    }, []);

    useOnThirdRender((t: number) => {
        console.log(`component ${componentName} rendered ${t} times`);
    })

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
            <p >
                Click to fetch a random image.
            </p>
        </button>
        <img src={imageUrl} alt='Error loading image'></img>
    </>);
}

export default DogImage;