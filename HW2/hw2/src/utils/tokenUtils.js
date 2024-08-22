// Utility function to get the PNL value based on the selected filter
export const getValue = (item, filter) => {
    switch (filter) {
        case 'PNL_24h':
            return item.tokenInfo.price.diff || 0;
        case 'PNL_week':
            return item.tokenInfo.price.diff7d || 0;
        case 'PNL_month':
            return item.tokenInfo.price.diff30d || 0;
        default:
            return 0;
    }
};

// Utility function to sort tokens by the selected PNL filter
export const sortTokensByPNL = (tokens, selectedFilter) => {
    return [...tokens].sort((a, b) => {
        const aValue = getValue(a, selectedFilter);
        const bValue = getValue(b, selectedFilter);
        return bValue - aValue; // Sort in descending order
    });
};
