import React from "react";
import useScrollSpy from "../hooks/useScrollSpy";

const NAV = [
  { id: "inicio", label: "Início" },
  { id: "universo", label: "Universo" },
  { id: "primeiro-radiante", label: "Primeiro Radiante" },
  { id: "personagens", label: "Personagens" },
  { id: "timeline", label: "Linha do Tempo" }
];

export default function Header() {
  const active = useScrollSpy(NAV.map(n => n.id));

  return (
    <header className="site-header">
      <nav className="container header-nav" aria-label="Main navigation">
        <a href="#inicio" className="brand">FOUNDATION</a>

        <ul className="nav-list" role="menubar">
          {NAV.map((item) => (
            <li key={item.id} role="none">
              <a
                href={`#${item.id}`}
                role="menuitem"
                className={`nav-link ${active === item.id ? "active" : ""}`}
                aria-current={active === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="header-actions" />
      </nav>
    </header>
  );
}