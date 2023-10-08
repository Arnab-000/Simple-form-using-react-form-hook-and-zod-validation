export default function ErrorMessage({ message }) {
  if (!message) {
    return null
  }
  return <p className=" text-red-700 font-semibold">{message}</p>
}
