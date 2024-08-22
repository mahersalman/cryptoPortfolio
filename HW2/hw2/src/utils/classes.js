// classes.js

export const darkTheme = {
    // Common classes
    thClasses: "px-6 py-3 text-center text-xs font-medium uppercase tracking-wider",
    tableContainer: "w-full overflow-x-auto rounded-3xl border-slate-400 p-4 dark:border-slate-700",
    table: "min-w-full rounded-lg bg-gray-800 text-white",
    thead: "bg-gray-900 text-gray-50",
    tbody: "bg-gray-800 text-white divide-y divide-gray-200 dark:divide-gray-600",
    filterContainer: "flex items-center justify-center gap-4 max-w-lg mx-auto rounded-3xl border-slate-900 p-1 bg-gray-700 text-white",
    selectClass: "w-28 border rounded-full py-2 px-4 bg-gray-700 text-white",
    tableRow: "bg-gray-800 text-white",
    positiveText: "text-green-500 dark:text-green-400",
    negativeText: "text-red-500 dark:text-red-400",
    tableRowContainer: "border border-gray-600 rounded-full overflow-hidden",
    tableCell: "px-6 py-4 text-center whitespace-nowrap rounded-full",

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
    tokenCell: "px-6 py-4 text-center whitespace-nowrap",
    tokenSymbolText: "text-sm text-gray-500 dark:text-gray-400",
    positiveChange: "text-green-500",
    negativeChange: "text-red-500",

    // Banner-specific classes
    bannerBackground: "bg-cover bg-center bg-no-repeat py-16 transition-colors duration-300 bg-gray-800 text-white",
    bannerTextColor: "text-white",
    gradientText: "text-4xl md:text-6xl font-bold font-montserrat mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500",
    subtitleTextColor: "text-gray-300 text-xl md:text-2xl capitalize font-montserrat",

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
    thClasses: "px-6 py-3 text-center text-xs font-medium uppercase tracking-wider",
    tableContainer: "w-full overflow-x-auto rounded-3xl border-slate-400 p-4",
    table: "min-w-full rounded-lg bg-gray-100 text-black",
    thead: "bg-gray-50 text-gray-800",
    tbody: "bg-gray-100 text-black divide-y divide-gray-200",
    filterContainer: "flex items-center justify-center gap-4 max-w-lg mx-auto rounded-3xl border-slate-900 p-1 bg-gray-300 text-gray-900",
    selectClass: "w-28 border rounded-full py-2 px-4 bg-gray-300 text-gray-900",
    tableRow: "bg-gray-100 text-black",
    positiveText: "text-green-500",
    negativeText: "text-red-500",
    tableRowContainer: "border border-gray-600 rounded-full overflow-hidden",
    tableCell: "px-6 py-4 text-center whitespace-nowrap rounded-full",

    // TokenRow-specific classes
    tokenRow: "bg-gray-100 text-black",
    tokenCell: "px-6 py-4 text-center whitespace-nowrap",
    tokenSymbolText: "text-sm text-gray-500",
    positiveChange: "text-green-500",
    negativeChange: "text-red-500",

    // NavBar-specific classes
    navBarContainer: "shadow-md p-4 flex justify-between items-center bg-white relative",
    navBarTitle: "text-xl font-bold text-black",
    navBarMenuButton: "text-2xl focus:outline-none",
    navBarDropDown: "absolute top-full left-0 right-0 bg-white shadow-lg p-4 mt-2 z-20 rounded-md md:hidden flex flex-col items-center",

    // SelectButton-specific classes
    selectButtonBase: "border border-gold rounded-md py-2 px-4 font-montserrat cursor-pointer transition duration-300 ease-in-out w-1/5",
    selectButtonSelected: "bg-gold text-black font-bold",
    selectButtonUnselected: "font-medium text-current hover:bg-gold hover:text-black",


    // Banner-specific classes
    bannerBackground: "bg-cover bg-center bg-no-repeat py-16 transition-colors duration-300 bg-gray-100 text-black",
    bannerTextColor: "text-black",
    gradientText: "text-4xl md:text-6xl font-bold font-montserrat mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500",
    subtitleTextColor: "text-gray-700 text-xl md:text-2xl capitalize font-montserrat",

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
