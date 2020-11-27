const apiKey = 'xUFDck609hDjhsKoYgDee1yJaTWAoPF6';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then( (resp) => {
  return resp.json()
})
.then( ({data}) => {
    const url = data.images.original.url;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch((error)=>{
  console.log(error);
})
