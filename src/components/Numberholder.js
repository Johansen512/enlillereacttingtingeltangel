/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';


const Numberholder = () => {

    const [tablenumber, setTablenumber] = useState (null)
    const [mixed, setMixed] = useState ([]);
    const [comparenumb, setComparenumb] = useState (null)
    const [buttvalue, setButtvalue] = useState (null)
    

    useEffect (() =>{
        let myNumb = [1,2,3,4,5,6,7,8,9,10]
        let mixedResults = myNumb.sort(() => Math.random() - 0.5);
        setTablenumber(mixedResults[0])

    },[])

    useEffect (()=> {
        if (tablenumber) {
            
            let myNumber = [tablenumber*1,tablenumber*2,tablenumber*3,tablenumber*4,tablenumber*5,tablenumber*6,tablenumber*7,tablenumber*8,tablenumber*9,tablenumber*10]
            setMixed (myNumber.sort(() => Math.random() - 0.5))}

}, [tablenumber])

function testeffect (ev) {

   console.log (`Button ${ev.currentTarget.value} clicked`)

 

}

   
    
    

    const testbutton = css`
    font-size: 1.3rem;
     margin: 0.5rem;
     padding: 0.5rem;
     width: 8rem;
     height: 5rem;
     border: 8px solid #3a799d;
    background-color: #4c93bc;
    overflow:hidden;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius:30%;
    `;




    return ( 
        <div>

        <h1> {tablenumber}-tabellen </h1> 

        <h2>{mixed[0]} </h2>

        

        
<button value={tablenumber *1} css={testbutton} onClick={testeffect}>{tablenumber} x  1</button>
<button value={tablenumber *2} css={testbutton} onClick={testeffect}>{tablenumber} x  2</button>
<button value={tablenumber *3} css={testbutton} onClick={testeffect}>{tablenumber} x  3 </button>
<button value={tablenumber *4} css={testbutton} onClick={testeffect}>{tablenumber} x  4</button>
<button value={tablenumber *5} css={testbutton} onClick={testeffect}>{tablenumber} x  5</button>
<button value={tablenumber *6} css={testbutton} onClick={testeffect}>{tablenumber} x  6</button>
<button value={tablenumber *7} css={testbutton} onClick={testeffect}>{tablenumber} x  7</button>
<button value={tablenumber *8} css={testbutton} onClick={testeffect}>{tablenumber} x  8</button>
<button value={tablenumber *9} css={testbutton} onClick={testeffect}>{tablenumber} x  9</button>
<button value={tablenumber *10}css={testbutton} onClick={testeffect}>{tablenumber} x 10</button>
</div>

     );
}
 
export default Numberholder;