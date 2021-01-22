import React, {useEffect} from 'react';

function Question (props){
    //send next question if 
    useEffect(()=>{},[props.line])
    return (
        <section>
            <h2>Tap the button in the lower hand corner and say: </h2>
            <div className='question'>
            <p>{props.line}</p>
        </div>
        </section>
    )
}

export default Question;