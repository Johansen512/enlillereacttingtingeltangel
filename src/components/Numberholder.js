/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';


const Numberholder = () => {

    const [tablenumber, setTablenumber] = useState (0);
    const [mixed, setMixed] = useState ([]);
    const [comparenumb, setComparenumb] = useState (null);
    const [currenttable, setCurrenttable] = useState (0);
    const [newtable, setNewtable] = useState (true)
    
    
    
    
    

    useEffect (() =>{
        if (newtable) {
        let myNumb = [1,2,3,4,5,6,7,8,9,10]
        let mixedResults = myNumb.sort(() => Math.random() - 0.5);
        setTablenumber(mixedResults[0])
        setNewtable(false)
    }

    },[newtable])

    useEffect (()=> {
        if (tablenumber) {
            
            let myNumber = [tablenumber*1,tablenumber*2,tablenumber*3,tablenumber*4,tablenumber*5,tablenumber*6,tablenumber*7,tablenumber*8,tablenumber*9,tablenumber*10]
            setMixed (myNumber.sort(() => Math.random() - 0.5))}
           
}, [tablenumber])



function clickeffect (ev) {

console.log (`Button ${ev.currentTarget.value} clicked`)
let answer = parseInt(ev.currentTarget.value)

console.log (answer)
console.log (mixed)


answer === mixed[currenttable] ? answer1() : answer2()
}



function answer1 (){
    let addOne = currenttable+1
    setComparenumb ("Rigtigt")
    
    setTimeout(() => {  
        setComparenumb (null); 
        setCurrenttable (addOne)
    
         }, 1000)  ;

        
    addOne > 9 && setTimeout(() => {  setComparenumb ("Rigtigt ... vælg en ny tabel")}, 1000);
   
        
    

}

function answer2 (){
    setComparenumb ("forkert")
    setTimeout(() => {  setComparenumb (null); }, 500);
    
}


const display = css`
border: black 4px solid;
width: 100rem;
height: 18rem;


`;

   
    
    

    const testbutton = css`
    font-size: 1.3rem;
    
     width: 8rem;
     height: 5rem;
     border: 8px solid #3a799d;
    background-color: #4c93bc;
    overflow:hidden;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius:30%;
    `;

const testbutton2 = css`
font-size: 1rem;

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
 <button css={testbutton2} onClick={() => setNewtable(true)} ><p>VÆLG EN NY TABEL </p></button>
            <section css={display}>

               

        <h1> {tablenumber}-tabellen </h1> 

        <h3>{mixed[currenttable]}</h3>

        {/*<div>{mixed.map((mix, index) =>( <h2 key={index}>{mix}</h2>))}</div>*/}

        <h2> {comparenumb}</h2>

        </section>
        

        
<button value={tablenumber *1} css={testbutton} onClick={clickeffect}>{tablenumber} x  1</button>
<button value={tablenumber *2} css={testbutton} onClick={clickeffect}>{tablenumber} x  2</button>
<button value={tablenumber *3} css={testbutton} onClick={clickeffect}>{tablenumber} x  3 </button>
<button value={tablenumber *4} css={testbutton} onClick={clickeffect}>{tablenumber} x  4</button>
<button value={tablenumber *5} css={testbutton} onClick={clickeffect}>{tablenumber} x  5</button>
<button value={tablenumber *6} css={testbutton} onClick={clickeffect}>{tablenumber} x  6</button>
<button value={tablenumber *7} css={testbutton} onClick={clickeffect}>{tablenumber} x  7</button>
<button value={tablenumber *8} css={testbutton} onClick={clickeffect}>{tablenumber} x  8</button>
<button value={tablenumber *9} css={testbutton} onClick={clickeffect}>{tablenumber} x  9</button>
<button value={tablenumber *10}css={testbutton} onClick={clickeffect}>{tablenumber} x 10</button>
</div>


     );
}
 
export default Numberholder;