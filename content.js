async function getData(){
    const data = await fetch('data.json')
    .then(res => res.json ())
    return data
  }
  
const run = async ()=>{
const contenData = await getData()

const content = document.querySelector('section#content')

for (let i = 0; i <contentData.lenght; i++) {
    content.innerHTML += 
    `<div class="card">
    <img src="${contenData[i].image}" />
    <span class="capitalize">${contenData[i].title}</span>
    <span class="capitalize">${contenData[i].description}</span>
    </div> `
}
}
run()
