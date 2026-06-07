interface Props {
  open: boolean;
}

export default function DoctorModal({ open }: Props) {
  if (!open) return null;

  return (
    <div>
      <h2>Doctor Modal</h2>
    </div>
  );
}