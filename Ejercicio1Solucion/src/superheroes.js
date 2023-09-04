const superheroes = new Map();
let id = 0;

export function addSuperhero(superhero) {
    superheroes.set(id, superhero);
    superhero.id = id;
    id++;
}

export function getSuperhero(id) {
    return superheroes.get(id);
}

export function getSuperheroes(from, to) {
    let values = [...superheroes.values()];
    if (from !== undefined) {
        return values.slice(from, to);
    } else {
        return values;
    }
}

export function loadSampleData() {

    //List obtained from https://comicvine.gamespot.com/profile/wrestlgurl/lists/top-25-superheroes/43101/

    addSuperhero({ name: 'Superman' });
    addSuperhero({ name: 'Batman' });
    addSuperhero({ name: 'Jim Hammond' });
    addSuperhero({ name: 'Captain America' });
    addSuperhero({ name: 'Green Arrow' });
    addSuperhero({ name: 'Aquaman' });
    addSuperhero({ name: 'Wonder Woman' });
    addSuperhero({ name: 'Martian Manhunter' });
    addSuperhero({ name: 'Barry Allen' });
    addSuperhero({ name: 'Hal Jordan' });
    addSuperhero({ name: 'Hawkman' });
    addSuperhero({ name: 'Ray Palmer' });
    addSuperhero({ name: 'Spider-Man' });
    addSuperhero({ name: 'Thor' });
    addSuperhero({ name: 'Hank Pym' });
    addSuperhero({ name: 'Solar' });
    addSuperhero({ name: 'Iron Man' });
    addSuperhero({ name: 'Doctor Strange' });
    addSuperhero({ name: 'Daredevil' });
    addSuperhero({ name: 'Ted Kord' });
    addSuperhero({ name: 'Captain Marvel' });
    addSuperhero({ name: 'Black Panther' });
    addSuperhero({ name: 'Wolverine' });
    addSuperhero({ name: 'Booster Gold' });
    addSuperhero({ name: 'Spawn (Simmons)' });

}

loadSampleData();