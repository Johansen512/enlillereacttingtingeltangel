/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Randomtable = () => {
let myNumb = [1,2,3,4,5,6,7,8,9,10]
    const mixedResults = myNumb.sort(() => Math.random() - 0.5);
/*const endResults = mixedResults.slice(0, 16)

console.log(endResults);*/

console.log(mixedResults[0]);

let tablenumb = mixedResults[0]
    return (  

        <h1>{tablenumb}</h1>
    );
}
 
export default Randomtable;