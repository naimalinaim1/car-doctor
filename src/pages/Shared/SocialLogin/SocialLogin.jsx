import { useContext } from "react";
import { AuthContext } from "../../../system/providers/AuthProvider";

const SocialLogin = () => {
  const { googleSingIn } = useContext(AuthContext);
  const handleGoogleSingIn = () => {
    googleSingIn()
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSingIn}
          className="btn btn-circle btn-outline"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
