// classes.js

export const darkTheme = {
    // Common classes
    thClasses: "px-4 py-2 text-center text-xs font-medium uppercase tracking-wider border-b border-gray-600",
    tableContainer: "w-full overflow-x-auto rounded-lg border border-gray-600 p-2 bg-gray-800 text-white",
    table: "min-w-full rounded-lg border border-gray-600 bg-gray-800 text-white text-sm",
    thead: "bg-gray-900 text-gray-50 rounded-t-lg",
    tbody: "bg-gray-800 text-white divide-y divide-gray-700",
    tableRow: "bg-gray-800 text-white",
    tableCell: "px-4 py-2 text-center whitespace-nowrap text-xs md:text-sm",
    tableRowContainer: "border-b border-gray-700 rounded-lg",

    // Text classes for positive and negative numbers
    positiveText: "text-green-500 dark:text-green-400",
    negativeText: "text-red-500 dark:text-red-400",
    zeroText: "text-gray-500 dark:text-gray-400",
    
    // Filter-specific classes (Choose Criteria)
    filterContainer: "flex flex-col items-center justify-center p-4 rounded-md shadow-sm bg-gray-700 text-white w-full sm:w-64 mx-auto",
    selectClass: "mt-2 w-full sm:w-48 p-2 sm:px-3 sm:py-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300",

    // NavBar-specific classes
    navBarContainer: "shadow-md p-4 flex justify-between items-center bg-gray-800 relative",
    navBarTitle: "text-xl font-bold text-white",
    navBarMenuButton: "text-2xl focus:outline-none",
    navBarDropDown: "absolute top-full left-0 right-0 bg-gray-800 shadow-lg p-4 mt-2 z-20 rounded-md md:hidden flex flex-col items-center",

    // SelectButton-specific classes
    selectButtonBase: "border border-gold rounded-md py-2 px-4 font-montserrat cursor-pointer transition duration-300 ease-in-out w-1/5",
    selectButtonSelected: "bg-gold text-black font-bold",
    selectButtonUnselected: "font-medium text-current hover:bg-gold hover:text-black",

    // TokenRow-specific classes
    tokenRow: "bg-gray-800 text-white",
    tokenSymbolText: "text-xs md:text-sm text-gray-500 dark:text-gray-400",

    // Banner-specific classes
    bannerBackground: "bg-cover bg-center bg-no-repeat py-16 transition-colors duration-300 bg-gray-800 text-white",
    bannerTextColor: "text-white",
    gradientText: "text-3xl md:text-4xl font-bold font-montserrat mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500",
    subtitleTextColor: "text-gray-300 text-sm md:text-xl capitalize font-montserrat",

    // Carousel-specific classes
    textWhite: "text-white",
    textBlack: "text-black",
    textGreen: "text-green-500",
    textRed: "text-red-500",

    // CoinPage-specific classes
    container: "flex flex-col items-center p-5 bg-gray-800 text-white",
    content: "w-full max-w-3xl p-5 rounded-lg bg-gray-700",
    header: "mb-5 text-4xl font-bold",
    bodyText: "mb-2",

    // TabButtons-specific classes
    tabContainer: "w-full flex items-center justify-center space-x-2 sm:space-x-4 mb-4",
    tabButton: "tab-btn flex-shrink-0 px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg font-bold border-b-4 transition duration-300",
    activeTab: "text-yellow-400 border-yellow-400",
    inactiveTab: "border-transparent hover:text-yellow-400 hover:border-yellow-400",
};

export const lightTheme = {
    // Common classes
    thClasses: "px-4 py-2 text-center text-xs font-medium uppercase tracking-wider border-b border-gray-300",
    tableContainer: "w-full overflow-x-auto rounded-lg border border-gray-300 p-2 bg-gray-100 text-black",
    table: "min-w-full rounded-lg border border-gray-300 bg-gray-100 text-black text-sm",
    thead: "bg-gray-50 text-gray-800 rounded-t-lg",
    tbody: "bg-gray-100 text-black divide-y divide-gray-300",
    tableRow: "bg-gray-100 text-black",
    tableCell: "px-4 py-2 text-center whitespace-nowrap text-xs md:text-sm",
    tableRowContainer: "border-b border-gray-300 rounded-lg",

    // Text classes for positive and negative numbers
    positiveText: "text-green-500",
    negativeText: "text-red-500",

    // Filter-specific classes (Choose Criteria)
    filterContainer: "flex flex-col items-center justify-center p-4 rounded-md shadow-sm bg-gray-300 text-gray-900 w-full sm:w-64 mx-auto",
    selectClass: "mt-2 w-full sm:w-48 p-2 sm:px-3 sm:py-2 rounded-md border border-gray-400 bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300",

    // NavBar-specific classes
    navBarContainer: "shadow-md p-4 flex justify-between items-center bg-white relative",
    navBarTitle: "text-xl font-bold text-black",
    navBarMenuButton: "text-2xl focus:outline-none",
    navBarDropDown: "absolute top-full left-0 right-0 bg-white shadow-lg p-4 mt-2 z-20 rounded-md md:hidden flex flex-col items-center",

    // SelectButton-specific classes
    selectButtonBase: "border border-gold rounded-md py-2 px-4 font-montserrat cursor-pointer transition duration-300 ease-in-out w-1/5",
    selectButtonSelected: "bg-gold text-black font-bold",
    selectButtonUnselected: "font-medium text-current hover:bg-gold hover:text-black",

    // TokenRow-specific classes
    tokenRow: "bg-gray-100 text-black",
    tokenSymbolText: "text-xs md:text-sm text-gray-500",

    // Banner-specific classes
    bannerBackground: "bg-cover bg-center bg-no-repeat py-16 transition-colors duration-300 bg-gray-100 text-black",
    bannerTextColor: "text-black",
    gradientText: "text-3xl md:text-4xl font-bold font-montserrat mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500",
    subtitleTextColor: "text-gray-700 text-sm md:text-xl capitalize font-montserrat",

    // Carousel-specific classes
    textWhite: "text-white",
    textBlack: "text-black",
    textGreen: "text-green-500",
    textRed: "text-red-500",

    // CoinPage-specific classes
    container: "flex flex-col items-center p-5 bg-white text-black",
    content: "w-full max-w-3xl p-5 rounded-lg bg-gray-100",
    header: "mb-5 text-4xl font-bold",
    bodyText: "mb-2",

    // TabButtons-specific classes
    tabContainer: "w-full flex items-center justify-center space-x-2 sm:space-x-4 mb-4",
    tabButton: "tab-btn flex-shrink-0 px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg font-bold border-b-4 transition duration-300",
    activeTab: "text-yellow-400 border-yellow-400",
    inactiveTab: "border-transparent hover:text-yellow-400 hover:border-yellow-400",
};
