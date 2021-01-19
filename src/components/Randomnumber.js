/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Randomnumber = () => {
let myNumb4 = [4*1,4*2,4*3,4*4,4*5,4*6,4*7,4*8,4*9,4*10]
    const mixed = myNumb4.sort(() => Math.random() - 0.5);
/*const endResults = mixedResults.slice(0, 16)

console.log(endResults);*/

console.log(mixed[0]);
    return (  

        <h1>{mixed[0]}</h1>
    );
}
 
export default Randomnumber;