import React from 'react';
import logo from './logo.svg';
import './Blob.css';

function Blob(props) {
    return (
        <div className="Blob">
            Add a `showLogo` prop into the `Blob` component that determines whether or not to display the logo.<br />
            {props.showLogo && <img src={logo} className="Blob__logo" alt="logo" />}
        </div>
    );
}
export default Blob;
