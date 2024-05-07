document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('checkBirthdate').addEventListener('click', async function() {
        const birthdate = document.getElementById('birthdate').value;
        const [year, month, day] = birthdate.split('-');
        const urlActorsBornToday = `https://online-movie-database.p.rapidapi.com/actors/list-born-today?month=${month}&day=${day}`;
        const urlActorInfo = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=nm0000138';

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0493edd308msh2130de3d7a90140p127dadjsne108c3c2af59',
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        };

        try {
            const responseActorsBornToday = await fetch(urlActorsBornToday, options);
            const dataActorsBornToday = await responseActorsBornToday.json();

            const actorUrls = dataActorsBornToday.map(actorUrl => actorUrl.slice(6, -1)); // Extract actor IDs from URLs

            const actorInfoPromises = actorUrls.map(async actorUrl => {
                const actorInfoUrl = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${actorUrl}`;
                const responseActorInfo = await fetch(actorInfoUrl, options);
                return responseActorInfo.json();
            });

            const actorInfos = await Promise.all(actorInfoPromises);

            displayBirthdateActors(actorInfos);
        } catch (error) {
            console.error(error);
        }
    });

    function displayBirthdateActors(actors) {
        const birthdateActorsDiv = document.getElementById('birthdateActors');
        birthdateActorsDiv.innerHTML = '';

        actors.forEach(actor => {
            if (actor.d && actor.d.length > 0) {
                const actorData = actor.d[0];
                const actorDiv = document.createElement('div');
                actorDiv.textContent = `${actorData.l} (${actorData.id}) - ${actorData.s}`;
                const img = document.createElement('img');
                img.src = actorData.i.imageUrl;
                actorDiv.appendChild(img);
                birthdateActorsDiv.appendChild(actorDiv);
            } else {
                console.log('Actor data not available:', actor);
            }
        });
    }



});