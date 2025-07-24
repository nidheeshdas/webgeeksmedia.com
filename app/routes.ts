import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/home-roo', 'routes/home-roo.tsx')
] satisfies RouteConfig;
