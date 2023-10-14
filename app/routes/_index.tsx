import type { MetaFunction } from "@remix-run/node";
import Login from "./login";

  export const meta: MetaFunction = () => {
    return [
      { title: "Login Marbella" },
      { name: "description", content: "Welcome to Remix!" },
    ];
  };

export default function Index() {
  return (
    <div>
      <Login />
    </div>
  );
}
