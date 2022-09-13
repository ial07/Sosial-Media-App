import { useContext, useState } from "react";
import axios from "axios";
import AuthForm from "../components/forms/AuthForm";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserContext } from "../context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [state, setState] = useContext(UserContext);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`/login`, {
        email: email,
        password: password,
      });
      console.log(data);

      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        //updated context
        setState({
          user: data.user,
          token: data.token,
        });

        //save in local storage
        window.localStorage.setItem("auth", JSON.stringify(data));

        router.push("/user/dashboard");
      }
    } catch (err) {
      console.log(err);
      // toast.error(err.response.data);
      setLoading(false);
    }
  };

  if (state && state.token) router.push("/user/dashboard");

  return (
    <div className="container-fluid">
      <div className="row py-5 text-light bg-default-img">
        <div className="col text-center">
          <h1 className="dispaly-1 text-center">Login</h1>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            page="login"
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="text-center">
            Don't have an account{" "}
            <Link href="/register" className="p-2">
              Register
            </Link>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="text-center">
            <Link href="/forgot-password" className="p-2">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
