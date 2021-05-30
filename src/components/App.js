import React, {useState} from 'react';
import Accordian from './Accordian';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';


const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use react creating components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue',
    },
];

export default () => {
    const [selected,setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div>
        <br/>
        {/* <Accordian items={items}/> */}
        {/* <Search /> */}
        {/* <button onClick={()=> setShowDropdown(!showDropdown)}>Toggel Downdown</button>
        {showDropdown ? 
        <Dropdown
        selected={selected}
        onSelectedChange={setSelected} 
        options={options}/>
         : null } */}

         <Translate />
        </div>
    )
}