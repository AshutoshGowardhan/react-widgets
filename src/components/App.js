import React, { useState } from 'react';
import Accordian from './Accordian';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';

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

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Route path='/'>
                <Accordian items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    label="Select a color"
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options} 
                    />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    );
};

export default App;