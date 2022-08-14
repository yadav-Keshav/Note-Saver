import { useEffect, useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';
import MainScreen from '../../components/mainScreen'
import { useDispatch, useSelector } from 'react-redux';
import { deleteNoteAction, listNote } from '../../redux/actions/notesActions'
import Loading from '../../components/loading'
import ErrorMessage from '../../components/error'
import { useNavigate } from 'react-router-dom';


const MyNotes = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const noteList = useSelector(state => state.noteList)
    const { loading, notes, error } = noteList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin;
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {

            dispatch(deleteNoteAction(id))
        }
        console.log("deleted")
        window.location.reload(false)
        // navigate('/mynotes')
    }
    useEffect(() => {
        if (!userInfo) {
            navigate('/')
        }
        dispatch(listNote());

    }, [dispatch, userInfo])
    return (
        <MainScreen title={`Welcome ${userInfo && userInfo.name}....`}>
            <Link to="/createnote">
                <button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                    Create New Note
                </button>
            </Link>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}
            {
                notes?.reverse().map(note => (
                    <div>
                        <h2 >{note.title}</h2>
                        <h3>{note.content}</h3>
                        <ul>
                            <li><button onClick={() => deleteHandler(note._id)}>Delete</button></li>
                            <li> <h4>Category - {note.category}</h4></li>
                            <li><h4> Created on {" "} {note.createdAt.substring(0, 10)}</h4></li>
                        </ul>
                    </div>
                ))
            }



        </MainScreen>

    )
}

export default MyNotes