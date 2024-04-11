import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { RouterProviderApp } from "./AppRouter";
import AuthProvider from "./Providers";
function App() {
  useEffect(() => {
    AOS.init({
      // Global settings
      once: false,
    });
  }, []);
  return (
    <>
      <div className="w-full bg-white">
        <div className="w-full m-auto">
          {/* <Home/>
      <Register/> */}
      <AuthProvider>
          <RouterProviderApp />
      </AuthProvider>
        </div>
      </div>
    </>
  );
}

export default App;
