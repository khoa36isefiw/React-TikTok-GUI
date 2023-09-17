// Layouts
import {HeaderOnly} from '~/components/Layout'

// Defind route for Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
// Public routes
// needn't login to view 
const publicRoutes= [
    {
        path:'/', 
        component: Home
    }, 
    {
        path:'/following', 
        component: Following
    }, 
    {
        path:'/profile', 
        component: Profile
    }, 
    {
        // default layout
        path:'/upload', 
        component: Upload, 
        // layout: null, // don't have layout
        layout: HeaderOnly,
    }, 
    // truyền layout --> lấy layout đó
    // truyền null vào --> không có layout
    // không truyền layout hoặc null --> lấy DefaultLayout



    {
        path:'/search', 
        component: Search, 
        layout: null,
    }, 
];

// must login to view
const privateRoutes =[

];

export {publicRoutes, privateRoutes}