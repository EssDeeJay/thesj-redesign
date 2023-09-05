const menuData = [
    {
        id: 1,
        title: "About",
        path: "/about",
        newTab: false
    },
    {
        id: 2,
        title: "Services",
        newTab: false,
        submenu: [
            {
                id: 21,
                title: "Web Development",
                newTab: false,
                path: "/web-development"
            },
            {
                id: 22,
                title: "UI/UX Design",
                newTab: false,
                path: "/ui-design"
            },
            {
                id: 23,
                title: "Shopify Store Development",
                newTab: false,
                path: "/shopify-web-development"
            },
            {
                id: 24,
                title: "Site Speed Optimization",
                newTab: false,
                path: "/speed-optimization"
            },
            {
                id: 25,
                title: "Headless Shopify Development",
                newTab: false,
                path: "/headless-development"
            },
            {
                id: 26,
                title: "Others",
                newTab: false,
                path: "/others"
            }
        ]
    },
    {
        id: 3,
        title: "Blog",
        path: "/blog",
        newTab: false
    },
    {
        id: 4,
        title: "Portfolio",
        path: "/portfolio",
        newTab: false
    },
    {
        id: 5,
        title: "Why Us",
        path: "/why-us",
        newTab: false
    }
];

export default menuData;