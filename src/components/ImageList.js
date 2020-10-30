import React from 'react';
import ImageComponent from "./ImageComponent";

const ImageList = ({images}) => {
    return (
        <div className="col-12 p-5 row">
            {images.map( (image) => ((<ImageComponent key={image.id} image={image} />)))}
        </div>
    );
};

export default ImageList;