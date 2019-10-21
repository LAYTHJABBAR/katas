const urlDecode = function(text) {
  decodeitem = {};
  tex = text.split('&');
  tex.forEach((u,i) => {
    tex[i] = u.split('=');
    Object.defineProperty(decodeitem, tex[i][0], {value: tex[i][1], enumerable: true, writable: true});
    for (let p in decodeitem){
      let value = decodeitem[p];
      Object.defineProperty(decodeitem, p, {value: value.replace(/%20/g, ' '), enumerable: true});
    }
  });

  return decodeitem;

}
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);