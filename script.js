const characterId = document.getElementById('caracterId')
const botaoGo = document.getElementById('btn-go')
const content = document.getElementById('content')
const image = document.getElementById('img')
const containerResult = document.getElementById('result-style')
const reset = document.getElementById('reset')

const fetchApi = (value) =>{
     const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
     .then((res) => res.json())
     .then((data) => {
          console.log(data)
          return data
     })

     return result
}

const keys = ['name', 'status', 'species', 'gender', 'origin', 'episode']
const newKeys = {
     name: 'Nome',
     status: 'Status',
     species: 'Espécie',
     gender: 'Gênero',
     origin: 'Planeta',
     episode: 'Episódios'

}

const buildResult = (result) =>{
     return keys.map((key)=> document.getElementById(key))
     .map((elem)=>{
          if(elem.checked === true && (Array.isArray(result[elem.name])) == true){
               const ArrayResult = result[elem.name].join('\r\n')
               console.log(ArrayResult)
               const newElement = document.createElement('p')
               newElement.innerHTML = `${newKeys[elem.name]}: ${ArrayResult}`
               content.appendChild(newElement)

       }else if(elem.checked === true && (elem.name === 'origin')){
          const newElement = document.createElement('p')
          newElement.innerHTML = `${newKeys[elem.name]}: ${result[elem.name].name}`
          content.appendChild(newElement)

      }else if(elem.checked === true && typeof(result[elem.name]) !== 'object'){
               const newElement = document.createElement('p')
               newElement.innerHTML = `${newKeys[elem.name]}: ${result[elem.name]}`
               content.appendChild(newElement)
       }
     })
}


botaoGo.addEventListener('click', async (event) =>{
     event.preventDefault()

     if(characterId.value === ''){
          return content.innerHTML= 'É necessário fazer um filtro.'
     }

     const result = await fetchApi(characterId.value)
     if(content.firstChild === null){
          containerResult.className = 'result-style' 
          image.src = `${result.image}`;
          buildResult(result)
     } else {
          content.innerHTML = ''
          containerResult.className = 'result-style' 
          image.src = `${result.image}`;
          buildResult(result)
     }

    
})

reset.addEventListener('click', () => location.reload())