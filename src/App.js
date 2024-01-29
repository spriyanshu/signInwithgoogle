// Import necessary components and libraries
import React from 'react';
import './App.css';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  const onSuccess = (response) => {
    console.log({ response });
    console.log('User details:', response.profileObj);

    // Send the user ID to your Node server for verification
    try {
      // ... make API call to your server
    } catch (error) {
      // Handle server communication errors
    }
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={"1011523113435-levqurnusdoicaimh673u7fidp0c07df.apps.googleusercontent.com"}>
        {/* Your application components here */}
        <GoogleLogin
          clientId={"1011523113435-levqurnusdoicaimh673u7fidp0c07df.apps.googleusercontent.com"}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={(error) => console.error(error)}
        />
      </GoogleOAuthProvider>

    </div>
  );
}

export default App;
