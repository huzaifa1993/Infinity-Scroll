const count = 10;
const apiKey = "jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;


async function getPhotos() {
      try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
      } catch (error) {

    }
}
getPhotos();