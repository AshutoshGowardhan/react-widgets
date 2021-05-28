import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term,setTerm] = useState('');
    useEffect(()=>{
        const searchResult = async () => {
            await axios.get();
        }
    },[term])
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter input text</label>
                    <input value={term} 
                    onChange={e=>setTerm(e.target.value)}className="input"></input>
                </div>
            </div>
        </div>
    );
};

export default Search