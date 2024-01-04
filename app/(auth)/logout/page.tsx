import { redirect } from "next/navigation";

const NotFoundPage = () => {
  redirect("/login");
};

export default NotFoundPage;
