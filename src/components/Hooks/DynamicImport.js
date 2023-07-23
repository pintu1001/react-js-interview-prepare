// import { Add } from './Add';


// export default function DynamicImport() {
//     console.log(Add(5, 2));
// }

import("./Add").then((math) => {
    console.log(math.Add(5, 5));
})