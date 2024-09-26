import getData from '../utils/getData';

const Home = async () => {
    // Obtener datos de los lanzamientos
    const launches = await getData();

    // Generar la vista con los datos obtenidos
    const view = `
        <div class="Characters">
        ${launches.map(launch => `
            <article class="Character-item">
                <a href="#/${launch.id}">
                    <img src="${launch.links.patch.small}" alt="${launch.name}">
                    <h2>${launch.name}</h2>
                </a>
            </article>
        `).join('')}
        </div>
    `;
    return view;
}

export default Home;
