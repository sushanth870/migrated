import React, {useState} from 'react'
import { GoCheck } from "react-icons/go";
import stylesA from "../../../styles/JobGrid/Job_Grid.module.css"

function FilterComponent(props) {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState('');
    return (
        <div className={`${stylesA.filter_head} ${props.className} `}>
            <h6 className="filterOption mb-0" style={{color:'#595959',fontWeight:active?700:500}}>{props.name}</h6>
            <div className={`${stylesA.checkBox} ${active?stylesA.active:null}`} onClick={() => {setActive(!active); setValue(props.name);}} style={{backgroundColor: active ? '#EC1F28' : 'rgba(233,233,233,1)' }} ><GoCheck style={{'& svg':{opacity:active?1:0}}} /></div>
        </div>
    )
}

export default FilterComponent
