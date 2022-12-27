import React, { useState, useEffect } from 'react';
import Invoices from './InvoiceTableItem';


function InvoicesTable({
  selectedItems
}) {

   const invoices = [
    {
      id: '0',
      invoice: '#123567',
      total: '$129.00',
      status: 'Lodged',
      customer: 'Dominik Lamakani',
      issueddate: '22/07/2021',
      paiddate: '22/07/2021',
      type: 'Standard Suite',
    },
    {
      id: '1',
      invoice: '#779912',
      total: '$59.00',
      status: 'Lodged',
      customer: 'Mark Cameron',
      issueddate: '19/07/2021',
      paiddate: '20/07/2021',
      type: 'Standard Suite',
    },
    {
      id: '2',
      invoice: '#889924',
      total: '$89.00',
      status: 'Lodged',
      customer: 'Sergio Gonnelli',
      issueddate: '17/07/2021',
      paiddate: '19/07/2021',
      type: 'Luxury Suite',
    },
    {
      id: '3',
      invoice: '#897726',
      total: '$129.00',
      status: 'Pending',
      customer: 'Manuel Garbaya',
      issueddate: '04/07/2021',
      paiddate: '04/07/2021',
      type: 'Royal Suite',
    },
    {
      id: '4',
      invoice: '#123567',
      total: '$129.00',
      status: 'Pending',
      customer: 'Cool Robot',
      issueddate: '04/07/2021',
      paiddate: '04/07/2021',
      type: 'Royal Suite',
    },
    {
      id: '5',
      invoice: '#896644',
      total: '$129.00',
      status: 'Lodged',
      customer: 'Mark Cameron',
      issueddate: '04/07/2021',
      paiddate: '09/07/2021',
      type: 'Executive Suite',
    },
    {
      id: '6',
      invoice: '#136988',
      total: '$69.00',
      status: 'Pending',
      customer: 'Glenn Thomas',
      issueddate: '01/07/2021',
      paiddate: '01/07/2021',
      type: 'Apartment',
    },
    {
      id: '7',
      invoice: '#442206',
      total: '$129.00',
      status: 'Pending',
      customer: 'Dominik Lamakani',
      issueddate: '22/06/2021',
      paiddate: '22/06/2021s',
      type: 'Royal Suite',
    },
    {
      id: '8',
      invoice: '#764321',
      total: '$89.00',
      status: 'Lodged',
      customer: 'Brian Halligan',
      issueddate: '21/06/2021',
      paiddate: '29/06/2021',
      type: 'Luxury Suite',
    },
    {
      id: '9',
      invoice: '#908764',
      total: '$129.00',
      status: 'Pending',
      customer: 'Carolyn McNeail',
      issueddate: '17/06/2021',
      paiddate: '17/06/2021',
      type: 'Standard Suite',
    }
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(invoices);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(list.map(li => li.id));
    if (selectAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  useEffect(() => {
    selectedItems(isCheck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheck]);

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">      
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">Invoices <span className="text-slate-400 font-medium">67</span></h2>
      </header>
      <div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input className="form-checkbox" type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                    </label>
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Client Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Booking No.</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Amount</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Start Date</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">End Date</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Room Type</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Status</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Actions</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200">
              {
                list.map(invoice => {
                  return (
                    <Invoices
                      key={invoice.id}
                      id={invoice.id}
                      customer={invoice.customer}
                      invoice={invoice.invoice}
                      total={invoice.total}
                      issueddate={invoice.issueddate}
                      paiddate={invoice.paiddate}
                      type={invoice.type}
                      status={invoice.status}
                      handleClick={handleClick}
                      isChecked={isCheck.includes(invoice.id)}
                    />
                  )
                })
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default InvoicesTable;
