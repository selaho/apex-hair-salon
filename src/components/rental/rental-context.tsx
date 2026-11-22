"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { OpenChair, RentalTierId } from "@/lib/data";

export type RentalForm = {
  name: string;
  phone: string;
  email: string;
  licenseNote: string;
  tier: RentalTierId;
  startDate: string;
  portfolio: string;
};

type RentalContextValue = {
  open: boolean;
  confirmed: boolean;
  selectedChair: OpenChair | null;
  selectedTier: RentalTierId;
  form: RentalForm;
  openRental: (opts?: {
    chair?: OpenChair;
    tier?: RentalTierId;
  }) => void;
  closeRental: () => void;
  setSelectedTier: (tier: RentalTierId) => void;
  setForm: (form: RentalForm) => void;
  submit: () => void;
  reset: () => void;
};

const emptyForm = (tier: RentalTierId = "standard"): RentalForm => ({
  name: "",
  phone: "",
  email: "",
  licenseNote: "",
  tier,
  startDate: "",
  portfolio: "",
});

const RentalContext = createContext<RentalContextValue | null>(null);

export function RentalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [selectedChair, setSelectedChair] = useState<OpenChair | null>(null);
  const [selectedTier, setSelectedTier] = useState<RentalTierId>("standard");
  const [form, setForm] = useState<RentalForm>(emptyForm());

  const reset = useCallback(() => {
    setConfirmed(false);
    setSelectedChair(null);
    setSelectedTier("standard");
    setForm(emptyForm());
  }, []);

  const openRental = useCallback(
    (opts?: { chair?: OpenChair; tier?: RentalTierId }) => {
      const tier = opts?.tier ?? opts?.chair?.preferredTier ?? "standard";
      setConfirmed(false);
      setSelectedChair(opts?.chair ?? null);
      setSelectedTier(tier);
      setForm(emptyForm(tier));
      setOpen(true);
    },
    []
  );

  const closeRental = useCallback(() => {
    setOpen(false);
  }, []);

  const submit = useCallback(() => {
    setConfirmed(true);
  }, []);

  const value = useMemo(
    () => ({
      open,
      confirmed,
      selectedChair,
      selectedTier,
      form,
      openRental,
      closeRental,
      setSelectedTier: (tier: RentalTierId) => {
        setSelectedTier(tier);
        setForm((prev) => ({ ...prev, tier }));
      },
      setForm,
      submit,
      reset,
    }),
    [
      open,
      confirmed,
      selectedChair,
      selectedTier,
      form,
      openRental,
      closeRental,
      submit,
      reset,
    ]
  );

  return (
    <RentalContext.Provider value={value}>{children}</RentalContext.Provider>
  );
}

export function useRental() {
  const ctx = useContext(RentalContext);
  if (!ctx) throw new Error("useRental must be used within RentalProvider");
  return ctx;
}
