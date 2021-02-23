import Template from "@/views/template/template";
import Login from "@/views/login/login";
import Users from "@/views/users/users";
import NotFound from "@/views/notFound";

const routes = [
    {
        name: 'Template',
        path: '/template',
        component: Template
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
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
