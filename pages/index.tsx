import { signIn } from "next-auth/react";

export default function Home() {
  const handleLogin = async () =>
    await signIn("credentials", {
      email: "hi.kevindev@gmail.com",
      password: "y8VALENCIA5%",
      callbackUrl: "/dashboard/investments",
    });

  return (
    <main>
      <p>login_:</p>
      <button onClick={handleLogin}>Login</button>;
    </main>
  );
}
