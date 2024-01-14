import MenPage from "../pages/men"
import WomenPage from "../pages/women"
import SportPage from "../pages/sport"
import GamesPage from "../pages/games"
import ElectrPage from "../pages/electr"
import KitchenPage from "../pages/kitchen"
import Main from "../companents/main/main"
import Trainers from "../pages/sport/companents/trainers"

export const FullRoute = [
    {
        id: 1,
        path: "/",
        element: <Main/>
    },
    {
        id: 2,
        path: "/men",
        element: <MenPage/>,
    },
    {
        id: 3,
        path: "/women",
        element: <WomenPage/>
    },
    {
        id: 4,
        path: "/sport",
        element: <SportPage/>
    },
    {
        id: 5,
        path: "/games",
        element: <GamesPage/>
    },
    {
        id: 6,
        path: "/electr",
        element: <ElectrPage/>
    },
    {
        id: 7,
        path: "/kitchen",
        element: <KitchenPage/>
    },
    {
        id: 8,
        path: "/men",
        element: <MenPage/>
    },
    {
        id: 9,
        path: "/women",
        element: <WomenPage/>
    },
    {
        id: 10,
        path: "/sport",
        element: <SportPage/>
    },
    {
        id: 11,
        path: "/games",
        element: <GamesPage/>
    },
    {
        id: 12,
        path: "/electr",
        element: <ElectrPage/>
    },
    {
        id: 13,
        path: "/kitchen",
        element: <KitchenPage/>
    },
]


export const SportCards = [
    {
        id: 1,
        path: "/trainers",
        element: <Trainers/>
    }
]