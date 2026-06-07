export async function getPatients() {
  const res = await fetch("http://localhost:5000/patients");
  return res.json();
}