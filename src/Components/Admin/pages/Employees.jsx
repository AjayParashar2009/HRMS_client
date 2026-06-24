import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
export default function Employees() {
  let [EmpData, setEmpDate] = useState({});
  let [error, setError] = useState({});
  let [openModal, setOpenModal] = useState(false);
  let [openEditModal, setOpenEditModal] = useState(false);
  let [empFormData, setEmpFormData] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target;
    setEmpDate({ ...EmpData, [name]: value });
  };

  let FormError = {};

  let HandleValidate = (empFormData) => {
    if (!empFormData.EmpId) {
      FormError.EmpId = "ID is required";
    } else if (!empFormData.EmpName) {
      FormError.EmpName = "Name is required";
    } else if (!empFormData.Gender) {
      FormError.Gender = "Gender is required";
    } else if (!empFormData.DOB) {
      FormError.DOB = "Date of Birth is required";
    } else if (!empFormData.Email) {
      FormError.Email = "Email is required";
    } else if (!empFormData.ContactNumber) {
      FormError.ContactNumber = "Contact Number is required";
    } else if (!empFormData.EmpDepartment) {
      FormError.EmpDepartment = "Department is required";
    } else if (!empFormData.Salary) {
      FormError.Salary = "Salary is required";
    } else if (!empFormData.JoiningDate) {
      FormError.JoiningDate = "Joining Date is required";
    } else if (!empFormData.Designation) {
      FormError.Designation = "Designation is required";
    } else {
      console.log("API data", empFormData);
    }
    setError(FormError);
  };

  console.log(EmpData);

  let handleSubmit = (e) => {
    let { name, value } = e.target;
    setEmpDate({ ...EmpData, [name]: value });
  };
  let handleClick = (e) => {
    setEmpFormData(EmpData);
    setOpenModal(false);
  };
  let handleEditSubmit = (e) => {
    setEmpFormData(EmpData);
    setOpenEditModal(false);
  };
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>
            <Dialog open={openModal} onOpenChange={setOpenModal}>
              <DialogTrigger className="border-2 border-blue-500 rounded-2xl p-2 bg-blue-500">
                Add Employee
              </DialogTrigger>
            </Dialog>
            <Dialog open={openModal}>
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      value={empFormData.Gender}
                      onChange={handleChange}
                    >
                      <option value="Select" disabled>
                        Select
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mt-5">
                    <button
                      type="reset"
                      className="bg-blue-500 rounded-md w-20 border-2 text-white"
                      onClick={() => {
                        setOpenModal(false);
                      }}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 m-3 rounded-md w-20 border-2 text-white"
                      onClick={handleClick}
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
          {/* Table jsx */}
          <table className="border-collapse border border-gray-400 ...">
            <thead>
              <tr>
                <th className="border border-gray-300 ...">Emp Id</th>
                <th className="border border-gray-300 ...">Emp Name</th>
                <th className="border border-gray-300 ...">Gender</th>
                <th className="border border-gray-300 ...">DOB</th>
                <th className="border border-gray-300 ...">Email</th>
                <th className="border border-gray-300 ...">Contact Number</th>
                <th className="border border-gray-300 ...">Emp Department</th>
                <th className="border border-gray-300 ...">Salary</th>
                <th className="border border-gray-300 ...">Joining Date</th>
                <th className="border border-gray-300 ...">Designation</th>
                <th className="border border-gray-300 ...">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 ...">
                  {empFormData.EmpId}
                </td>
                <td className="border border-gray-300 ...">
                  {empFormData.EmpName}
                </td>
                <td className="border border-gray-300 ...">
                  {empFormData.Gender}
                </td>
                <td className="border border-gray-300 ...">
                  {empFormData.DOB}
                </td>
                <td className="border border-gray-300 ...">
                  {empFormData.Email}
                </td>
                <td className="border border-gray-300 ...">
                  {empFormData.ContactNumber}
                </td>
                <td className="border border-gray-300 ...">
                  {empFormData.EmpDepartment}
                </td>
                <td className="border border-gray-300 ...">
                  {empFormData.Salary}
                </td>
                <td className="border border-gray-300 ...">
                  {empFormData.JoiningDate}
                </td>
                <td className="border border-gray-300 ...">
                  {empFormData.Designation}
                </td>
                <td className="border border-gray-300 ...">
                  <Dialog open={openEditModal} onOpenChange={setOpenEditModal}>
                    <DialogTrigger className="border-2 border-blue-500 rounded-2xl p-2 bg-blue-500">
                      Edit
                    </DialogTrigger>
                  </Dialog>

                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      {/* edit employee record modal */}
      <Dialog open={openEditModal}>
        <DialogContent className="max-h-150 overflow-y-auto scroll-smooth">
          <DialogHeader>
            <DialogTitle className="text-center">Employee Form</DialogTitle>
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
                onChange={handleChange}
                defaultValue={empFormData.EmpId}
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
                onChange={handleChange}
                defaultValue={empFormData.EmpName}
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
                onChange={handleChange}
                defaultValue={empFormData.Gender}
              >
                <option value="Select" disabled>
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
                onChange={handleChange}
                defaultValue={empFormData.DOB}
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
                onChange={handleChange}
                defaultValue={empFormData.Email}
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
                onChange={handleChange}
                defaultValue={empFormData.ContactNumber}
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
                onChange={handleChange}
                defaultValue={empFormData.EmpDepartment}
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
                onChange={handleChange}
                defaultValue={empFormData.Salary}
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
                onChange={handleChange}
                defaultValue={empFormData.JoiningDate}
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
                onChange={handleChange}
                defaultValue={empFormData.Designation}
              />
            </div>
            <div className="mt-5">
              <button
                type="reset"
                className="bg-blue-500 rounded-md w-20 border-2 text-white"
                onClick={() => {
                  setOpenEditModal(false);
                }}
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-blue-500 m-3 rounded-md w-20 border-2 text-white"
                onClick={handleEditSubmit}
              >
                Submit
              </button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
