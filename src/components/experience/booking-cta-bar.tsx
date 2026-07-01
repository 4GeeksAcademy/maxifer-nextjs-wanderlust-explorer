"use client";

import { useEffect, useMemo, useState } from "react";
import BookingModal from "@/components/experience/booking-modal";

interface BookingCtaBarProps {
  price: number;
}

function getToday() {
  return new Date().toISOString().split("T")[0] ?? "";
}

export default function BookingCtaBar({ price }: BookingCtaBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [peopleCount, setPeopleCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState(getToday());
  const minDate = useMemo(() => getToday(), []);
  const totalPrice = peopleCount * price;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 backdrop-blur md:px-6">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-muted">Precio por persona</p>
            <p className="text-2xl font-bold text-primary">
              ${price} <span className="text-base font-medium text-muted">/ total</span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex h-12 min-w-44 items-center justify-center rounded-2xl bg-primary px-8 text-base font-semibold text-white shadow-card transition hover:bg-primary-hover"
          >
            Reservar
          </button>
        </div>
      </div>

      <BookingModal
        isOpen={isOpen}
        selectedDate={selectedDate}
        peopleCount={peopleCount}
        totalPrice={totalPrice}
        minDate={minDate}
        onClose={() => setIsOpen(false)}
        onDateChange={setSelectedDate}
        onDecreasePeople={() => setPeopleCount((value) => Math.max(1, value - 1))}
        onIncreasePeople={() => setPeopleCount((value) => Math.min(12, value + 1))}
        onConfirm={() => setIsOpen(false)}
      />
    </>
  );
}
