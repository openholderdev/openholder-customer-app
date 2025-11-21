import { useRouter } from "next/router"

export default function Dashboard() {
  const router = useRouter();
  
  return (
    <main>
      <h1>Dashboard Page</h1>
      <div>
        <p>Ir a inversiones:</p>
        <button onClick={() => router.push('/dashboard/investments')}>Ir a inversiones</button>
      </div>
    </main>
  )
}
