import React from 'react';

export default function Comment ({ comment } ){
    return (
        <div>
            <p>{comment.text} <b>{comment.id}</b>   </p>
        </div>
    )
}