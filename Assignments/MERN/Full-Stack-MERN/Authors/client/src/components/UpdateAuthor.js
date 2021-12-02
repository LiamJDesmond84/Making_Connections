import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from "@reach/router";


const UpdateAuthor = (props) => {
    const { id } = props;
    const [errors, setErrors] = useState({});
    const [name, setName] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {console.log(res.data);setName(res.data);})
            .catch(err => {console.log(err);navigate('/error');})
    }, [id])

    const updateAuthorHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {name})
        .then(res => {console.log(res);navigate("/")})
        .catch(err => {console.log(err);setErrors(err.response.data.errors)})
        
    }

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {console.log(res);navigate("/")})
            .catch(err => console.log(err))

    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <form onSubmit={updateAuthorHandler}>
                <h4>Edit this Author</h4>
                <label>Author Name</label>
                <input type="text" name="name" value={name.name} onChange={(e) => setName(e.target.value)} />
                {
                    errors.name?
                    <span>{errors.name.message}</span>
                    :null
                }
                <input type="submit" placeholder="Submit" />
            </form>
            <button onClick={() => navigate("/")}>Cancel</button>
            <hr />
            <button onClick={(e)=>{deleteAuthor(name._id)}}>Delete Author</button>
        </div>
    )
}


export default UpdateAuthor
