import { useEffect, useState } from "react";
import axios from "axios";

type BreedsResponse = {
  [breed: string]: string[];
};

function DogBreeds() {
  const [breeds, setBreeds] = useState<BreedsResponse>({});
  const [breedsLoaded, setBreedsLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchBreeds();
    return () => {
      console.log("Component Dog unmounted");
    };
  }, []);

  async function fetchBreeds() {
    try {
      const { data } = await axios.get('https://dog.ceo/api/breeds/list/all');
      setBreeds(data.message);
    } catch (error) {
      console.error("Failed to fetch dog breeds list:", error);
    } finally {
      setBreedsLoaded(true);
    }
  }

  async function setBreed(parentBreed: string, childBreed: string = '') {
    try {
      const breedPath = childBreed ? `${parentBreed}/${childBreed}` : parentBreed;
      const { data } = await axios.get(`https://dog.ceo/api/breed/${breedPath}/images/random`);
      setImageUrl(data.message);
    } catch (error) {
      console.error("Failed to fetch image:", error);
    }
  }

  return (
    <div style={styles.container}>
      {breedsLoaded ? (
        <>
          <div style={styles.sidebar}>
            <ul style={styles.breedList}>
              {Object.entries(breeds).map(([parentBreed, childBreeds]) => (
                <li key={parentBreed} style={styles.listItem} onClick={() => setBreed(parentBreed)}>
                  {parentBreed}
                  {childBreeds.length > 0 && (
                    <ul>
                      {childBreeds.map((childBreed) => (
                        <li
                          key={childBreed}
                          onClick={(e) => {
                            e.stopPropagation();
                            setBreed(parentBreed, childBreed);
                          }}
                          style={styles.subItem}
                        >
                          {childBreed}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.imageArea}>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="A cute dog"
                style={styles.image}
              />
            ) : (
              <p>Click on a breed to see a dog image.</p>
            )}
          </div>
        </>
      ) : (
        <p>Loading dog breeds...</p>
      )}
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    fontFamily: 'sans-serif',
  } as React.CSSProperties,
  sidebar: {
    width: '300px',
    backgroundColor: '#f4f4f4',
    overflowY: 'auto',
    borderRight: '1px solid #ccc',
    padding: '1rem',
  } as React.CSSProperties,
  breedList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  } as React.CSSProperties,
  listItem: {
    cursor: 'pointer',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  } as React.CSSProperties,
  subItem: {
    marginLeft: '1rem',
    fontWeight: 'normal',
    cursor: 'pointer',
  } as React.CSSProperties,
  imageArea: {
    flex: 1,
    padding: '1rem',
    overflow: 'auto',
  } as React.CSSProperties,
  image: {
    maxWidth: '100%',
    maxHeight: '90vh',
    borderRadius: '8px',
  } as React.CSSProperties,
};

export default DogBreeds;
