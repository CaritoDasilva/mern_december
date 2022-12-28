import React from "react";

const CommentsList = (props) => {
    const { comments } = props;

    return (
        <div>
            { comments.length > 0 && comments.map((comment, idx) => (
                <div key={idx}>
                    <h3>{comment}</h3>
                </div>
            )) }
        </div>
    )

}

export default CommentsList;