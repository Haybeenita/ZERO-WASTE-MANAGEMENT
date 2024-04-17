import React from "react";

const Order = () => {
  return (
    <div>
      <div className="flex lg:ml-[2rem] ml-[0.5rem] mr-[0.5rem] gap-2 lg:gap-[4rem] mt-[2rem] relative">
        <div className="lg:w-[14rem] w-[12rem] h-[6rem] border-2 bg-zero-200 border-zero-300 lg:text-xl text-sm font-semibold rounded-2xl pt-[0.5rem] text-[#212122]">
          <span className="lg:ml-[1rem] ml-[0.3rem]">Total Orders:</span>
        </div>
        <div className="lg:w-[14rem] w-[12rem] h-[6rem]  border-2 bg-zero-200 border-zero-300 lg:text-xl text-sm font-semibold rounded-2xl pt-[0.5rem] text-[#212122] flex flex-col">
          <span className="lg:ml-[1rem] ml-[0.3rem]">Total Pickups:</span>
          <span className="font-bold w-[5rem] mt-[0.5rem] lg:text-4xl text-2xl lg:ml-[2rem] ml-[1rem]">4</span>
        </div>
        <div className="lg:w-[14rem] w-[12rem] h-[6rem]  border-2 bg-zero-200 border-zero-300 lg:text-xl text-sm font-semibold rounded-2xl pt-[0.5rem] text-[#212122] flex flex-col">
          <span className="lg:ml-[1rem] ml-[0.2rem]">Total Expenditure:</span>
          <span className="mt-[0.5rem] lg:text-4xl text-2xl lg:ml-[2rem] ml-[0.5rem] font-bold">#10,568</span>
        </div>
      </div>

      <div className="ml-[2rem]">
        <h1 className="text-2xl font-bold text-[#212122] mt-[2rem] ">Order</h1>
        <h3 className="text-xl font-semibold text-[#212122] capitalize my-[1rem]">
          history
        </h3>

        <div className="overflow-x-auto lg:mr-[2rem] mr-[1rem]">
          <table className="table lg:table-md table-sm text-[#212122] font-medium">
            <thead className="text-[#212122] font-semibold capitalize text-lg">
              <tr>
                <th>s/n</th>
                <th>Address</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>No1 Alice avenue independence Layout Enugu</td>
                <td>21th March 2024</td>
                <td>Completed</td>
              </tr>
              <tr>
                <th>2</th>
                <td>No5 Abuchi Thinkers conner Enugu</td>
                <td>5th March 2024</td>
                <td>Completed</td>
              </tr>
              <tr>
                <th>3</th>
                <td>No1 Alice avenue independence Layout Enugu </td>
                <td>19th Febuary 2024</td>
                <td>Completed</td>
              </tr>
              <tr>
                <th>4</th>
                <td>No1 Alice avenue independence Layout Enugu</td>
                <td>31st January 2024</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Order;
