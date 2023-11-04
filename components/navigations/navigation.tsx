import { primaryLinks } from "@/lib/data";
import React from "react";
import PrimaryNavItems from "./navitems";

type PrimaryNavigationProps = {};

export function PrimaryNavigation() {
  return (
    <nav className="flex flex-col">
      <ul className="flex items-center gap-4">
        {primaryLinks.map((link) => (
          <React.Fragment key={link.href}>
            <PrimaryNavItems {...link} />
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}
