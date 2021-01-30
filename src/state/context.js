import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Context = React.createContext();

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPageState] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLogin, setUserLogin] = useState("");

  useEffect(() => {
    if (!isLoggedIn) {
      setUserLogin("");
      setCurrentPageState("home");
    }
  }, [isLoggedIn]);

  const logIn = (userLogin, userPassword) => {
    if (userLogin !== "asd@asd" || userPassword !== "123123") {
      toast.error("Неверная комбинация логина и пароля");
      return;
    } else {
      toast.warn("Добро пожаловать !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setIsLoggedIn(true);
    setUserLogin(userLogin);
  };
  const logOut = () => {
    setIsLoggedIn(false);
  };
  const setCurrentPage = (page) => {
    setCurrentPageState(page);
  };

  return (
    <Context.Provider
      value={{
        currentPage,
        setCurrentPage,
        isLoggedIn,
        logIn,
        logOut,
        userLogin,
      }}
    >
      {children}
    </Context.Provider>
  );
};

function Card(props) {
  return (
    <div>
      <h1>Title</h1>
      <div>{props.children}</div>
    </div>
  );
}

export const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />;
          }}
        </Context.Consumer>
      );
    }
  };
};
