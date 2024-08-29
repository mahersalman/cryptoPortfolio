export async function getImages(names) {
    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-mNCEY3t9ZsvHKtmrpN4hQoPb'
            }
        };
        const formattedNames = names.map(name => name.toLowerCase().replace(/\s+/g, '-')).join(',');
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${formattedNames}`,options);
        const data = await response.json();

        // Create a map of token names to their image URLs
        const imagesMap = data.reduce((acc, token) => {
            acc[token.id] = token.image;
            return acc;
        }, {});

        return imagesMap;
        } catch (error) {
        console.error('Error fetching token images:', error);
        return {};
        }
}