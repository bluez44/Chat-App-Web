import LoginForm from "../../components/LoginForm";

function Login() {
  return (
    <div className="flex h-screen">
      <img
        className="rounded-r-md"
        src="/src/assets/login-img.png"
        alt="login-img"
      />
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="rounded-xl border-slate-50 border py-10 px-10 bg-slate/5 min-w-2xl shadow-xl max-w-2xl">
          <div className="mb-24 flex items-center justify-between">
            <h1 className="text-3xl uppercase">Login</h1>
            <button className="text-blue-500 cursor-pointer hover:text-blue-600 duration-100">
              Sign Up
            </button>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
