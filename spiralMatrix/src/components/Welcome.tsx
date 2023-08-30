import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Welcome() {
  const navigate = useNavigate();
return(
<div className="row bg-img-full" >
	<div className="align-self-center text-center text-black col-md-8 offset-md-2">
		<div className="lc-block mb-4">
			<div editable="rich">
				<h1 className="display-1 fw-bolder">Fibonacci Spiral Matrix</h1>
			</div>
		</div>

		<div className="lc-block">
			<div editable="rich">
				<p className="lead">This Application generates a matrix filled with fibonacci numbers and ordered like a spiral!</p>
                
			</div>
		</div>

		<div className="lc-block">
            <button type='submit' className='Submit ' onClick={() => {navigate("/dashboard")}}>
          Try it!
        </button>
		</div>
	</div>
</div>
 
 
      
)

}






