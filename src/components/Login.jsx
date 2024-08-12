import { GoogleLogin } from "react-google-login";

const clientId =
  "846342644392-seh35r69e35ma2pu9i97pcn4c1j8qrc2.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("Login Success! Current user: ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login FAILED! Current user: ", res);
  };
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
