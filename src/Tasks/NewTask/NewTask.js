import React from 'react';

function NewTask(props, {key}) {
    return (
        <li key={key}>{props.children}</li>
    );
}

export default NewTask;