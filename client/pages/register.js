import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import { UserContext } from "../context";
import { useRouter } from "next/router";
import AuthForm from "../components/forms/AuthForm";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const [state] = useContext(UserContext);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, password, confirmPassword, secret);
    if (confirmPassword == password) {
      setLoading(true);
      try {
        const { data } = await axios.post(`/register`, {
          name: name,
          email: email,
          password: password,
          secret: secret,
        });

        if (data.error) {
          toast.error(data.error);
          setLoading(false);
        } else {
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setSecret("");
          setOk(data.ok);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    } else {
      toast.error("Confirm password should be same as password");
    }
  };

  if (state && state.token) router.push("/");

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-img text-light">
        <div className="col text-center">
          <h1 className="dispaly-1 text-center">Register</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            page="register"
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            secret={secret}
            setSecret={setSecret}
            loading={loading}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="text-center">
            Already registered?{" "}
            <Link href="/login" className="p-2">
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Modal
            title="Congratulations!"
            visible={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>You have successfully registered.</p>
            <Link href="/login" className="p-2">
              <a className="btn btn-success">Login</a>
            </Link>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Register;
