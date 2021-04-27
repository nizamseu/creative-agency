import React from 'react';
import { Link } from 'react-router-dom';

const SidebarOption = ({path,text}) => {
    return (
        <div>
            <Link to={path}> {text} </Link>
            
        </div>
    );
};

export default SidebarOption;