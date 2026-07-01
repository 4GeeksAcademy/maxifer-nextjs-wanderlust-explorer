import { LogOut } from "lucide-react";

export default function ProfileLogoutButton() {
  return (
    <button
      type="button"
      className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-red-500 bg-transparent px-5 text-lg font-semibold text-red-600 transition hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
    >
      <LogOut className="h-5 w-5" aria-hidden={true} />
      Cerrar sesión
    </button>
  );
}
