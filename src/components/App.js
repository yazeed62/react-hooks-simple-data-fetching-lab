import React, { useEffect, useState } from "react";


function App() {
    const [dogImage, setDogImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                setDogImage(data.message);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>A Random Dog</h1>
            <img src={dogImage} alt="A Random Dog" />
        </div>
    );
}

export default App;

