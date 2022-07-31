import React from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from 'react-icons/bs'
import { BreadcrumbItem } from "~/types/breadcrumb";
import clsx from 'clsx'

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}


const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol className="flex items-center space-x-1">
        {items.map(({ name, slug, current }, index) => (
          <li key={name}>
            <div className="flex items-center">
              <Link to={slug}>
                <span
                  className={clsx(current ? 'font-bold' : '', "mr-1 text-sm font-medium text-gray-500 hover:text-gray-700")}
                >
                  {name}
                </span>
              </Link>
              {index < items.length - 1 &&
                <BsChevronRight
                  aria-hidden="true"
                  className="flex-shrink-0 h-4 w-4 text-gray-400"
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
