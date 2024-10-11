"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { debounce } from "lodash";
import toast from "react-hot-toast";

export const Context = createContext();
const ContextProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [tracking, setTracking] = useState(false);
  const [TrackingData, setTrackingData] = useState({});
  const [signup, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  // sign up user
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/signup", signup);
      // console.log({response},"<-------------")
      setLoading(false);
      setError(response.data.status !== 201);
      setMessage(response.data.message);

      if (response.data.message === "User Registered Successfully") {
        router.push("/loginpage");
        toast.success("User created successfully");
        setSignUp({
          username: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  };

  // login user
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/login", login);
      setLoading(false);
      setError(response.data.status !== 201);
      setMessage(response.data.message);

      if (response.data.message === "User login successfully") {
        router.push("/");

        toast.success("User login successfully");
        setLogin({
          username: "",
          password: "",
        });
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 3500);
    }
  }, [error]);

  // get user info
  useEffect(() => {
    let debouncedCurrentUser;
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/login-user");
        setUser(response.data);
      } catch (error) {
        setUser(null);
        console.log(error);
      }
    };
    debouncedCurrentUser = debounce(fetchUser, 1500);
    debouncedCurrentUser();

    return () => {
      debouncedCurrentUser.cancel();
    };
  }, [login]);

  // logout user

  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/logout");
      setUser(null);
      router.push("/loginpage");
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (!user?.isAdmin) {
  //     router.push("/");
  //   }
  // }, [user?.isAdmin, router]);
  return (
    <Context.Provider
      value={{
        signup,
        setSignUp,
        handleSignUpSubmit,
        loading,
        error,
        message,
        login,
        setLogin,
        handleLoginSubmit,
        user,
        handleLogout,
        tracking,
        setTracking,
        TrackingData,
        setTrackingData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
