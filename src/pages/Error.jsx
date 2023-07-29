import React from 'react'
import { Link,useRouteError} from 'react-router-dom'

const Error = () => {
    const error= useRouteError()
    console.log(error);
    if(error.status===404){
        return(
            <section>
            <img src="" alt="" />
            <Link to={"/"}>Back to Home</Link>
        </section>
        
        )
    }
  return (
<section>
    <div>
        <h1>ohhh...something went wrong...?</h1>
    </div>
</section>
  )
}

export default Error