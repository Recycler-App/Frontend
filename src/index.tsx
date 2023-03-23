import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import AuthenticationContextProvider from './context/AuthenticationContext'
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserContextProvider from "./context/UserContext"


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}>
  <AuthenticationContextProvider>
    <UserContextProvider>
    <React.StrictMode>
      <ColorModeScript />
      <App />
    </React.StrictMode>
    </UserContextProvider>
  </AuthenticationContextProvider>
  </GoogleOAuthProvider>
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

