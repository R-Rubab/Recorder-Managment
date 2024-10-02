const express = require("express");
const router = express.Router();
const studentDetails = require("../../models/Students/StudentDetails");

router.post("/getDetails", async (req, res) => {
  try {
    let user = await studentDetails.find(req.body);
    if (!user.length) {
      return res.status(400).json({ success: false, message: "No Student Found" });
    }
    res.json({
      success: true,
      message: "Student Details Found!",
      user,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.post("/addDetails", async (req, res) => {
  try {
    let user = await studentDetails.findOne({ enrollmentNo: req.body.enrollmentNo });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Student With This Enrollment Already Exists",
      });
    }
    user = await studentDetails.create(req.body);
    res.json({
      success: true,
      message: "Student Details Added!",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// router.post("/updateDetails/:id", async (req, res) => {
//   try {
//     let user = await studentDetails.findByIdAndUpdate(req.params.id, req.body);
//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "No Faculty Found",
//       });
//     }
//     const data = {
//       success: true,
//       message: "Updated Successfull!",
//     };
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

router.post("/updateDetails/:id", async (req, res) => {
  try {
    let user = await studentDetails.findByIdAndUpdate(req.params.id, req.body);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No Student Found",
      });
    }
    res.json({
      success: true,
      message: "Updated Successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.get("/count", async (req, res) => {
  try {
    let count = await studentDetails.countDocuments();
    res.json({
      success: true,
      message: "Count Successful!",
      count,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error", error });
  }
});


router.delete("/deleteDetails/:id", async (req, res) => {
  try {
    let user = await studentDetails.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No Student Found",
      });
    }
    res.json({
      success: true,
      message: "Deleted Successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.get("/count", async (req, res) => {
  try {
    let count = await studentDetails.countDocuments(req.body);
    res.json({
      success: true,
      message: "Count Successful!",
      count,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error", error });
  }
});

module.exports = router;
