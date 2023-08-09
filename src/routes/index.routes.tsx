import { useContext } from "react";
import { AuthContext } from "../provider/auth";

import NoAuthRoutes from "./NoAuth/stack.routes";
import AuthRoutes from "./Auth/drawer.routes";

export default function Routes() {
  const { logged } = useContext(AuthContext);

  return logged ? <AuthRoutes /> : <NoAuthRoutes />;
}
