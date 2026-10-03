/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
import { Studentinfo, sequelize } from "../models/Studentinfo.js";
await sequelize.sync();
const studentinfo ={
  index: async (req, res) => {
    res.send("Index Page");
  },
  insert: async(req, res)=>{
      const { FullName, Age, Program, YearLevel, Section, StudID } = req.body;
      const e = await Studentinfo.create({
        FullName, Age, Program, YearLevel, Section, StudID
      });
      res.status(201).json({
        "status":"true",
        "data": e
      });
    },
  
  findAll: async (req, res) => {
  const e = await Studentinfo.findAll();

  res.status(200).json({
    "status": "true",
    "data": e
  });
},

  findByPk: async (req, res) => {
    const { id } = req.params;

    const e = await Studentinfo.findByPk(id);

    res.status(200).json({
      "status": "true",
      "data": e
    });
  }
};
export { studentinfo };