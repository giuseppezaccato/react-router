//task import axios/ NavLink/ useState&useEffect
import axios from "axios"
//todo "npm i axios" da terminale

import { NavLink } from "react-router-dom"
//todo "npm i react-router-dom" da terminale

import { useState, useEffect } from "react"

//task import dotEnv
const apiUrl = import.meta.env.VITE_ENDPOINT_URL;




export default function Posts() {


    //task imposto array vuoto reattivo
    const [posts, setPosts] = useState([]);

    //task axios apiCall con useEffect
    useEffect(() => {
        axios.get(apiUrl)
            .then(res => setPosts(res.data))
            .catch(err => console.error(err))

        //? fetch method
        // fetch(`${url}`, { method: 'GET' })
        // .then((res) => res.json())
        // .then((data) => setPosts(data))
        // .catch(err => console.error(err));
    }, [])





    return (

        <div className="card col-4 mx-auto text-center">
            <ul className="list-group list-group-flush">

                {/* //task mappo array reattivo dopo call e uso NavLink per ricollegare il path! */}
                {posts.map(p => {
                    return (
                        <li key={p.id} className="list-group-item">
                            {/* <NavLink to={`/posts/${p.id}`}> */}
                            {p.titolo}
                            {/* </NavLink> */}
                        </li>
                    )
                })

                }

            </ul>
        </div>
    )
}
