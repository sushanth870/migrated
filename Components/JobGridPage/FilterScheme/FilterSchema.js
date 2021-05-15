import React, {useState,useEffect} from 'react';
import FilterComponent from '../FilterComponent/FilterComponent';
import styles from "../../../styles/ComponentsStyles/FilterSchema.module.css";
import stylesB from "../../../styles/JobGrid/Job_Grid.module.css";
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io";

function FilterScheme(props) {
    const isActiveNeeded = (props.activeBG!=undefined)?true:false;
    const [readMore,setReadMore]=useState(false);
    const [filterOpen,setFilterOpen]=useState(false);
    
    // content of show less....
    const ExtraContent = (temp_props)=>{
        return(
            <div className={styles.animate}>
                {
                    temp_props.more_filters.map(option => (
                        <FilterComponent className='mb-2 mt-1' name={option.name} value={option.value} />
                    ))
                }
            </div>
        )
    }
    const linkName=readMore?'Read Less':`${props.more_filters!=undefined && props.more_filters.length} more`;
    const toggleFilterOpen=()=>{
        if(filterOpen){
            setReadMore(false);
        }
        setFilterOpen(!filterOpen);
    }
    //  Every Filter Component called here....
    return (
        <div key={props.sr} className={`${stylesB.filterScheme} ${(isActiveNeeded && filterOpen) && styles.act }`}>
            <p className={`${stylesB.Scheme_head} m-0`} onClick={toggleFilterOpen}>{props.name}{filterOpen?<IoIosArrowUp/>:<IoIosArrowDown/>}</p>
            
                {
                    <div style={{paddingBottom:'10px',display:!filterOpen?'none':'unset'}} >
                    {
                        props.options.map(option => (
                            <FilterComponent className='mb-2 mt-1' name={option.name} value={option.value} />
                    ))
                    }
                    {readMore && props.more_filters!=undefined && <ExtraContent more_filters={props.more_filters} />}
                    <a className="read_more_link" onClick={()=>{setReadMore(!readMore)}}><span className={styles.underline}>{props.more_filters!=undefined &&linkName}</span></a>  
                    </div>
                }
        </div>
    )
}

export default FilterScheme
