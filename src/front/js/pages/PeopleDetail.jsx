import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


const PeopleDetail = () => {
    const [detail, setDetail] = useState(null)

    const { store } = useContext(Context)
    const { theid } = useParams()


    const findPeople = () => {
        const person = store.people.find((item) => item._id == theid)
        setDetail(person)
    }


    useEffect(() => {
        findPeople()
    }, [])



    return (
        <div className="container">
            <h1>Hola ¿qué tal {detail?.properties?.name}?</h1>
        </div>
    )
}


export default PeopleDetail