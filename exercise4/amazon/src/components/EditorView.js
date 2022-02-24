import React from 'react'

export default function EditorView(props) {
    return (
        <div>
            <h1> EditorView </h1>
            {
                props.productlist.map(p => <div>{p.title} </div>)
            }


        </div>
    )
}