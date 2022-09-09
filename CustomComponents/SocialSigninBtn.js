import React from "react";
import CustomButton from "./CustomButton";
const SocialSigninBtn = () => {
  const onLoginFacebookPressed = () => {
    console.warn("facebook");
  };
  const onLoginGooglePressed = () => {
    console.warn("google");
  };
  const onLoginApplePressed = () => {
    console.warn("apple");
  };
  return (
    <>
      <CustomButton
        text="Sign In  with Facebook"
        onPress={onLoginFacebookPressed}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onLoginGooglePressed}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onLoginApplePressed}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSigninBtn;
