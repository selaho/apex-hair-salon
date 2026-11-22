"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Barber, Service } from "@/lib/data";

export type BookingStep =
  | "services"
  | "staff"
  | "datetime"
  | "details"
  | "confirm";

export type ClientDetails = {
  name: string;
  phone: string;
  email: string;
  notes: string;
};

type BookingContextValue = {
  open: boolean;
  step: BookingStep;
  selectedServices: Service[];
  selectedBarber: Barber | "any" | null;
  date: string;
  time: string;
  details: ClientDetails;
  openBooking: (opts?: { service?: Service; barber?: Barber }) => void;
  closeBooking: () => void;
  setStep: (step: BookingStep) => void;
  toggleService: (service: Service) => void;
  setSelectedBarber: (barber: Barber | "any") => void;
  setDate: (date: string) => void;
  setTime: (time: string) => void;
  setDetails: (details: ClientDetails) => void;
  reset: () => void;
  totalPrice: number;
  totalDuration: number;
};

const BookingContext = createContext<BookingContextValue | null>(null);

const emptyDetails: ClientDetails = {
  name: "",
  phone: "",
  email: "",
  notes: "",
};

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<BookingStep>("services");
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedBarber, setSelectedBarber] = useState<Barber | "any" | null>(
    null
  );
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState<ClientDetails>(emptyDetails);

  const reset = useCallback(() => {
    setStep("services");
    setSelectedServices([]);
    setSelectedBarber(null);
    setDate("");
    setTime("");
    setDetails(emptyDetails);
  }, []);

  const openBooking = useCallback(
    (opts?: { service?: Service; barber?: Barber }) => {
      reset();
      if (opts?.service) {
        setSelectedServices([opts.service]);
        setStep(opts.barber ? "datetime" : "staff");
      }
      if (opts?.barber) {
        setSelectedBarber(opts.barber);
        if (!opts.service) setStep("services");
      }
      setOpen(true);
    },
    [reset]
  );

  const closeBooking = useCallback(() => {
    setOpen(false);
  }, []);

  const toggleService = useCallback((service: Service) => {
    setSelectedServices((prev) => {
      const exists = prev.some((s) => s.id === service.id);
      if (exists) return prev.filter((s) => s.id !== service.id);
      return [...prev, service];
    });
  }, []);

  const totalPrice = useMemo(
    () => selectedServices.reduce((sum, s) => sum + s.price, 0),
    [selectedServices]
  );
  const totalDuration = useMemo(
    () => selectedServices.reduce((sum, s) => sum + s.duration, 0),
    [selectedServices]
  );

  const value = useMemo(
    () => ({
      open,
      step,
      selectedServices,
      selectedBarber,
      date,
      time,
      details,
      openBooking,
      closeBooking,
      setStep,
      toggleService,
      setSelectedBarber,
      setDate,
      setTime,
      setDetails,
      reset,
      totalPrice,
      totalDuration,
    }),
    [
      open,
      step,
      selectedServices,
      selectedBarber,
      date,
      time,
      details,
      openBooking,
      closeBooking,
      toggleService,
      reset,
      totalPrice,
      totalDuration,
    ]
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
