import React from 'react';

const Link = ({className, href, children}) => {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({},"",href)
    }
    return (
        <div onClick={onClick} className={className} href={href}>{children}</div>
    )
}

export default Link;