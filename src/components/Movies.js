import React from 'react';

const Movies = (props) => {
return(
<div>

<p>My favourite film is {props.title} it was made in {props.year} and stars {props.actor}.</p>    
</div>


)
}

export default Movies;