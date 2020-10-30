import React, {useState, useEffect} from 'react';
import ErrorMessage from "./ErrorMessage";

const ImageForm = ({setSearch}) => {

    const [criteria, setCriteria] = useState('');
    const [error,setError] = useState(false);
    const searchImages = (e) => {
        e.preventDefault();
        if (criteria.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        setSearch(criteria);
    };
    return (
        <form onSubmit={searchImages}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input onChange={e => setCriteria(e.target.value)} type="text"
                           className="form-control form-control-lg" placeholder='search an image...'/>
                </div>
                <div className="form-group col-md-4">
                    <input type="submit" value='Search' className='btn btn-lg btn-danger btn-block'/>
                </div>
            </div>
            {error ? <ErrorMessage message='Write something to search please...'/> : null}
        </form>
    );
};

export default ImageForm;