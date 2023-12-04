function newImage(src) {
    let img = document.createElement("img");
    img.src = src;
    document.body.append(img);
    return img
  }