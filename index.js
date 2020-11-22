document.addEventListener('click', (evt) => {
  const el = document.getElementById('el')
  if (evt.target === el) {
    let x = getRandomInt()
    let y = getRandomInt()
    el.style.transform = `translate(${x}%, ${y}%)`
    setTimeout(()=>{
      el.style.transform = `translate(${y}%, ${x}%)`
      let color = Math.random().toFixed(2)*100
      let color2 = Math.random().toFixed(2)*100
      let color3 = Math.random().toFixed(2)*100
      el.style.background = `rgb(${color*2}, ${color2*2}, ${color3*2})`
    },410)
    
    //по клику перемещаем в рандомное место
  }
})

const getRandomInt = () => {
  let count = Math.random().toFixed(2)
  count *= 280
  return count
}
