import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/audit-service", "routes/services.tsx"),
  route("/contact-us", "routes/contact-us.tsx"),
  route("/payment-success", "routes/payment-success.tsx"),
  route("/payment-error", "routes/payment-error.tsx"),
] satisfies RouteConfig;
