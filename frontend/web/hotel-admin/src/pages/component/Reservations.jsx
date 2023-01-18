import React, { useState, useEffect } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import SearchForm from "../../partials/actions/SearchForm";
import DeleteButton from "../../partials/actions/DeleteButton";
import DateSelect from "../../components/DateSelect";
import FilterButton from "../../components/DropdownFilter";
import InvoicesTable from "../../partials/invoices/InvoiceTable";
import PaginationClassic from "../../components/PaginationClassic";
import { invoices } from "../../data";

function Reservations() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [list, setList] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all')
  useEffect(() => {
    if (selectedFilter=='all') {
      setList(invoices)
    }else{
      setList(invoices.filter((value, index)=>{
        console.log(selectedFilter);
        return value.status.toLowerCase() == selectedFilter.toLowerCase()
      }))
    }
  }, [invoices, selectedFilter]);
  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const handleSearch = (string) => {
    console.log(string);
    setList(invoices.filter((item,index)=>{
      return (item.customer.includes(string))
    }))
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Reservations ✨
                </h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <SearchForm
                  onChangeText={handleSearch}
                  placeholder="Search by booking ID…"
                />
                {/* Create invoice button */}
              </div>
            </div>

            {/* More actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">
              {/* Left side */}
              <div className="mb-4 sm:mb-0">
                <ul className="flex flex-wrap -m-1">
                  <li className="m-1">
                    <button onClick={()=>setSelectedFilter('all')} className={`inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm ${selectedFilter === 'all'?'bg-indigo-500 text-white':'bg-white text-slate-500'} duration-150 ease-in-out`}>
                      All <span className="ml-1 text-indigo-200">{invoices.length}</span>
                    </button>
                  </li>
                  <li className="m-1">
                    <button onClick={()=>setSelectedFilter('lodged')} className={`inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm ${selectedFilter === 'lodged'?'bg-indigo-500 text-white':'bg-white text-slate-500'} duration-150 ease-in-out`}>
                      Lodged <span className="ml-1 text-slate-400">{invoices.filter((item, index)=>{
                        return item.status == 'Lodged'
                      }).length}</span>
                    </button>
                  </li>
                  <li className="m-1">
                    <button onClick={()=>setSelectedFilter('pending')} className={`inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm ${selectedFilter === 'pending'?'bg-indigo-500 text-white':'bg-white text-slate-500'} duration-150 ease-in-out`}>
                      Pending <span className="ml-1 text-slate-400">{invoices.filter((item, index)=>{
                        return item.status == 'Pending'
                      }).length}</span>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Right side */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Delete button */}
                <DeleteButton selectedItems={selectedItems} />
                {/* Dropdown */}
                <DateSelect />
                {/* Filter button */}
                <FilterButton align="right" />
              </div>
            </div>

            {/* Table */}
            <InvoicesTable
              invoices={list}
              selectedItems={handleSelectedItems}
            />

            {/* Pagination */}
            <div className="mt-8">
              <PaginationClassic />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Reservations;
