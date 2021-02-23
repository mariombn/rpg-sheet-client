// Public Routes
import HomeIndex from "@/views/home/Index";
import Login from "@/views/auth/Login";

// Private Routes
import HomeHome from "@/views/home/Home";
import Template from "@/views/template/template";
import Users from "@/views/users/users";
import NotFound from "@/views/notFound";

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeIndex
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Home',
        path: '/home',
        component: HomeHome
    },
    {
        name: 'Template',
        path: '/template',
        component: Template
    },

    {
        name: 'Usuários',
        path: '/usuarios',
        component: Users
    },
    {
        path: '*',
        component: NotFound
    }
];

export default routes;
