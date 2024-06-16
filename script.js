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

botaoGo.addEventListener('click', async (event) =>{
     event.preventDefault()
     const result = await fetchApi(caracterId.value)
     content.textContent = `${JSON.stringify(result, undefined, 2)}`;
     image.src = `${result.image}`;
})