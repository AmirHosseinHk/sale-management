import Dashboard from './Components/Dashboard/Dashboard'
import Profile from './Components/Profile/Profile'
import Settings from './Components/Settings/Settings'
import Order from './Components/Order/Order'
import Message from './Components/Message/Message'
import Product from './Components/Product/Product'




const routes=[
    {path:'/dashboard',element:<Dashboard />},
    {path:'/profile',element:<Profile />},
    {path:'/settings',element:<Settings />},
    {path:'/order',element:<Order />},
    {path:'/message',element:<Message />},
    {path:'/product',element:<Product />},
]

export default routes