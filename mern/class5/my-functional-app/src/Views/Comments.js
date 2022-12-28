import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import CommentsList from "../Components/CommentsList";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    const sendComment = (e) => {
        e.preventDefault();
        setComments([comment, ...comments]);
        setComment('');
    }

    return (
        <div className="comments-container">
            <form onSubmit={sendComment} action="">
                <label htmlFor="">¿Qué estás pensando?</label>
                <textarea name="comment" value={comment} id="" cols="30" rows="10" onChange={(e) => setComment(e.target.value) }></textarea>
                <Button variant="primary" type="submit">Comentar!</Button>
            </form>
            <CommentsList comments={comments}/>
        </div>
    )
}

export default Comments;