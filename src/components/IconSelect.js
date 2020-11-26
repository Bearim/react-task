import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Icons as icons} from "../common/Icons";

export const IconSelect = props => {

    const [show, setShow] = useState(false);

    const changeShow = () => setShow(!show);

    const [icon, setIcon] = useState(props.default);

    const changeIcon = newIcon => {
        setIcon(newIcon);
        props.onChange(newIcon);
        changeShow();
    };

    return <div>

        <div className='Icon'>
            <FontAwesomeIcon icon={icon} className='fa-5x' onClick={changeShow}/>
        </div>
        <div>
            {show &&
            <div className='Icon_optionsWrapper'>
                {icons.map(icon => (
                <div className='Icon selectable'>
                    <FontAwesomeIcon icon={icon.icon} className='fa-5x' onClick={() => changeIcon(icon.icon)}/>
                </div> ))}
            </div>}
        </div>
    </div>
};