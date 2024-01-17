import { useState, useEffect } from "react";

// default export example
export default function Gallery2() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=10")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="gallery">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        images.map((image) => (
          <img
            key={image.id}
            src={image.download_url}
            alt={image.author}
            width="300"
            height="200"
          />
        ))
      )}
    </div>
  );
}
