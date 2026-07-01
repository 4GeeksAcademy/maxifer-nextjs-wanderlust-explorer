"use client";

import { Bell, CircleHelp, CreditCard, MessageSquareWarning, UserRound } from "lucide-react";
import { useFavorites } from "@/components/providers/favorites-provider";
import ProfileAdventureCard from "./components/profile-adventure-card";
import ProfileHeader from "./components/profile-header";
import ProfileLogoutButton from "./components/profile-logout-button";
import type { ProfileMenuItem } from "./components/profile-menu-section";
import ProfileMenuSection from "./components/profile-menu-section";
import ProfileStats from "./components/profile-stats";

const simulatedUser = {
  name: "Elena Rodriguez",
  location: "Madrid, España",
  tripsCount: 8,
  reviewsCount: 15,
  upcomingDateRange: "15 de julio - 22 de julio",
  upcomingDestination: "Costa Amalfitana, Italia",
  avatarInitials: "ER",
};

const accountItems: ProfileMenuItem[] = [
  { id: "personal", label: "Información personal", icon: UserRound },
  { id: "payments", label: "Pagos y cobros", icon: CreditCard },
  { id: "notifications", label: "Notificaciones", icon: Bell },
];

const supportItems: ProfileMenuItem[] = [
  { id: "help", label: "Centro de ayuda", icon: CircleHelp },
  { id: "feedback", label: "Envíanos tus comentarios", icon: MessageSquareWarning },
];

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <section className="mx-auto max-w-xl space-y-5 pb-4 md:max-w-3xl md:space-y-6">
      <ProfileHeader
        name={simulatedUser.name}
        location={simulatedUser.location}
        avatarInitials={simulatedUser.avatarInitials}
      />

      <ProfileStats
        savedCount={favoriteIds.length}
        tripCount={simulatedUser.tripsCount}
        reviewCount={simulatedUser.reviewsCount}
      />

      <ProfileAdventureCard
        dateRange={simulatedUser.upcomingDateRange}
        destination={simulatedUser.upcomingDestination}
      />

      <ProfileMenuSection title="Cuenta" items={accountItems} />
      <ProfileMenuSection title="Soporte" items={supportItems} />
      <ProfileLogoutButton />
    </section>
  );
}
