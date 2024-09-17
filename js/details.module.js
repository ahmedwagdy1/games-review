import { Ui } from "./ui.module.js";

export class Details {
    constructor(id){
        document.getElementById("btnClose").addEventListener('click',() => {
            document.body.classList.remove('no-scroll');
            document.getElementById("details").classList.add("d-none");
        });

        this.loading = document.getElementById('loading');
        this.getDetails(id);
    }

    async getDetails(id) {
        this.loading.classList.remove('d-none');
        const options = {
            method: 'GET',
	        headers: {
                'x-rapidapi-key': '512d9f15afmsh768e2a25eb8fd62p1b5235jsn63105bd8bd63',
	        	'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	        }
        };
        const detailsUrl = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
        const detailsResponse = await detailsUrl.json();
        this.loading.classList.add('d-none');
        new Ui().displayDetails(detailsResponse);
    }
}