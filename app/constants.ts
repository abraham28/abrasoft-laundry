export const HOME_ROUTE = "/";
export const NAV_LINKS_ARR = [{ path: HOME_ROUTE, name: "Home" }];

export const OFFICIAL_DOMAIN = "laundry.abrasoft.com";
export const asd = `https://${OFFICIAL_DOMAIN}/`;

export const COPYRIGHT = "© 2023 Abrasoft Corporation";

export const NOT_FOUND_ROUTE = "/not-found";

export const AUTH_ROUTE = "/auth";
export const FORGOT_PASSWORD_ROUTE = `${AUTH_ROUTE}/forgot-password`;
export const SET_NEW_PASSWORD_ROUTE = `${FORGOT_PASSWORD_ROUTE}/set-password`;
export const LOGIN_ROUTE = `${AUTH_ROUTE}/login`;
export const LOGOUT_ROUTE = `${AUTH_ROUTE}/logout`;
export const REGISTER_ROUTE = `${AUTH_ROUTE}/register`;
export const COMPANY_REGISTER_ROUTE = `${AUTH_ROUTE}/register/company`;
export const OTP_VERIFICATION_ROUTE = `${AUTH_ROUTE}/otp-verification`;
export const OTP_VERIFICATION_SUCCESS_ROUTE = `${AUTH_ROUTE}/otp-verification`;

// Customer Nav Links Routes
export const CUSTOMER_DASHBOARD_ROUTE = "/dashboard";
export const CUSTOMER_PROFILE_ROUTE = "/profile";
export const CUSTOMER_POINT_HISTORY_ROUTE = "/point-history";
export const CUSTOMER_ORDERS_ROUTE = "/orders";
export const POINTS_ROUTE = "/point-history";
export const CLIENT_EDIT_PROFILE_ROUTE = "/profile/edit";

export const CUSTOMER_NAV_LINKS_ARR = [
  { path: CUSTOMER_DASHBOARD_ROUTE, name: "Dashboard" },
  { path: CUSTOMER_PROFILE_ROUTE, name: "Profile" },
  { path: CUSTOMER_ORDERS_ROUTE, name: "Orders" },
  { path: LOGOUT_ROUTE, name: "Logout " },
];

export const ORDER_SLIP_ROUTE = "./orders/slip";
export const PAYMENT_AMOUNT_ROUTE = "/admin/orders/payment/amount";

// Employee Nav Links Routes
export const EMPLOYEE_DASHBOARD_ROUTE = "/admin";
export const COMPANY_MANAGEMENT_ROUTE = "/admin/company-management";
export const EMPLOYEES_ROUTE = "/admin/employees";
export const EMPLOYEE_ORDERS_ROUTE = "/admin/orders";
export const PURCHASES_ROUTE = "/admin/purchases";
export const EMPLOYEE_PRODUCTS_ROUTE = "/admin/orders/products";
export const PAYMENTS_ROUTE = "/admin/orders/payment";
export const EXPENSES_ROUTE = "/admin/expenses";
export const REPORTS_ROUTE = "/admin/reports";
export const ADMIN_PRODUCTS_ROUTE = "/admin/products";
export const ROLES_ROUTE = `${EMPLOYEE_DASHBOARD_ROUTE}/roles`;
export const ROLES_MANAGEMENT_EDIT_ROUTE = `${ROLES_ROUTE}/[userId]/details`;
export const EMPLOYEE_ROLE_EDIT_ROUTE = `${EMPLOYEES_ROUTE}/[userId]/edit`;
export const ADMIN_NEW_EDIT_PRODUCT_ROUTE = `${ADMIN_PRODUCTS_ROUTE}/[productId]/edit`;
export const CREATE_PURCHASES_ROUTE = `${PURCHASES_ROUTE}/[purchaseId]/edit`;
export const ADD_EXPENSES_ROUTE = `${EXPENSES_ROUTE}/[expenseId]/edit`;
export const INCOME_STATEMENT_ROUTE = `${REPORTS_ROUTE}/income-statement`;

export const EMPLOYEE_NAV_LINKS_ARR = [
  { path: EMPLOYEE_DASHBOARD_ROUTE, name: "Dashboard" },
  { path: COMPANY_MANAGEMENT_ROUTE, name: "Company Management" },
  { path: EMPLOYEES_ROUTE, name: "Employee" },
  { path: EMPLOYEE_PRODUCTS_ROUTE, name: "Products" },
  { path: PURCHASES_ROUTE, name: "Purchases" },
  { path: PAYMENTS_ROUTE, name: "Payments" },
  { path: EXPENSES_ROUTE, name: "Expenses" },
  { path: REPORTS_ROUTE, name: "Reports" },
  { path: LOGOUT_ROUTE, name: "Logout" },
];

export const COMPANY_DETAILS_ROUTE = "/admin/company-details/";
export const COMPANY_EDIT_HEADER_ROUTE = "/admin/company-details/edit-header";
export const COMPANY_EDIT_DETAILS_ROUTE = "/admin/company-details/edit-details";

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
export const API_LOGIN_URL = `${BASE_URL}/api/custom-auth/login`;
export const API_REGISTER_URL = `${BASE_URL}/api/custom-auth/register`;
export const API_VERIFY_EMAIL_URL = `${BASE_URL}/api/custom-auth/register/verify-email`;
export const API_VERIFY_EMAIL_RESEND_URL = `${BASE_URL}/api/custom-auth/register/send-otp`;
