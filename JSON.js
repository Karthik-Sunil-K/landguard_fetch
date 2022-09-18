const baseURL ="https://blr1.blynk.cloud/external/api/get?token=IVVXZWTMfbZL3hjpxkeZO1OLyWrBQTne&v0&v1&v2&v3";
const statement1 = document.querySelector('.advice1')
const statement2 = document.querySelector('.advice2')
const statement3 = document.querySelector('.advice3')
const statement4 = document.querySelector('.advice4')
const statement5 = document.querySelector('.advice5')

const button = document.querySelector('.btn-click')

const fetchData = async () => {
    const response = await fetch(`${baseURL}`)
    const data = await response.json()
    return data
}


const displayv0 =  async () => {
    statement1.innerHTML = `<p>fetching...</p>`
    const result =  await fetchData();
    statement1.innerHTML = `<h1>${result.v0}</h1>`
}
const displayv1 =  async () => {
    statement2.innerHTML = `<p>fetching...</p>`
    const result =  await fetchData();
    statement2.innerHTML = `<h1>${result.v1}</h1>`
}
const displayv2 =  async () => {
    statement3.innerHTML = `<p>fetching...</p>`
    const result =  await fetchData();
    statement3.innerHTML = `<h1>${result.v2}</h1>`
}
const displayv3 =  async () => {
    statement4.innerHTML = `<p>fetching...</p>`
    const result =  await fetchData();
    statement4.innerHTML = `<h1>${4100 - result.v3}</h1>`
}
const RiskProb= async()=>{
    const result= await fetchData();
    var temp = 26
    var vibration = result.v2;
    var soil = 4100 - result.v3;
   if(temp<10 && vibration > 300 && soil>3276 && soil <3685){
    var message = `<span style="color:green;"class="text-capitalize font-weight-bolder">alert</span>`;
   }
   else if(temp<26 && vibration>250 &&  soil< 75){
    var message = `<span style="color:orange;"class="text-capitalize font-weight-bolder">alert</span>`;
   }else{
    var message = `<span style="color:green;"class="text-capitalize font-weight-bolder">alert</span>`;
    
   }
   statement5.innerHTML = `<h1>${message}</h1>`
    
}
button.addEventListener('click', displayv0)
button.addEventListener('click', displayv1)
button.addEventListener('click', displayv2)
button.addEventListener('click', displayv3)
button.addEventListener('click', RiskProb)


const messageURL = 'http://127.0.0.1:3002/sendalertmessage';
const sendMessage = async() => {
    console.log("Here")
    const response = await fetch(`${messageURL}`)
}