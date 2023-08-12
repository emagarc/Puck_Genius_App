import { UserButton } from "@/node_modules/@clerk/nextjs/dist/types/index";

export default function DashboardPage() {
  return (
    <div>
      <p>Dashboard Page (Protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
