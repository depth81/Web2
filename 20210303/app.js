/* let myArray = [1,2,3,4,5,6,7];
//let myArray = [];

function getData(d){
    return new Promise((resolve, reject) => {
        
        if(d.length === 0){
            reject (new Error("Ha habido un error"));
        }else{
            setInterval(() => {
                resolve(d);
            }, 3000);
        }   
    });
};
 */
/* getData(myArray).then((x)=>{
    console.log("promise fullfilled");
    console.log("HELLO PETV!");
}).catch((error)=>{
    console.log("Error");
}); */

/* async function myFunction(){
    let myData = await getData(myArray);
    console.log(myData);
}

myFunction(); */

/* const fetchData = async () => {
    let myData = await getData(myArray);
    console.log(myData);
}

fetchData(); */


const fetchData = async(country="co", category="business") => {

    let response = await fetch(`http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7ebc4db1e2d9422887564c2b18f0fe2b`);

    let dataJson = await response.json();
    
    return dataJson.articles;

}

const renderData = async(category) => {

    let country = document.getElementById("countries").value;
    const articles = await fetchData(country, category);
    let container = document.getElementById("articles");
    container.innerHTML = "";
    let urlImageNotFound = "https://tse2.mm.bing.net/th?id=OIP.h7QSnBwg4jn3BnqNqF5drAHaEK&pid=Api&P=0&w=357&h=201";

    articles.forEach((article) => {
        let alertTemplate = `<div class="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div class="card" style="width: 18rem;">
                                    <img src="${article.urlToImage === null ? urlImageNotFound : article.urlToImage}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${article.title}</h5>
                                        <p class="card-text">${article.description === null ? "NO disponible" : article.description}</p>
                                    </div>
                                </div>
                            </div>`;

        container.innerHTML += alertTemplate;
    });
}

const getArticles = async() =>{
    let country = document.getElementById("countries").value;
    let response = await fetch(`http://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=7ebc4db1e2d9422887564c2b18f0fe2b`);
    let dataJson = await response.json();
    let articles= dataJson.articles;
    let artContainer = document.getElementById("articles")
    artContainer.innerHTML = "";

    let urlImageNotFound = "https://tse2.mm.bing.net/th?id=OIP.h7QSnBwg4jn3BnqNqF5drAHaEK&pid=Api&P=0&w=357&h=201";

    articles.forEach((article) => {
        let alertTemplate = `<div class="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div class="card" style="width: 18rem;">
                                    <img src="${article.urlToImage === null ? urlImageNotFound : article.urlToImage}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${article.title}</h5>
                                        <p class="card-text">${article.description === null ? "NO disponible" : article.description}</p>
                                    </div>
                                </div>
                            </div>`;

        artContainer.innerHTML += alertTemplate;

    });
}



renderData();



