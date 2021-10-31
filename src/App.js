
import './App.css';

/* 
https://example.com is a mocked service - it can be accessed only in the Codility UI.
The mocked endpoint https://example.com/api/items returns an array of strings. The array's length is at most <strong>10</strong>.
Assume that a request sent to the mocked endpoint https://example.com/api/items never fails.
The "Preview" tab will display your component. You can use it for testing purposes. In preview
mode, the API is mocked up, and will always return the same results, but in a random order. Also,
the preview page imports a CSS spreadsheet from Bulma (v0.7.5) to give neat styling.
Design/styling is not assessed and will not affect your score. You should focus only on
implementing the requirements.
The following imports are allowed:

react (v16.9.0),
classnames (v2.2.6),
lodash (v4.17.14),
axios (v0.19.2).


Use console.log and console.error for debugging purposes via your browser's developer tools.
<strong>When using Axios you are expected to use params argument and not build the URL by hand (<a href="https://github.com/axios/axios#request-config">documentation</a>)

*/

import React from 'react';
//import classnames from 'classnames';
// you should import `lodash` as a whole module
import _ from 'lodash';
import axios from 'axios';
import {useState, useCallback} from 'react';

const ITEMS_API_URL = 'http://localhost:3002/items';
const DEBOUNCE_DELAY = 1000;

// the exported component can be either a function or a class

export default function App({item}) {

  const [countries, setCountries] = useState([]);
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFn = useCallback(_.debounce(loadCuntries, DEBOUNCE_DELAY), []);

  function loadCuntries (inputValue) {

    setText(inputValue);
    setIsLoading(true);


    axios.get(ITEMS_API_URL).then((response) => {
      setCountries(response.data);
      console.log(response.data);
      setIsLoading(false)
    }); 

  }

  function handleChange (event) {
    setText(event.target.value);
    debounceFn(event.target.value);
};

  return (
    <div className="wrapper" >
      <div className={isLoading ? 'control is-loading':'control' }>
        <input type="text" className="input" value={text} onChange={(e)=>handleChange(e)} />
      </div>
      {
       countries.length >1 ?  <div className="list is-hoverable" >
        {
          countries.map((country, index)=> {
            return <a key={index} onClick={(el)=>console.log(country)} className="list-item"> {country}</a>
          })
        }
        </div> : null
      }

     
    </div>
  );
}