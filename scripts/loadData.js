// document.addEventListener('DOMContentLoaded', function() {
//     const podcastingPlatforms = document.getElementById("podcastingPlatforms");
    
//     const allPlatforms = Object.keys(data["platforms"]);
//     const showAllPlatforms = [];
//     for (let platformKey of allPlatforms) { // Używamy `for...of` dla wartości
//         const platform = data["platforms"][platformKey]; // Pobierz rzeczywisty obiekt platformy
    
//         const singlePlatform = document.createElement("a"); // Tworzenie elementu "a"
//         singlePlatform.href = platform["url"]; // Ustawienie href
//         singlePlatform.innerText = platform["title"]; // Ustawienie tekstu linku
    
//         showAllPlatforms.push(singlePlatform); // Dodajemy do tablicy
//     }
//     console.log(showAllPlatforms);
// });