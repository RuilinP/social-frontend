import React from "react";
import { Button } from "react-bootstrap";

function GoogleLoginButton() {
  const handleLogin = () => {
    window.location.href = "http://34.27.144.90:5000/auth/google";
  };

  return (
    <Button variant="primary" onClick={handleLogin}>
      Login with Google
    </Button>
  );
}

export default GoogleLoginButton;
