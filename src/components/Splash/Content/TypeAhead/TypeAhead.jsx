 import React from 'react';
 import {Typeahead} from 'react-bootstrap-typeahead';
 import './TypeAhead.css';

 function TypeAhead () {
    return (
        <React.Fragment>
            <Typeahead style={{outline:'#571846'}} color="info" className = "Typeahead-Search"
                labelKey="name"
                var Australia = "Australia"
                options= {["Australia"]}
                placeholder="Choose Subject"
             />
         </React.Fragment>
     )

 }

 export default TypeAhead;