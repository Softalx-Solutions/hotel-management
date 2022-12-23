import React from 'react'

function InvioceCard() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

              <div className="max-w-2xl m-auto my-16">

                <div className="text-center bg-white shadow-md rounded border border-slate-200 p-10">
                {/* <InvioceCard /> */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 mb-4">
                    <svg className="w-5 h-6 fill-current" viewBox="0 0 20 24">
                      <path className="text-slate-500" d="M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z" />
                      <path className="text-slate-300" d="M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z" />
                      <path className="text-slate-400" d="M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z" />
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl text-slate-800 font-bold mb-2">OneSpring Hotel & Suite</h2>
                  <div className="">756 Java Lane</div>
                  <div className="">Columbia, SC 29210 .</div>
                  <div className="mb-6">Rego Park Queens, NY 11734.</div>

                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-qr-code" viewBox="0 0 16 16">
                      <path d="M2 2h2v2H2V2Z"/>
                      <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z"/>
                      <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z"/>
                      <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z"/>
                      <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z"/>
                    </svg>
                  </div>

                  <div className="">Room Number</div>
                  <div className=" text-slate-800 font-bold mb-2">167</div>

                  <div className="">Booking Number</div>
                  <div className=" text-slate-800 font-bold mb-2">OHN-45te-Jke9-BB70</div>
                  

                  <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                          <table className="min-w-full">
                            <tbody>
                              <tr className="bg-white ">
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  Room 
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  $205
                                </td>
                              </tr>
                              <tr className="">
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  No. of Days
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  (1)
                                </td>
                              </tr>
                              <tr className="bg-white ">
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  Cleaning Fee 
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  $0
                                </td>
                              </tr>
                              <tr className="bg-white ">
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  VAT (2.5%)
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  $48
                                </td>
                              </tr>
                              <tr className="bg-white ">
                                <td className="text-sm text-slate-800 font-bold px-6 py-4 whitespace-nowrap">
                                  Total (incl. VATs)
                                </td>
                                <td className="text-sm text-slate-800 font-bold px-6 py-4 whitespace-nowrap">
                                  $253
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <hr className='my-4' />
                    <div className='text-sm'>Note: this booking officially Starts <span className='text-slate-800 font-bold'>22/12/23</span>  and Ends <span className='text-slate-800 font-bold'>23/12/23</span> and no refund for forfeit bookings</div>
                  </div>
                  
                  
                  <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white mt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
                      <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                      <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                    </svg>
                    <span className="ml-2">Print Reciept </span>
                  </button>
                </div>
              </div>
          </div>
  )
}

export default InvioceCard