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

        <div className='icon'>
            <FontAwesomeIcon icon={icon} className='fa-5x' onClick={changeShow}/>
        </div>
        <div>
            {show &&
            <div className='icon-options-wrapper'>
                <div className='icon selectable'>
                    <FontAwesomeIcon icon={icons[0].icon} className='fa-5x' onClick={() => changeIcon(icons[0].icon)}/>
                </div>

                <div className='icon selectable'>
                    <FontAwesomeIcon icon={icons[1].icon} className='fa-5x'
                                     onClick={() => changeIcon(icons[1].icon)}/>
                </div>

                <div className='icon selectable'>
                    <FontAwesomeIcon icon={icons[2].icon} className='fa-5x'
                                     onClick={() => changeIcon(icons[2].icon)}/>
                </div>

                <div className='icon selectable'>
                    <FontAwesomeIcon icon={icons[3].icon} className='fa-5x'
                                     onClick={() => changeIcon(icons[3].icon)}/>
                </div>
            </div>}
        </div>
    </div>
};