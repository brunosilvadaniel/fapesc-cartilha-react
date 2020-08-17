function shuffle(array){
  const _array = array.slice(0)
  for(let i = 0; i < array.length -1; i++){
    let randomIndex = Math.floor(Math.random() * (i + 1))
    let temp = _array[i]
    _array[i] = _array[randomIndex]
    _array[randomIndex] = temp
  }

  return _array
}

export default function initializeDeck(){
  let id = 0 
  const cards = ['Ods1','Ods2','Ods3','Ods4','Ods5','Ods6','Ods7','Ods8','Ods9','Ods10','Ods11','Ods12','Ods13','Ods14','Ods15','Ods16','Ods17'].reduce((acc, type) =>{
    acc.push({
      id: id++,
      type
    })
    acc.push({
      id: id++,
      type
    })
    return acc
  }, [])

  return shuffle(cards)
}