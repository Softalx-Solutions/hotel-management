import React from "react";

function StaffTableItem(props) {
  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input
              id={props.id}
              className="form-checkbox"
              type="checkbox"
              onChange={props.handleClick}
              checked={props.isChecked}
            />
          </label>
        </div>
      </td>
      {/* <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center relative">
          <button>
            <svg className={`w-4 h-4 shrink-0 fill-current ${props.fav ? 'text-amber-500' : 'text-slate-300'}`} viewBox="0 0 16 16">
              <path d="M8 0L6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934h-6L8 0z" />
            </svg>
          </button>
        </div>
      </td> */}
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 shrink-0 mr-2 sm:mr-3">
            {!props.image ? (
              <div className="rounded-full bg-purple-200 w-[90%] h-[90%] flex items-center justify-center">
                <h1 className="bold">{props.name.slice(0,1)}</h1>
              </div>
            ) : (
              <img
                className="rounded-full w-[90%] h-[90%]"
                src={props.image}
                width="40"
                height="40"
                alt={props.name}
              />
            )}
          </div>
          <div className="font-medium text-slate-800">{props.name}</div>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.email}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.address}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-center capitalize">{props.position}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left font-medium text-sky-500 ">{props.role}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left font-medium text-emerald-500">
          {props.salary}
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        {/* Menu button */}
        <button className="text-slate-400 hover:text-slate-500 rounded-full">
          <span className="sr-only">Menu</span>
          <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="2" />
            <circle cx="10" cy="16" r="2" />
            <circle cx="22" cy="16" r="2" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default StaffTableItem;
