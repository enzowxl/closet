import { useContext } from "react";
import { AuthContext } from "../provider/auth";

import NoAuthRoutes from "./NoAuth/stack.routes";

export default function Routes() {
  const { logged } = useContext(AuthContext);

  return logged ? <></> : <NoAuthRoutes />;
}
