//task import axios/useState/useParams/useNavigate
import axios from "axios"
import { useState, useEffect } from "react"

//? recupero 
import { useParams } from "react-router-dom"

//? recupero 
import { useNavigate } from "react-router-dom"


export default function SinglePost() {

    //task destructuring
    const { id } = useParams()

    //task import da .env
    const url = import.meta.env.VITE_ENDPOINT_URL

    //task import navigate
    const navigate = useNavigate()

    //task setup useState dell'obj in show con {id} di useParams
    const [singlePost, setSinglePost] = useState({
        id: "",
        titolo: "",
        contenuto: "",
        immagine: "",
        tags: []
    })


    useEffect(() => {
        axios.get(`${url}/${id}`)
            .then(res => setSinglePost(res.data))
            .catch(err => console.error(err))

        //? fetch method
        // fetch(`${url}/${id}`, { method: 'GET' })
        //     .then(res => res.json())
        //     .then(data => setSinglePost(data))
        //     .catch(err => console.error(err))
    }, [id])

    return (
        <>
            <div key={id} class="card col-6 mx-auto">
                <img class="card-img-top" src={singlePost.immagine} alt={singlePost.titolo} />
                <div class="card-body text-center ">
                    <h4 class="card-title">{singlePost.titolo}</h4>
                    <p class="card-text">{singlePost.contenuto}</p>
                    <ul >
                        <li> #TAGS </li>
                        {
                            singlePost.tags.map((p, id) => {
                                return (
                                    <li key={id} > {p} </li>
                                )
                            })
                        }
                    </ul>
                    <button className="btn btn-warning float-end " onClick={() => navigate(-1)}> back</button>
                </div>
            </div>
        </>

    )
}
