import React from 'react';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
    console.log("test etest test test");
    // Handle the response, send token to the backend
    if (response && response.accessToken) {
        console.log("sucessfully authenticated");
        const tokenId = response.tokenId;
        console.log("token " + tokenId);
        // Send tokenId to the backend for verification
        // You can use an HTTP request or your preferred method
    } else {
        console.log("Unsucessfully authenticated");

    }

};
const responseGooglex = (response) => {
    // Handle the response, send token to the backend
    if (response && response.accessToken) {
        console.log("sucessfully authenticated");
        const tokenId = response.tokenId;
        console.log("token " + tokenId);
        // Send tokenId to the backend for verification
        // You can use an HTTP request or your preferred method
    } else {
        console.log("Unsucessfully authenticated");

    }

};

const GoogleLoginButton = () => {
    return (
        <div>
            <GoogleLogin
                clientId={"1011523113435-10qcdrb83tajufmcef2ginr9kasoq7ub.apps.googleusercontent.com"} // Replace with your Google API client ID
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGooglex}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default GoogleLoginButton;
