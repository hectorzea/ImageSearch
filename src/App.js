import React, {useState, useEffect} from "react";
import './App.css';
import ImageForm from "./components/ImageForm";
import ImageList from "./components/ImageList";

function App() {

    const [search, setSearch] = useState('');
    const [images, setImages] = useState([]);
    const [actualPage, setActualPage] = useState(1);
    const [totalPages, setTotalPages] = useState(5);

    useEffect(() => {
        const fetchAPI = async () => {
            if (!search) return;
            const imagesPerPage = 30;
            const key = '18918229-a71c898ae15a640d55ee2572c';
            const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${actualPage}`;

            const response = await fetch(url);
            const result = await response.json();
            console.log(result.hits);
            setImages(result.hits);

            //calculate the total of pages
            const calculatePages = Math.ceil(result.totalHits / imagesPerPage);
            setTotalPages(calculatePages);
            const jumbotron = document.querySelector('.jumbotron');
            jumbotron.scrollIntoView({behavior:"smooth"})
        };
        fetchAPI()

    }, [search, actualPage]);

    const previousPage = () => {
        const newActualPage = actualPage - 1;
        if (newActualPage === 0) return;
        setActualPage(newActualPage)
    };

    const nextPage = () => {
        const newActualPage = actualPage + 1;
        if (newActualPage > totalPages) return;
        setActualPage(newActualPage)
    };

    return (
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center">
                    Image Finder
                </p>
                <ImageForm setSearch={setSearch}/>
            </div>
            <div className="row-justify-content-center">
                <ImageList images={images}/>
                {
                    (actualPage === 1) ?
                        null :
                        (
                            <button onClick={previousPage} type='button' className='btn btn-info mr-1'>
                                Previous
                            </button>)
                }
                {
                    (actualPage === totalPages) ? null : (
                        <button onClick={nextPage} type='button' className='btn btn-info'>
                            Next
                        </button>)
                }
            </div>
        </div>
    );
}

export default App;
