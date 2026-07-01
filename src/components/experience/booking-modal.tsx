"use client";

interface BookingModalProps {
  isOpen: boolean;
  selectedDate: string;
  peopleCount: number;
  totalPrice: number;
  minDate: string;
  onClose: () => void;
  onDateChange: (value: string) => void;
  onDecreasePeople: () => void;
  onIncreasePeople: () => void;
  onConfirm: () => void;
}

export default function BookingModal({
  isOpen,
  selectedDate,
  peopleCount,
  totalPrice,
  minDate,
  onClose,
  onDateChange,
  onDecreasePeople,
  onIncreasePeople,
  onConfirm,
}: BookingModalProps) {
  return (
    <div
      className={`fixed inset-0 z-70 flex items-end p-3 transition-opacity duration-250 ease-out motion-reduce:transition-none md:items-center md:justify-center ${
        isOpen ? "bg-black/40 opacity-100" : "pointer-events-none bg-black/0 opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`w-full max-w-md rounded-3xl border border-border bg-background p-5 shadow-panel transition duration-300 ease-out motion-reduce:transition-none ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-5 scale-[0.98] opacity-0 md:translate-y-2"
        }`}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-heading text-xl font-bold text-foreground">Completar reserva</h3>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-lg text-muted"
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-muted">Fecha</span>
            <input
              type="date"
              min={minDate}
              value={selectedDate}
              onChange={(event) => onDateChange(event.target.value)}
              className="h-12 w-full rounded-xl border border-border bg-surface px-3 text-foreground outline-none transition focus:border-primary"
            />
          </label>

          <div>
            <p className="mb-2 text-sm font-semibold text-muted">Cantidad de personas</p>
            <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-3 py-2">
              <button
                type="button"
                onClick={onDecreasePeople}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-xl font-semibold text-foreground"
                aria-label="Reducir personas"
              >
                -
              </button>
              <p className="text-lg font-bold text-foreground">{peopleCount}</p>
              <button
                type="button"
                onClick={onIncreasePeople}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-xl font-semibold text-foreground"
                aria-label="Aumentar personas"
              >
                +
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-surface-low p-3">
            <p className="text-sm text-muted">Total estimado</p>
            <p className="text-2xl font-bold text-primary">${totalPrice}</p>
          </div>

          <button
            type="button"
            onClick={onConfirm}
            className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-primary px-6 text-base font-semibold text-white shadow-card transition hover:bg-primary-hover"
          >
            Confirmar reserva
          </button>
        </div>
      </div>
    </div>
  );
}
