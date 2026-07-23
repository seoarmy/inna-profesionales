import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-neutral-500">
      <Link to="/" className="flex items-center gap-1 hover:text-violet-700">
        <Home className="h-3.5 w-3.5" />
      </Link>
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-1.5">
          <ChevronRight className="h-3 w-3 text-neutral-300" />
          {item.to ? (
            <Link to={item.to} className="hover:text-violet-700">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-neutral-700">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
