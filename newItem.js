function newItem(src) {
    let item = newImage(src)
    addToInventory(item, src)
    return item
  }