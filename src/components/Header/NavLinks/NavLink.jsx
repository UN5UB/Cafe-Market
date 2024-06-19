import React from "react";

export default function NavLink({ title, link }) {
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
}
