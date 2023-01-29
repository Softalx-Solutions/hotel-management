import { links } from "../data";

export default function SideBar() {
  return (
    <nav className="col-span-2 border-r border-gray-300 h-[90vh] pt-2 px-1 flex flex-col items-start">
      <div className=" w-full">
        {links.map((link) => {
          return (
            <div className="w-full flex items-center justify-start space-x-2 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent" key={link.id}>
              <span>{link.icon}</span>
              <h1 className="hidden xl:flex text-gray-600 group-hover:text-black">{link.title}</h1>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
