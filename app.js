import { Client }
from "https://cdn.jsdelivr.net/npm/@gradio/client/dist/index.min.js";

const SPACE =
"Jammy908/Motionai";

const btn =
document.getElementById(
"generateBtn"
);

const loader =
document.getElementById(
"loader"
);

btn.onclick = async ()=>{

 const prompt =
 document.getElementById(
 "prompt"
 ).value;

 const style =
 document.getElementById(
 "style"
 ).value;

 loader.style.display =
 "block";

 try{

 const client =
 await Client.connect(
 SPACE
 );

 const result =
 await client.predict(
 "/enhance_prompt",
 {
   prompt,
   style
 }
 );

 document
 .getElementById(
 "result"
 )
 .value =
 result.data;

 }
 catch(err){

 alert(
 "Error: "
 + err.message
 );

 }

 loader.style.display =
 "none";

};

document
.getElementById(
"copyBtn"
)
.onclick=()=>{

 navigator.clipboard.writeText(

 document.getElementById(
 "result"
 ).value

 );

 alert("Copied");

};
