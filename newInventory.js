function addToInventory (item, src) {
    item.addEventListener('click', function () {
      item.remove()
      let inventoryItem = document.createElement('img')
      inventoryItem.src = src
      returnedInventory.append(inventoryItem)
    })
    console.log(addToInventory)
  }
  
  function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
  }