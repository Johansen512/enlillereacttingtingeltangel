/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const Numberholder = () => {
function pickanumber(){
    let myNumb = [1,2,3,4,5,6,7,8,9,10]
    let mixedResults = myNumb.sort(() => Math.random() - 0.5);

    return mixedResults[0]
}
   
    const tabelnummer = pickanumber()
    /*const tabelnummer = tablenumb;*/
    console.log (tabelnummer)
    
    let myNumber = [tabelnummer*1,tabelnummer*2,tabelnummer*3,tabelnummer*4,tabelnummer*5,tabelnummer*6,tabelnummer*7,tabelnummer*8,tabelnummer*9,tabelnummer*10]
    console.log (myNumber)
    
    let mixed = myNumber.sort(() => Math.random() - 0.5);

   console.log ("hephephep")
    
  
   console.log (mixed)
  
   

   

    

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


console.log (tabelnummer)

    return ( 
        <div>

        <h1> {tabelnummer}-tabellen </h1> 

        

        
<button css={testbutton} >{tabelnummer} x  1</button>
<button css={testbutton} >{tabelnummer} x  2</button>
<button css={testbutton} >{tabelnummer} x  3 </button>
<button css={testbutton} >{tabelnummer} x  4</button>
<button css={testbutton} >{tabelnummer} x  5</button>
<button css={testbutton} >{tabelnummer} x  6</button>
<button css={testbutton} >{tabelnummer} x  7</button>
<button css={testbutton} >{tabelnummer} x  8</button>
<button css={testbutton} >{tabelnummer} x  9</button>
<button css={testbutton} >{tabelnummer} x 10</button>
</div>

     );
}
 
export default Numberholder;