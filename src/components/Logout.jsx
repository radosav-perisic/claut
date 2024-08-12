import { GoogleLogout } from "react-google-login";

const clientId =
  "846342644392-seh35r69e35ma2pu9i97pcn4c1j8qrc2.apps.googleusercontent.com";

function Logout() {
  const onSuccess = (res) => {
    console.log("Log out successfull!");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Login"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
