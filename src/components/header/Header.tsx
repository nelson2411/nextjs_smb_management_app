"use client"
import Link from "next/link"
import React from "react"
import { FaUserCircle } from "react-icons/fa"
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"
import ThemeContext from "../../context/themeContext"
export const Header = () => {
  const { darkTheme, setDarkTheme } = React.useContext(ThemeContext)

  const turnOnLightMode = () => {
    setDarkTheme(false)
    localStorage.removeItem("hotel-theme")
  }

  const turnOnDarkMode = () => {
    setDarkTheme(true)
    localStorage.setItem("hotel-theme", "true")
  }

  return (
    <header className="py-10 px-8 mx-auto text-xl flex flex-wrap md:flex-nowrap justify-between items-center shadow-md">
      <div className="flex items-center w-full md:2/3">
        <Link href="/" className="font-black text-tertiary-dark">
          Business Management App
        </Link>
        <ul className="flex items-center ml-5">
          <li className="flex items-center">
            <Link href="/auth">
              <FaUserCircle className="cursor-pointer" />
            </Link>
          </li>
          <li className="ml-2">
            {darkTheme ? (
              <MdOutlineLightMode
                className="cursor-pointer"
                onClick={turnOnLightMode}
              />
            ) : (
              <MdDarkMode className="cursor-pointer" onClick={turnOnDarkMode} />
            )}
          </li>
        </ul>
      </div>
      <ul className="flex items-center w-full justify-between md:w-1/3 mt-4">
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/rooms">Accomodations</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </header>
  )
}
