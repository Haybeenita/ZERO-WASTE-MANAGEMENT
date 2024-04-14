import React from "react";

const Order = () => {
  return (
    <div>
      <div className="flex ml-[2rem] gap-[4rem] mt-[2rem] relative">
        <div className="w-[14rem] h-[6rem]  border-2 bg-zero-200 border-zero-300 text-xl font-semibold rounded-2xl pt-[0.5rem] text-[#212122]">
          <span className="ml-[1rem]">Total Orders:</span>
        </div>
        <div className="w-[14rem] h-[6rem]  border-2 bg-zero-200 border-zero-300 text-xl font-semibold rounded-2xl pt-[0.5rem] text-[#212122] flex flex-col">
          <span className="ml-[1rem]">Total Pickups:</span>
          <span className="ml-[8rem] mt-[1rem]">4</span>
        </div>
        <div className="w-[14rem] h-[6rem]  border-2 bg-zero-200 border-zero-300 text-xl font-semibold rounded-2xl pt-[0.5rem] text-[#212122] flex flex-col">
          <span className="ml-[1rem]">Total Expenditure:</span>
          <span className="ml-[6rem] mt-[1rem] ">#10,568</span>
        </div>
      </div>

      <div className="ml-[2rem]">
        <h1 className="text-2xl font-bold text-[#212122] mt-[2rem] ">Order</h1>
        <h3 className="text-xl font-semibold text-[#212122] capitalize my-[1rem]">
          history
        </h3>

        <div className="overflow-x-auto mr-[2rem]">
          <table className="table table-md text-[#212122] font-medium">
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
