const searchform=document.querySelector('form');
const moviecontainer=document.querySelector('.movie-container');
const inputbox=document.querySelector(".inputbox");


const getMoviedata=async(movie)=>
{
    const myapikey='97f49376';
    const url=`http://www.omdbapi.com/?apikey=${myapikey}&t=${movie}`;
    const response=await fetch(url);
    // console.log("RESPONSE",response);
    const data=await response.json();
    console.log(data);
    showmovie(data);
}

const showmovie=(data)=>
{
   const {Title,imdbRating,Genre,Released,Actors,BoxOffice,Poster}=data;
   console.log(Genre);
   console.log(typeof(Genre));

   const movieElement=document.createElement('div');
   movieElement.classList.add('movie-info');
   movieElement.innerHTML=`<h2>${Title}</h2>
                            <p>Rating ${imdbRating}</p>`;

   const genreelement=document.createElement('div');
   genreelement.classList.add('movie-genre');
   let arr=Genre.split(",");
   console.log(arr);
   arr.forEach(element =>{
    const p=document.createElement('p');
    p.innerText=element;
    genreelement.appendChild(p);
   })

   movieElement.appendChild(genreelement);

   movieElement.innerHTML+=`<p>Released Date: ${Released}</p>
                            <p> Actors : ${Actors}</p>
                            <p> BoxOffice: ${BoxOffice}</p>`;
    

    const poster=document.createElement('div');
    poster.classList.add('movie-poster');
    poster.innerHTML=`<img src="${Poster}"/>`;

    moviecontainer.appendChild(movieElement);
    moviecontainer.appendChild(poster);


}


searchform.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(inputbox.value);
    const moviename=inputbox.value.trim();

    console.log(moviename);
    getMoviedata(moviename);
})