export class Ui {
    constructor(){}
    
    displayGames(apiData) {
        let gamesBox = ``;
        for(let i = 0; i < apiData.length ; i++) {
            gamesBox += `
                <div class="col">
                  <div data-id="${apiData[i].id}" class="card p-3 bg-transparent pb-0 col">
                    <img src="${apiData[i].thumbnail}" class="w-100" alt="post">
                    <div class="card-body pb-0 px-0 text-white">
                      <div class="d-flex justify-content-between">
                        <h3>
                          ${apiData[i].title}
                        </h3>
                        <span class="badge text-bg-primary p-2">Free</span>
                      </div>
                      
                      <p class="card-text opacity-50 text-10 py-2">${apiData[i].short_description.split(' ').slice(0,9).join(' ')}...</p>
    
                      <div class="card-footer d-flex justify-content-between px-0 text-10">
                        <span class="badge gray-color">${apiData[i].genre}</span>
                        <span class="badge gray-color">${apiData[i].platform}</span>
                      </div>
                    </div>
                  </div>
                </div>
            `;
        }
        document.getElementById("gamesRow").innerHTML = gamesBox;
    }

    displayDetails(apiData) {
        let detailsBox = `
                <div class="col-md-4 animate__animated animate__bounceInLeft">
                    <img src=${apiData.thumbnail} class="w-100" alt="image details">
                    </div>
                    <div class="col-md-8 animate__animated animate__bounceInRight">
                    <h3>Title: ${apiData.title}</h3>
                    <p>Category: <span class="badge text-bg-info"> ${apiData.genre}</span> </p>
                    <p>Platform: <span class="badge text-bg-info"> ${apiData.platform}</span> </p>
                    <p>Status: <span class="badge text-bg-info"> ${apiData.status}</span> </p>
                    <p class="small">${apiData.description}</p>
                    <a class="btn btn-outline-warning animate__animated animate__bounceInUp mb-5" target="_blank" href=${apiData.game_url}>Show Game</a>
                </div>
            `
        document.getElementById("detailsContent").innerHTML = detailsBox;
    }
}
