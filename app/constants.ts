export const HOME_ROUTE = "/";
export const NAV_LINKS_ARR = [{ path: HOME_ROUTE, name: "Home" }];

export const OFFICIAL_DOMAIN = "laundry.abrasoft.com";
export const OFFICIAL_DOMAIN_URL = `https://${OFFICIAL_DOMAIN}/`;

export const COPYRIGHT = "© 2023 Abrasoft Corporation";

export const LOGOUT_ROUTE = "/logout";

// Customer Nav Links Routes
export const CUSTOMER_DASHBOARD_ROUTE = "/";
export const CUSTOMER_PROFILE_ROUTE = "/profile";
export const CUSTOMER_POINT_HISTORY_ROUTE = "/point-history";
export const CUSTOMER_ORDERS_ROUTE = "/orders";
export const POINTS_ROUTE = "/point-history";

export const CUSTOMER_NAV_LINKS_ARR = [
  { path: CUSTOMER_DASHBOARD_ROUTE, name: "Dashboard" },
  { path: CUSTOMER_PROFILE_ROUTE, name: "Profile" },
  { path: CUSTOMER_ORDERS_ROUTE, name: "Orders" },
  { path: POINTS_ROUTE, name: "Points" },
  { path: LOGOUT_ROUTE, name: "Logout " },
];

// Employee Nav Links Routes
export const EMPLOYEE_DASHBOARD_ROUTE = "/admin/dashboard";
export const COMPANY_MANAGEMENT_ROUTE = "/admin/company-management";
export const EMPLOYEES_ROUTE = "/admin/employee";
export const PRODUCTS_ROUTE = "/admin/products";
export const PURCHASES_ROUTE = "/admin/purchases";
export const PAYMENTS_ROUTE = "/admin/payments";
export const EXPENSES_ROUTE = "/admin/expenses";
export const REPORTS_ROUTE = "/admin/reports";

export const EMPLOYEE_NAV_LINKS_ARR = [
  { path: EMPLOYEE_DASHBOARD_ROUTE, name: "Dashboard" },
  { path: COMPANY_MANAGEMENT_ROUTE, name: "Company Management" },
  { path: EMPLOYEES_ROUTE, name: "Employee" },
  // { path: PRODUCTS_ROUTE, name: "Products" },
  // { path: PURCHASES_ROUTE, name: "Purchases" },
  // { path: PAYMENTS_ROUTE, name: "Payments" },
  // { path: EXPENSES_ROUTE, name: "Expenses" },
  // { path: REPORTS_ROUTE, name: "Reports" },
  { path: LOGOUT_ROUTE, name: "Logout" },
];
