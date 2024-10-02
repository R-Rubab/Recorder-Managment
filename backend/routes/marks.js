// const express = require("express");
// const router = express.Router();
// const Marks = require("../models/Other/Marks");

// router.post("/getMarks", async (req, res) => {
//   try {
//     let Mark = await Marks.find(req.body);
//     if (!Mark) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Marks Not Available" });
//     }
//     const data = {
//       success: true,
//       message: "All Marks Loaded!",
//       Mark,
//     };
//     res.json(data);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

// router.post("/addMarks", async (req, res) => {
//   let { enrollmentNo, internal, external } = req.body;
//   try {
//     let Mark = await Marks.findOne({ enrollmentNo });
//     if (Mark) {
//       if (internal) {
//         internal = {
//           ...Mark.internal,
//           ...internal
//         }
//       }
//       if (external) {
//         external = {
//           ...Mark.external,
//           ...external
//         }
//       }
//       await Marks.findByIdAndUpdate(Mark._id,
//         { set: { internal:internal, external: external } },
//         { new: true });
//       const data = {
//         success: true,
//         message: "Marks Added!",
//       };
//       res.json(data);
//     } else {
//       await Marks.create(req.body);
//       const data = {
//         success: true,
//         message: "Marks Added!",
//       };
//       res.json(data);
//     }
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

// router.delete("/deleteMarks/:id", async (req, res) => {
//   try {
//     let mark = await Marks.findByIdAndDelete(req.params.id);
//     if (!mark) {
//       return res
//         .status(400)
//         .json({ success: false, message: "No Marks Data Exists!" });
//     }
//     const data = {
//       success: true,
//       message: "Marks Deleted!",
//     };
//     res.json(data);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

// module.exports = router; 

const express = require("express");
const router = express.Router();
const Marks = require("../models/Other/Marks");

router.post("/getMarks", async (req, res) => {
  try {
    let Mark = await Marks.find(req.body);
    if (!Mark) {
      return res
        .status(400)
        .json({ success: false, message: "Marks Not Available" });
    }
    const data = {
      success: true,
      message: "All Marks Loaded!",
      Mark,
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// router.post("/getMarks", async (req, res) => {
//   try {
//     let marks = await Marks.find(req.body);
//     if (!marks || marks.length === 0) {
//       return res.status(400).json({ success: false, message: "Marks Not Available" });
//     }
//     const data = {
//       success: true,
//       message: "All Marks Loaded!",
//       marks,
//     };
//     res.json(data);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

router.post("/addMarks", async (req, res) => {
  let { enrollmentNo, internal, external } = req.body;
  try {
    let mark = await Marks.findOne({ enrollmentNo });
    if (mark) {
      // Initialize internal and external as empty maps if they are not provided in the request
      if (!internal) {
        internal = new Map();
      } else if (typeof internal !== "object" || !Symbol.iterator in Object(internal)) {
        throw new Error("Internal marks should be an object with iterable properties");
      }

      if (!external) {
        external = new Map();
      } else if (typeof external !== "object" || !Symbol.iterator in Object(external)) {
        throw new Error("External marks should be an object with iterable properties");
      }

      // Update internal and external marks
      mark.internal = new Map([...mark.internal, ...Object.entries(internal)]);
      mark.external = new Map([...mark.external, ...Object.entries(external)]);
      await mark.save();

      const data = {
        success: true,
        message: "Marks Updated!",
        updatedMarks: { internal, external },
      };
      res.json(data);
    } else {
      // Create new marks if not found
      await Marks.create(req.body);
      const data = {
        success: true,
        message: "Marks Added!",
      };
      res.json(data);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});



router.delete("/deleteMarks/:id", async (req, res) => {
  try {
    let mark = await Marks.findByIdAndDelete(req.params.id);
    if (!mark) {
      return res.status(400).json({ success: false, message: "No Marks Data Exists!" });
    }
    const data = {
      success: true,
      message: "Marks Deleted!",
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;

 
