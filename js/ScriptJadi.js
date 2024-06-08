const NamaHero = ['Miya', 'Balmond', 'Saber', 'Alice', 'Nana', 'Tigreal', 'Alucard', 'Karina', 'Akai', 'Franco', 'Bane', 'Bruno', 'Clint', 'Rafaela', 'Eudora', 'Zilong', 'Fanny', 'Layla', 'Minotaur', 'Lolita', 'Hayabusa', 'Freya', 'Gord', 'Natalia', 'Kagura', 'Chou', 'Sun', 'Alpha', 'Ruby', 'Yi Sun-Shin', 'Moskov', 'Johnson', 'Cyclops', 'Estes', 'Hilda', 'Aurora', 'Lapu Lapu', 'Vexana', 'Roger', 'Karrie', 'Gatot Kaca', 'Harley', 'Irithel', 'Grock', 'Argus', 'Odette', 'Lancelot', 'Diggie', 'Hylos', 'Zhask', 'Helcurt', 'Pharsa', 'Lesley', 'Jawhead', 'Angela', 'Gusion', 'Valir', 'Martis', 'Uranus', 'Hanabi', 'Chang\'e', 'Kaja', 'Selena', 'Aldous', 'Claude', 'Vale', 'Leomord', 'Lunox', 'Hanzo', 'Belerick', 'Kimmy', 'Thamuz', 'Harith', 'Minsitthar', 'Kadita', 'Faramis', 'Badang', 'Khufra', 'Granger', 'Guinevere', 'Esmeralda', 'Terizla', 'X-Borg', 'Ling', 'Dyrroth', 'Lylia', 'Baxia', 'Masha', 'Wanwan', 'Silvanna', 'Cecilion', 'Carmilla', 'Atlas', 'Popol & Kupa', 'Yu Zhong', 'Luo Yi', 'Benedetta', 'Khaleed', 'Barats', 'Brody', 'Yve', 'Mathilda', 'Paquito', 'Gloo', 'Beatrix', 'Phoveus', 'Natan', 'Aulus', 'Aamon', 'Valentina', 'Edith', 'Floryn', 'Yin', 'Melissa', 'Xavier', 'Julian', 'Fredrinn', 'Arlott', 'Joy', 'Novaria', 'Ixia', 'Nolan', 'Cici']

const RoleHero = ['marksman', 'fighter', 'assassin', 'mage tank', 'mage', 'tank', 'fighter assassin', 'assassin', 'tank', 'tank', 'fighter mage', 'marksman', 'marksman', 'support', 'mage', 'fighter assassin', 'assassin', 'marksman', 'tank support', 'tank support', 'assassin', 'fighter', 'mage', 'assassin', 'mage', 'fighter', 'fighter', 'fighter', 'fighter', 'assassin marksman', 'marksman', 'tank support', 'mage', 'support', 'fighter tank', 'mage', 'fighter', 'mage', 'fighter marksman', 'marksman', 'tank fighter', 'mage', 'marksman', 'tank', 'fighter', 'mage', 'assassin', 'support', 'tank', 'mage', 'assassin', 'mage', 'marksman', 'fighter', 'support', 'assassin', 'mage', 'fighter', 'tank', 'marksman', 'mage', 'support fighter', 'assassin mage', 'fighter', 'marksman', 'mage', 'fighter', 'mage', 'assassin', 'tank', 'marksman mage', 'fighter', 'mage', 'fighter', 'mage assassin', 'support mage', 'fighter', 'tank', 'marksman', 'fighter', 'mage tank', 'fighter', 'fighter', 'assassin', 'fighter', 'mage', 'tank', 'fighter', 'marksman', 'fighter', 'mage', 'support tank', 'tank', 'marksman', 'fighter', 'mage', 'fighter', 'fighter', 'tank fighter', 'marksman', 'mage', 'support assassin', 'fighter assassin', 'tank', 'marksman', 'fighter', 'marksman', 'fighter', 'assassin', 'mage', 'tank marksman', 'support', 'fighter assassin', 'marksman', 'mage', 'fighter mage', 'fighter tank', 'fighter', 'assassin', 'mage', 'marksman', 'assassin', 'fighter']

const main = document.querySelector('Hero');
let htmlStringHero = "";
for (let i = 0; i < NamaHero.length; i++) {
  htmlStringHero += `<div class="hero_card" data-category="${RoleHero[i]}">
  <a href="#">
<<<<<<< HEAD
  <img src = "../img/hero/hero (${i + 1}).webp">
=======
  <img src = "../img/hero/Hero (${i + 1}).webp">
>>>>>>> 81bb4ea58260cd6f8574c913ff9e57bb9ad372d9
  <h2>${NamaHero[i]}</h2></a>
  </div>`;
}
main.innerHTML = htmlStringHero;


document.addEventListener("DOMContentLoaded", function () {
    var filterUl = document.getElementById("filter");
    var heroList = document.querySelector(".hero-list");

    filterUl.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            // Remove the "active" class from all li elements
            var filterItems = filterUl.getElementsByTagName("li");
            for (var i = 0; i < filterItems.length; i++) {
                filterItems[i].classList.remove("active");
            }

            // Add the "active" class to the clicked li element
            event.target.classList.add("active");
            
            // Get the selected category using the dataset property
            var selectedCategories = event.target.dataset.category;
            console.log(selectedCategories)

            // Filter the hero list based on the selected category
            filterHeroes(selectedCategories);
        }
    });

    function filterHeroes(category) {
        var heroes = heroList.getElementsByClassName("hero_card");

        for (var i = 0; i < heroes.length; i++) {
            var hero = heroes[i];
            var heroCategories = hero.dataset.category.split(' ');
            if (category === "all" || heroCategories.includes(category)) {
                hero.style.display = "flex";
            } else {
                hero.style.display = "none";
            }
        }
    }
});



