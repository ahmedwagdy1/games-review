import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home {
    constructor(){
        document.querySelectorAll(".nav-link").forEach((link)=>{
            link.addEventListener("click", ()=>{
                document.querySelector(".navbar-nav .active").classList.remove("active")
                link.classList.add("active")
                const customCategory = link.getAttribute("data-category")
                this.getGames(customCategory);
            });
        });
        this.loading = document.getElementById('loading');
        this.details = document.getElementById('details');
        this.ui = new Ui();
        this.getGames();
    }

    async getGames(category = "mmorpg") {
        this.loading.classList.remove('d-none');
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '512d9f15afmsh768e2a25eb8fd62p1b5235jsn63105bd8bd63',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const apiUrl = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}` , options);
        const apiResponse = await apiUrl.json();
        this.loading.classList.add('d-none');
        this.ui.displayGames(apiResponse);
        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("click", ()=> {
                document.body.classList.add('no-scroll');
                this.details.classList.remove("d-none");
                new Details(card.dataset.id);
            })
        })
    }
}