import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import ErrorMessage from "./Errormessage"
import FinalMessage from "./AfterSubmit"

const phoneRegex = new RegExp(/^(01\d{9})$/)
const mailRegex = new RegExp(/[a-z]+@gmail\.com/i)

const schema = z.object({
  fullname: z.string().min(1, { message: "This field is required" }),
  givenname: z.string().min(1),
  surname: z.string().min(1, { message: "This field is required" }),
  crushname: z
    .string()
    .min(1, { message: "Oh come on! It will be secret between uss" }),
  dateOfBirth: z.coerce.date().max(new Date(), { message: "Invalid Date" }),
  countryOfBirth: z.string(),
  districtOfBirth: z.string(),
  animal: z.string(),
  gender: z.string(),
  ninja: z.boolean(),
  contact: z
    .string()
    .regex(phoneRegex, { message: "Give correctly, gonna call you midnight" }),
  mail: z.string().regex(mailRegex, { message: "Only Gmail Allowed" }),
  maritalStatus: z.string(),
})

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const [submittedData, setSubmittedData] = useState(null)

  const onSubmit = (data) => {
    console.log(data)
    setSubmittedData(data)
  }
  return (
    <>
      {submittedData ? (
        <FinalMessage data={submittedData} />
      ) : (
        <div className="w-50vw max-w-[80vw]  mt-6 p-4 mx-auto bg-slate-400">
          <h1 className=" mb-5 font-medium text-center">
            This is just a simple form created using React-form-hook and zod.
            The creator of this form is heartbroken for many reasons.
            <p className="text-slate-400 hover:text-black text-center">
              Just kidding ^.^ Arnab is a great guyy
            </p>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2">
              <label
                htmlFor="fullname"
                className="text-slate-800 font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Full Name (as per NID/BRC)
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="border border-black h-8 w-[40%] mb-3"
                {...register("fullname", { required: true })}
              />
              <ErrorMessage message={errors.fullname?.message} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex gap-1 justify-between">
                <label
                  htmlFor="givenname"
                  className="text-slate-800 font-medium"
                >
                  Given Name
                  <br />
                  (প্রদত্ত নাম/ নামের প্রথম অংশ)
                </label>
                <input
                  type="text"
                  id="givenname"
                  name="givenname"
                  className="border border-black h-8 w-[80%]"
                  {...register("givenname")}
                />
                <ErrorMessage message={errors.givenname?.message} />
              </div>
              <div className="flex gap-1 items-start justify-between">
                <label
                  htmlFor="surname"
                  className="text-slate-800 font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Surname
                  <br />
                  (বংশগত নাম/নাম এর শেষ অংশ)
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  className="border border-black h-8 w-[80%]"
                  {...register("surname", { required: true })}
                />
                <ErrorMessage message={errors.surname?.message} />
              </div>

              <div className="flex gap-1 items-start justify-between">
                <label
                  htmlFor="crushname"
                  className="text-slate-800 font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Name of your Crush
                  <br />
                  (কষ্ট)
                </label>
                <input
                  type="text"
                  id="crushname"
                  name="crushname"
                  className="border border-black h-8 w-[80%]"
                  {...register("crushname", { required: true })}
                />
                <ErrorMessage message={errors.crushname?.message} />
              </div>

              <div className="flex gap-1 justify-between">
                <label
                  htmlFor="dateOfBirth"
                  className="text-slate-800 font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Date of Birth
                  <br />
                  (জন্ম তারিখ)
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="border border-black h-8 w-[80%]"
                  {...register("dateOfBirth", { required: true })}
                />
                <ErrorMessage message={errors.dateOfBirth?.message} />
              </div>

              <div className="flex gap-1 items-start justify-between">
                <label
                  htmlFor="countryOfBirth"
                  className="text-slate-800 font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Country of Birth
                  <br />
                  (জন্মভূমি )
                </label>
                <input
                  type="text"
                  id="countryOfBirth"
                  name="countryOfBirth"
                  className="border border-black h-8 w-[80%]"
                  {...register("countryOfBirth", { required: true })}
                />
                <ErrorMessage message={errors.countryOfBirth?.message} />
              </div>

              <div className="flex gap-1 items-start justify-between">
                <label
                  htmlFor="districtOfBirth"
                  className="text-slate-800 font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  District of Birth
                  <br />
                  (জন্ম জেলা)
                </label>
                <select
                  id="districtOfBirth"
                  className="border border-black h-8 w-[80%]"
                  name="districtOfBirth"
                  {...register("districtOfBirth", { required: true })}
                >
                  <option value="konoda">Konoha</option>
                  <option value="uganda">Uganda</option>
                  <option value="wano">Land of Wano</option>
                  <option value="sendai">Sendai City</option>
                </select>

                <ErrorMessage message={errors.districtOfBirth?.message} />
              </div>

              <div className="flex gap-1 items-start justify-between">
                <label htmlFor="ninja" className="text-slate-800 font-medium">
                  I know ninjutsu
                  <br />
                  (আমি নিনজা টেকনিক জানি)
                </label>
                <input
                  type="checkbox"
                  id="ninja"
                  name="ninja"
                  className="h-8 w-[50%]"
                  {...register("ninja")}
                />
                <ErrorMessage message={errors.ninja?.message} />
              </div>

              <div className="flex gap-1 items-start justify-between">
                <label
                  htmlFor="gender"
                  className="text-slate-800 font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Gender (লিঙ্গ)
                </label>
                <select
                  id="gender"
                  className="border border-black h-8 w-[80%]"
                  name="gender"
                  {...register("gender", { required: true })}
                >
                  <option value="male">Male Ninja</option>
                  <option value="female">Female Ninja</option>
                  <option value="secret">Secret Ninja</option>
                  <option value="other">Prefer not to say</option>
                </select>
                <ErrorMessage message={errors.gender?.message} />
              </div>

              <div className="flex gap-1 items-start justify-between">
                <label
                  htmlFor="animal"
                  className="text-slate-800 font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Animal (প্রানী)
                </label>
                <select
                  id="animal"
                  className="border border-black h-8 w-[80%]"
                  name="animal"
                  {...register("animal", { required: true })}
                >
                  <option value="vampire">Vampire</option>
                  <option value="Ninja">Ninja</option>
                  <option value="frog">Frog</option>
                  <option value="other">Not a human of course!</option>
                </select>
                <ErrorMessage message={errors.animal?.message} />
              </div>

              <div className="flex gap-1 items-start justify-between">
                <label
                  htmlFor="contact"
                  className="text-slate-800 font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Contact No
                  <br />
                  (যোগাযোগের নম্বর)
                </label>
                <input
                  type="number"
                  id="contact"
                  name="contact"
                  className="border border-black h-8 w-[80%]"
                  {...register("contact", { required: true })}
                />
                <ErrorMessage message={errors.contact?.message} />
              </div>
              <div className="flex gap-1 items-start justify-between">
                <label
                  htmlFor="mail"
                  className="text-slate-800 font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Mail
                  <br />
                  (ই মেইল)
                </label>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  className="border border-black h-8 w-[80%]"
                  {...register("mail", { required: true })}
                />
                <ErrorMessage message={errors.mail?.message} />
              </div>

              <div className="flex gap-1 items-start justify-between">
                <label
                  htmlFor="maritalStatus"
                  className="text-slate-800 font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Marital Status (বৈবাহিক অবস্থা)
                </label>
                <select
                  id="maritalStatus"
                  className="border border-black h-8 w-[80%]"
                  name="maritalStatus"
                  {...register("maritalStatus", { required: true })}
                >
                  <option value="married">Got married and now crying</option>
                  <option value="unmarried">Still safe</option>
                </select>
                <ErrorMessage message={errors.maritalStatus?.message} />
              </div>
            </div>

            <div className="flex justify-center mt-2">
              <button className="border border-solid bg-slate-700 font-bold text-slate-400 p-2 w-fit mx-auto">
                Submit
              </button>
            </div>
          </form>
          {/* {submittedData && <FinalMessage data={submittedData} />} */}
        </div>
      )}
    </>
  )
}

export default App
