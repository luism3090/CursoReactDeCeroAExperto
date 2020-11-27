// --------- usando promesas --------------

const urlImagenPromesa = () =>{

const promesa = new Promise ( (resolve,reject) => {

  resolve('http://ajsdfsdfsksd.com');

});

  return promesa;

}

urlImagenPromesa().then((res)=>{
  console.log(res);
});

 // ------------ usando async -----------------

const getNombre = async () => {
  return "José Perez León";
}

getNombre().then(console.log);

 // ------------ otro ejemplo -----------------

const getImagen = async () => {

    try {
    
      const apiKey = 'xUFDck609hDjhsKoYgDee1yJaTWAoPF6';

      const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

      const {data} = await resp.json();

      const {url} = data.images.original;

      // const url = data.images.original.url;

      const img = document.createElement('img');

      img.src = url;

      document.body.append(img);

    } catch (error) {
      console.error(error);
    }
}

getImagen();