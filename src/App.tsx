import { useState, ChangeEvent } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  aboutMe: string;
  email: string;
  dream: string;
  self: string;
  errors?: string;
  work: string;
  job: string;
  salary: string;
}

export default function Forms() {
  const [val, setVal] = useState<boolean>(false);
  const [select1, setSelect1] = useState<string>(``);
  const [select2, setSelect2] = useState<string>(``);

  const radioChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setSelect1(event.target.value);
  };
  const radioChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setSelect2(event.target.value);
  };

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors }
  } = useForm<LoginForm>({
    mode: "onChange"
  });
  const onValid = (data: LoginForm) => {
    console.log({ data });
    setVal(true);
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <div className="h-screen flex felx-row justify-center items-center w-full bg-slate-500">
      <form
        className="h-100  w-[30%] justify-center items-center mx-3 bg-red-200 
        border-[3px]  rounded-xl border-gray-800 
        border-b-[6px] border-r-[6px] border-r-gray-800 border-b-gray-800 mt-4 text-gray-900 p-6 m-4"
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        <h1 className="mt-2 mb-3 text-2xl font-bold flex justify-center items-center ">
          Job Application Form
        </h1>
        <div className="mt-5 ">
          <h2 className="mb-2 text-sm font-semibold">
            What department do you want to work for?
            {select1 === "" && (
              <span className="text-sm text-red-500 ml-2">*required</span>
            )}
          </h2>

          <div className="text-sm font-medium mb-[1.3px]">
            <input
              {...register("work", {
                required: "*required."
              })}
              type="radio"
              id="work1"
              name="work"
              value="Sales"
              checked={select1 === "Sales"}
              onChange={radioChange1}
            />
            <label className="ml-1" htmlFor="Sales">
              Sales
            </label>
          </div>
          <div className="text-sm font-medium mb-[1.3px]">
            <input
              {...register("work", {
                required: "*required."
              })}
              type="radio"
              id="work2"
              name="work"
              value="Marketing"
              checked={select1 === "Marketing"}
              onChange={radioChange1}
            />
            <label className="ml-1" htmlFor="Marketing">
              Marketing
            </label>
          </div>
          <div className="text-sm font-medium mb-[1.3px]">
            <input
              {...register("work", {
                required: "*required."
              })}
              type="radio"
              id="work3"
              name="work"
              value="Accounting"
              checked={select1 === "Accounting"}
              onChange={radioChange1}
            />
            <label className="ml-1" htmlFor="Accounting">
              Accounting
            </label>
          </div>
          <div className="text-sm font-medium mb-[1.3px]">
            <input
              {...register("work", {
                required: "*required."
              })}
              type="radio"
              id="work4"
              name="work"
              value="Customer"
              checked={select1 === "Customer"}
              onChange={radioChange1}
            />
            <label className="ml-1" htmlFor="Customer">
              Customer Service
            </label>
          </div>
        </div>

        <div className="mt-2 flex-row  mb-2 ">
          <h2 className="mb-2 text-sm font-semibold">
            why do you want to join this company?
            {select2 === "" && (
              <span className="text-sm text-red-500 ml-2">*required</span>
            )}
          </h2>
          <div className="text-sm font-medium mb-[1.3px]">
            <input
              {...register("job", {
                required: "*required."
              })}
              value="I want money!"
              checked={select2 === "I want money!"}
              onChange={radioChange2}
              type="radio"
              id="join1"
              name="job"
            />
            <label className="ml-1" htmlFor="join1">
              I want money!
            </label>
          </div>
          <div className="text-sm font-medium mb-[1.3px]">
            <input
              {...register("job", {
                required: "*required."
              })}
              value="I love this company"
              checked={select2 === "I love this company"}
              onChange={radioChange2}
              type="radio"
              id="join2"
              name="job"
            />
            <label className="ml-1" htmlFor="join2">
              I love this company
            </label>
          </div>
          <div className="text-sm font-medium mb-[1.3px]">
            <input
              {...register("job", {
                required: "*required."
              })}
              value="I want to learn"
              checked={select2 === "I want to learn"}
              onChange={radioChange2}
              type="radio"
              id="join3"
              name="job"
            />
            <label className="ml-1" htmlFor="join3">
              I want to learn
            </label>
          </div>
          <div className="text-sm font-medium mb-[1.3px]">
            <input
              {...register("job", {
                required: "*required."
              })}
              value="I dont`t know why"
              checked={select2 === "I dont`t know why"}
              onChange={radioChange2}
              type="radio"
              id="join4"
              name="job"
            />
            <label className="ml-1" htmlFor="join4">
              I dont`t know why
            </label>
          </div>
        </div>

        <div className="mb-2 text-sm font-semibold">
          <label htmlFor="select">Salary</label>
          <div className="mt-1.5">
            <select
              {...register("salary")}
              className="justify-center items-center w-full border-2 rounded-lg"
              name="salary"
              id="select"
            >
              <option value="$50K" label="50K">
                $50K
              </option>
              <option value="$100K" label="100K">
                $100K
              </option>
              <option value="$150K" label="150K">
                $150K
              </option>
              <option value="$200K" label="200K">
                $200K
              </option>
            </select>
          </div>
        </div>
        <div className="mb-2 text-sm font-semibold">
          <h2>intoduce your self</h2>
          <div className="mt-1.5">
            <input
              {...register("self", {
                required: "please write down your introduction.",
                minLength: {
                  value: 5,
                  message: "Introduction should have at least 5 characters."
                }
              })}
              type="text"
              autoComplete="off"
              className={`justify-center
          items-center
          w-full
          border-2
          rounded-lg ${Boolean(errors.self) ? " border-red-500" : ""}`}
            />
            {errors?.self && (
              <div className="text-sm font-bold text-red-800">
                {errors?.self?.message}
              </div>
            )}
          </div>
        </div>
        <div className="mb-2 text-sm font-semibold">
          <h2>Tell us what your dreams are</h2>
          <div className="mt-1.5">
            <input
              {...register("dream", {
                required: "please write down your dreams.",
                minLength: {
                  value: 10,
                  message: "Please write more than 10 characters."
                }
              })}
              type="text"
              autoComplete="off"
              className={`justify-center
          items-center
          w-full
          border-2
          rounded-lg ${Boolean(errors.dream) ? " border-red-500" : ""}`}
            />
            {errors?.dream && (
              <div className=" text-sm font-bold text-red-800">
                {errors?.dream?.message}
              </div>
            )}
          </div>
        </div>
        <div className="mb-2 text-sm font-semibold">
          <label htmlFor="email">email</label>
          <div className="mt-1.5">
            <input
              {...register("email", {
                required: "please write down your email.",
                validate: {
                  notGmail: (value) =>
                    value.includes("@naver.com") || "Only @naver.com. "
                }
              })}
              type="email"
              autoComplete="off"
              className={`justify-center
            items-center
            w-full
            border-2
            rounded-lg ${Boolean(errors.email) ? " border-red-500" : ""}`}
            />
            <div>
              {errors?.email && (
                <div className="text-sm font-bold text-red-800">
                  {errors?.email?.message}
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          className="w-full mt-2 bg-yellow-300
          border-[1px] p-2 text-base font-semibold rounded-lg border-gray-600 
          border-b-[4px] border-r-[4px] border-r-gray-600 border-b-gray-600 "
        >
          Give Me This Job
        </button>
        {val ? (
          <h2 className="text-center mt-2  text-lg font-bold">
            회원가입 성공!
          </h2>
        ) : null}
      </form>
    </div>
  );
}
