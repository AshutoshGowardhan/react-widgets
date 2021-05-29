import React from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
    const renderedOptions = options.map((options)=> {
        if(options.value === selected.value) {
            return null;
        }
        return (
            <div 
            onClick={()=>onSelectedChange(options)}
            key={options.value} className='item'>
                {options.label}
            </div>
        );
    })
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;