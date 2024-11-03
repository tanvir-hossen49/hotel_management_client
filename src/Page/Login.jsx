import { useForm } from "react-hook-form";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data, errors);
  };
  return (
    <div className="flex bg-slate-400 h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex   flex-col p-6 bg-white md:w-1/3 rounded-md"
        action=""
      >
        <h1 className="text-center text-slate-900 text-2xl font-semibold mb-8">
          LogIn
        </h1>
        <label className="mb-1 text-[15px] font-semibold">Email</label>
        <input
          className="p-2 rounded border-b-2 border-slate-500 focus:outline-none"
          placeholder="Email"
          required
          type="email"
          {...register("email")}
          name="email"
          id="email"
        />
        <label className="mt-3 mb-1 text-[15px] font-semibold">Password</label>
        <input
          className="p-2 rounded border-b-2 border-slate-500 focus:outline-none"
          placeholder="Password"
          type="password"
          required
          {...register("password")}
          name="password"
          id="password"
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <button className="mx-auto bg-slate-700 px-4 py-1 mt-4 rounded-lg text-[18px] font-semibold text-white">
          LogIn
        </button>
      </form>
    </div>
  );
};

export default Login;
