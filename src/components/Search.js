import React, {useState, useEffect} from 'react';

const Search = () => {
    const [term,setTerm] = useState('');
    useEffect(()=>{
        console.log(term);
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