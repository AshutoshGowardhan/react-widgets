import React from 'react';
import Accordian from './Accordian';
import Search from './Search';
import Dropdown from './Dropdown';


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
]

export default () => {
    return (
        <div>
        <br/>
        {/* <Accordian items={items}/> */}
        {/* <Search /> */}
        <Dropdown options={options}/>
        </div>
    )
}