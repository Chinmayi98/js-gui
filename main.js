const updateWithAdd = async (event) => {
  
   {
    
    const k = parseInt(document.querySelector('#depth').value)
    const i = parseInt(document.querySelector('#width').value)
    const j = parseInt(document.querySelector('#height').value)
    const ans = k*i*j

    document.querySelector('#result').innerHTML = "volume is " +ans
  }
}

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})

