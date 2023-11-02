const html = document.documentElement;
const body = document.createElement('body');

const bodyStr = `
<body>
  <main class="mainClass check item">         
     <div id="myDiv">
         <p>First paragraph</p>           
     </div>
 </main> 
</body>
`;


body.innerHTML = bodyStr;
html.appendChild(body);