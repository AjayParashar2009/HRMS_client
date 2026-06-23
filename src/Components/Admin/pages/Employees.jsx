import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { useState } from "react";
export default function Employees() {
  const [EmpData, setEmpDate] = useState({});
  let HandleChange = (e) => {
    let { name, value } = e.target;
    setEmpDate({ ...EmpData, [name]: value });
  };
  console.log(EmpData);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>
            <Dialog>
              <DialogTrigger className="border-2 border-blue-500 rounded-2xl p-2 bg-blue-500">
                Add Employee
              </DialogTrigger>
              <DialogContent className="max-h-150 overflow-y-auto scroll-smooth">
                <DialogHeader>
                  <DialogTitle className="text-center">
                    Employee Form
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                  <div>
                    <label htmlFor="" className="font-bold text-black">
                      Emp Id
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter the employee id"
                      className="w-full h-8 rounded"
                      name="EmpId"
                      onChange={HandleChange}
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="" className="font-bold text-black">
                      Emp Name
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter the employee Name"
                      className="w-full h-8 rounded"
                      name="EmpName"
                      onChange={HandleChange}
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="" className="font-bold text-black">
                      Gender
                    </label>
                  </div>
                  <div>
                    <select
                      className="w-full"
                      name="Gender"
                      onChange={HandleChange}
                    >
                      <option value="Select" disabled="true" selected>
                        select
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="" className="font-bold text-black">
                      Date of birth
                    </label>
                  </div>
                  <div>
                    <input
                      type="date"
                      placeholder="Enter your DOB"
                      className="w-full h-8 rounded"
                      name="DOB"
                      onChange={HandleChange}
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="" className="font-bold text-black">
                      Email
                    </label>
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter the employee Email"
                      className="w-full h-8 rounded"
                      name="Email"
                      onChange={HandleChange}
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="" className="font-bold text-black">
                      Contact number
                    </label>
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Contact number"
                      className="w-full h-8 rounded"
                      name="ContactNumber"
                      onChange={HandleChange}
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="" className="font-bold text-black">
                      Emp Department
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Department"
                      className="w-full h-8 rounded"
                      name="EmpDepartment"
                      onChange={HandleChange}
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="" className="font-bold text-black">
                      Salary
                    </label>
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Salary"
                      className="w-full h-8 rounded"
                      name="Salary"
                      onChange={HandleChange}
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="" className="font-bold text-black">
                      Joining Date
                    </label>
                  </div>
                  <div>
                    <input
                      type="date"
                      placeholder="Joining Date"
                      className="w-full h-8 rounded"
                      name="JoiningDate"
                      onChange={HandleChange}
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="" className="font-bold text-black">
                      Designation
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Designation"
                      className="w-full h-8 rounded"
                      name="Designation"
                      onChange={HandleChange}
                    />
                  </div>
                  <div className="mt-5">
                    <button
                      type="reset"
                      className="bg-blue-500 rounded-md w-20 border-2 text-white"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 m-3 rounded-md w-20 border-2 text-white"
                    >
                      Submit
                    </button>
                  </div>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </CardAction>
        </CardHeader>
        <CardContent>
          <table class="border-collapse border border-gray-400 ...">
            <thead>
              <tr>
                <th class="border border-gray-300 ...">Emp Id</th>
                <th class="border border-gray-300 ...">Emp Name</th>
                <th class="border border-gray-300 ...">Gender</th>
                <th class="border border-gray-300 ...">DOB</th>
                <th class="border border-gray-300 ...">Email</th>
                <th class="border border-gray-300 ...">Contact Number</th>
                <th class="border border-gray-300 ...">Emp Department</th>
                <th class="border border-gray-300 ...">Salary</th>
                <th class="border border-gray-300 ...">Joining Date</th>
                <th class="border border-gray-300 ...">Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 ...">{EmpData.EmpId}</td>
                <td class="border border-gray-300 ...">{EmpData.EmpName}</td>
                <td class="border border-gray-300 ...">{EmpData.Gender}</td>
                <td class="border border-gray-300 ...">{EmpData.DOB}</td>
                <td class="border border-gray-300 ...">{EmpData.Email}</td>
                <td class="border border-gray-300 ...">
                  {EmpData.ContactNumber}
                </td>
                <td class="border border-gray-300 ...">
                  {EmpData.EmpDepartment}
                </td>
                <td class="border border-gray-300 ...">{EmpData.Salary}</td>
                <td class="border border-gray-300 ...">
                  {EmpData.JoiningDate}
                </td>
                <td class="border border-gray-300 ...">
                  {EmpData.Designation}
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
}
