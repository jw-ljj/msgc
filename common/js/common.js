// hash>kw
$.extend({
  hash(name){
    const params=new URLSearchParams(location.hash.substring(1))
    const kw=params.get(name)
    return kw
  }
})