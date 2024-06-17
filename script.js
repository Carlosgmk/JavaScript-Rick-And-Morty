const caracterId = document.getElementById('caracterId')
const botaoGo = document.getElementById('btn-go')
const content = document.getElementById('content')
const image = document.getElementById('img')

const fetchApi = (value) =>{
     const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
     .then((res) => res.json())
     .then((data) => {
          console.log(data)
          return data
     })

     return result
}

const keys = ['name', 'status', 'species', 'gender', 'origin', 'image', 'episode']

const buildResult = (result) =>{
     const newObject = {}
     keys.map((key)=> document.getElementById(key))
     .map((elem)=>{
          elem.checked && (newObject[elem.name] = result[elem.name])
     })

     return newObject;
}



botaoGo.addEventListener('click', async (event) =>{
     event.preventDefault()
     const result = await fetchApi(caracterId.value)
     // content.textContent = `${JSON.stringify(result, undefined, 2)}`;
     content.textContent = `${JSON.stringify(buildResult(result), undefined, 2)}`;
     console.log(buildResult(result))
     image.src = `${result.image}`;
})