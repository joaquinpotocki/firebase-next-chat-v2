import { auth } from "@/firebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

export default function AuthPage() {
  const onClick = () => {
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  return (
    <div className="page">
      <div className="logo">👋 💬 🤖 </div>
      <div className="text">Bienvenido a ChatRCE</div>
      <div className="text" style={{ paddingBottom: "16px" }}>
        Inicia sesion para continuar
      </div>
      <button className="button" onClick={onClick}>
        Log In
      </button> <button className="button" onClick={onClick}>
        Sign Up
      </button>
    </div>
  );  
}