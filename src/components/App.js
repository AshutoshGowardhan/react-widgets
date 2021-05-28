import React from 'react';
import Accordian from './Accordian'


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

export default () => {
    return (
        <div>
        <br/>
        <Accordian items={items}/>
        </div>
    )
}