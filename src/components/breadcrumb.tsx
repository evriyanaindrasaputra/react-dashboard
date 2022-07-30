import React from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from 'react-icons/bs'
import { BreadcrumbItem } from "~/types/breadcrumb";

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}


const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="hidden sm:flex">
      <ol className="flex items-center space-x-4">
        {items.map(({ name, slug, current }, index) => (
          <li key={name}>
            <div className="flex items-center">
              <Link to={slug}>
                <a
                  aria-current={current ? "page" : undefined}
                  className="mr-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {name}
                </a>
              </Link>
              {index < items.length - 1 &&
                <BsChevronRight
                  aria-hidden="true"
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                />
              }
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb
