import React, { useEffect, useState } from "react";
import MainScreen from "../../components/mainScreen";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../../redux/actions/notesActions";
import Loading from "../../components/loading";
import ErrorMessage from "../../components/error";
import './createNoteScreen.css';
import { NOTES_CREATE_SUCCESS } from "../../redux/constants/noteConstants";
import { useNavigate } from 'react-router-dom';

function CreateNote() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();

    const noteCreate = useSelector((state) => state.noteCreate);
    const { loading, error, note } = noteCreate;



    const resetHandler = () => {
        setTitle("");
        setCategory("");
        setContent("");
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!title || !content || !category) return;
        dispatch(createNoteAction(title, content, category));

        resetHandler();
        dispatch({ type: NOTES_CREATE_SUCCESS })
        // alert("note created")
        // navigate("/mynotes");
    };

    const showNotesFunction = () => {
        navigate('/mynotes')
    }

    useEffect(() => { }, []);

    return (
        <MainScreen title="Create a Note">
            <div style={{ margin: "20px" }}>
                <button className="mx-2" onClick={showNotesFunction} >
                    Show All Notes
                </button>
            </div>
            <div>
                <h1>Create a new Note</h1>
                <div>
                    <form className="main_box">
                        {error && <ErrorMessage >{error}</ErrorMessage>}
                        <div controlId="title">
                            <label>Title</label>
                            <input
                                type="title"
                                value={title}
                                placeholder="Enter the title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div controlId="content">
                            <label>Content</label>
                            <input
                                as="textarea"
                                value={content}
                                placeholder="Enter the content"
                                rows={4}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>


                        <div controlId="content">
                            <label>Category</label>
                            <input
                                type="content"
                                value={category}
                                placeholder="Enter the Category"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                        {loading && <Loading size={50} />}
                        <div style={{ display: "flex", marginTop: "20px" }}>
                            <button type="submit" onClick={submitHandler}>
                                Create Note
                            </button>
                            <button  onClick={resetHandler} >
                                Reset Feilds
                            </button>
                        </div>
                    </form>
                </div>

                <div className="text-muted">
                    Creating on - {new Date().toLocaleDateString()}
                </div>
            </div>
        </MainScreen>
    );
}

export default CreateNote;