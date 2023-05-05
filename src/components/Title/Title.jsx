import React from 'react';
import './Title.scss'
function Title({text}) {
    return (
        <section className='title'>
            {text ? text.toUpperCase() : 'Loading...'}
        </section>
    );
}

export default Title;