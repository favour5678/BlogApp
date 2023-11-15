import React, { useContext, useEffect, } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const Navbar = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      // .then(response => response.json())
      // .then((userInfo) => {
      //   setUsername(userInfo.username);
      // })
      // .catch((error) => {
      //   console.error("Error fetching user information:", error);
      // });
      .then(response => {
        response.json().then(userInfo => {
          setUserInfo(userInfo)
        })
      })
  }, []);

  const handleLogOut = () => {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null)
  }

  // useEffect(() => {
  //   const fetchUserInfo = async () => {
  //     try {
  //       const response = await fetch("http://localhost:4000/profile", {
  //         credentials: "include",
  //       });
        
  //       if (response.ok) {
  //         const userInfo = await response.json();
  //         setUsername(userInfo.user.username);
  //       } else {
  //         console.error("Failed to fetch user information:", response.statusText);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user information:", error.message);
  //     }
  //   };

  //   fetchUserInfo();
  // }, []);
  const username = userInfo?.username;

  return (
    <nav className="bg-[#F9F9F9] container max-w-full shadow-md">
      <div className="flex justify-around items-center h-[60px]">
        <Link
          to={"/"}
          className="text-3xl font-semibold hover:underline underline-offset-4 text-[#888888]"
        >
          F.A's Blog
        </Link>
        <ul className="flex items-center font-semibold text-[17px] space-x-8">
          <li className="hover:underline underline-offset-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:underline underline-offset-4">
            <Link to={"/about"}>About</Link>
          </li>
          {username && (
            <>
              <li>
              <Link to={"/createPost"}>Create new post</Link>
              </li>
              <li onClick={handleLogOut}>
                <Link>Log Out</Link>
              </li>
            </>
          )}  {!username && ( 
            <>
              <li>
                <Link to={"/login"} className="button">
                  Login
                </Link>
              </li>
              <li>
                <Link to={"/createAccount"} className="button">
                  Create Account
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
