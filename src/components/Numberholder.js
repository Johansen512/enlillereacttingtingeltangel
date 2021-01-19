/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const Numberholder = () => {

    let myNumb = [1,2,3,4,5,6,7,8,9,10]
    const mixedResults = myNumb.sort(() => Math.random() - 0.5);
    let tablenumb = mixedResults[0]
    const tabelnummer = tablenumb;

    

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
function test (e) {

    let myNumb4 = [4,8,12,16,20,24,28,32,36,40]
    const mixed = myNumb4.sort(() => Math.random() - 0.5);

    console.log ("hephephep")

    console.log (tabelnummer)
    console.log (mixed[0])

    console.log (mixed[0] * tabelnummer)

   
    
}



    return ( 

        <div>
<button css={testbutton} onClick={test}>{tabelnummer} x  1</button>
<button css={testbutton} onClick={test}>{tabelnummer} x  2</button>
<button css={testbutton} onClick={test}>{tabelnummer} x  3 </button>
<button css={testbutton} onClick={test}>{tabelnummer} x  4</button>
<button css={testbutton} onClick={test}>{tabelnummer} x  5</button>
<button css={testbutton} onClick={test}>{tabelnummer} x  6</button>
<button css={testbutton} onClick={test}>{tabelnummer} x  7</button>
<button css={testbutton} onClick={test}>{tabelnummer} x  8</button>
<button css={testbutton} onClick={test}>{tabelnummer} x  9</button>
<button css={testbutton} onClick={test}>{tabelnummer} x 10</button>
</div>

     );
}
 
export default Numberholder;