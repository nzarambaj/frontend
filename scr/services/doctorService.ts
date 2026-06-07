import { Doctor } from "../types/doctor";

export async function getDoctors(): Promise<Doctor[]> {
  return [
    {
      id: 1,
      name: "Dr John",
      specialization: "Radiology",
      email: "john@example.com",
      phone: "123456",
      department: "Imaging",
    },
  ];
}