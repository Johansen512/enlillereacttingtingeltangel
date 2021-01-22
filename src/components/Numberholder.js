/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';


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
        setCurrenttable (0)
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

        
    addOne > 9 && setTimeout(() => {setComparenumb ("Så mega-flot ... vælg en ny tabel")}, 1000);
    
    console.log (addOne)
   
    
    

}

function answer2 (){
    setComparenumb ("forkert")
    setTimeout(() => {  setComparenumb (null); }, 500);
    
}

const container = css`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

margin:0;
`;

const display = css`

width: 100rem;
height: 30rem;
display:flex;
flex-direction:column;
align-content: center;
justify-content:center;
margin: 10px 5px;
padding:10px;


`;

const compare = css`
grid-column: 6/7;
grid-row: 4/5;

margin:5px;
padding: 0;
height: 100px;


`





const ball = css`
grid-column: 6/7;
grid-row: 2/3;
display:flex;
width: 10rem;
height: 10rem;
border-radius:50%;
background-color: #3a3abe;
align-self:center;
align-content:center;
justify-content:center;



`;

const ballnumber = css`
font-size: 3.4rem;



`;

   const testbuttonWrapper = css`
   
    grid-column: 1/10;
    grid-row: 5/6;
    margin:0;
   
   
   
   `;
    
    

    const testbutton = css`
    
    font-size: 1.3rem;
    width: 8rem;
     height: 5rem;
     border: 8px solid #3a799d;
    background-color: #4c93bc;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius:30%;
    box-shadow: 0.25rem 0.25rem 0.8rem;
    outline: 0;
    `;

const testbutton2 = css`

display:flex;
align-items:center;
justify-content:center;
grid-column: 2/3;
grid-row: 1/2;
font-size: 1rem;
width: 8rem;
height: 5rem;
border: 8px solid #3a799d;
background-color: #4c93bc;
padding: 0.5rem;
margin: 0.5rem;
border-radius:30%;
box-shadow: 0.25rem 0.25rem 0.8rem;
outline: 0;

`;

const byline = css`
 grid-column: 1/10;
    grid-row: 7/8;
    padding:1rem;
    margin:1rem;
    font-size: 1.3rem;

`;




    return ( 
        <div css={container}>
 <button css={testbutton2} onClick={() => (setNewtable(true) )} ><p>VÆLG EN NY TABEL </p></button>
            <section css={display}>

              

        <Zoom><h1> {tablenumber}-tabellen </h1> </Zoom>

       <div css={ball}><Tada><h2 css={ballnumber}>{mixed[currenttable]}</h2></Tada></div>

        {/*<div>{mixed.map((mix, index) =>( <h2 key={index}>{mix}</h2>))}</div>*/}

       <div css={compare}><h2 > {comparenumb}</h2></div> 

        </section>
        

        <div css={testbuttonWrapper}>
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

<p css={byline}>Vi leger med tabeller ©johansenkoder version 1.0</p>
</div>

     );
}
 
export default Numberholder;