async function fetchPoemas() {
    const url = 'https://poetrydb.org/poemcount/20';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`error`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

fetchPoemas();