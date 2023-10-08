export default function FinalMessage({ data }) {
  const { fullname, crushname, contact, maritalStatus } = data // Destructure fullname from data
  if (maritalStatus === "married") {
    return (
      <div className="w-50vw max-w-[80vw]  mt-6 p-4 mx-auto bg-slate-400">
        <p className=" font-medium text-2xl">
          Hey {fullname}, as you are already married. Make sure your kids love
          Itachi
        </p>
      </div>
    )
  }
  return (
    <div className="w-50vw max-w-[80vw]  mt-6 p-4 mx-auto bg-slate-400">
      <p className=" font-medium text-2xl">
        Hey {fullname}, I just want you to know that {crushname} loves you so
        much that... {crushname} has a tattoo in which {contact} is written.
        Don't hesitate, just confess your love...
      </p>
      <br />
      <p className=" font-extrabold text-3xl">Best of Luck!</p>
    </div>
  )
}
