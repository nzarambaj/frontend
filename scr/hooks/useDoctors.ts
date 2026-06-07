import { useEffect, useState } from "react";
import { Doctor } from "../types/doctor";
import { getDoctors } from "../services/doctorService";

export function useDoctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  return { doctors };
}