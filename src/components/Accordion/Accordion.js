import React, {useState, useEffect, useRef} from 'react'
import Chevron from './chevron.svg'
import "./Accordion.css" 

export default function Accordion({ header, paragraph}) {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState(0);

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    console.log(toggle);
    return (
        <div className="accordion">

            <button 
            onClick={toggleState}
            className="accordion-visible">
                <span>{header}</span>
                <div className="chevron-box">    
                    <img 
                    className={toggle && "active"}
                    src={Chevron} alt="chevron" />
                </div>
            </button>
            
            <div 
            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >
                <p aria-hidden={toggle ? "true" : "false"}>
                    {paragraph}
                </p>
                <div class="flex items-center px-3 pt-2 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#kitten</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#love</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pet</span>
                </div>
            </div>
            
        </div>
    )
}