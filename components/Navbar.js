import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <nav className="bg-gray-700 flex justify-between px-5 items-center h-20">
      <h1 className="text-lg font-bold text-gray-100">Patch-House</h1>
      <div>
        <a className="text-gray-100">
          <FontAwesomeIcon className="block" icon="bars" />
        </a>
      </div>
    </nav>
  );
}
