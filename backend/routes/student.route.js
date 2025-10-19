// let express = require('express');
// let router = express.Router();
// // Student Model
// let studentSchema = require('../models/Student');
// // CREATE Student
// router.route('/create-student').post(async (req, res, next) => {
//     try {
//       const data = await studentSchema.create(req.body);
//       console.log(data);
//       res.json(data);
//     } catch (error) {
//       next(error);
//     }
//   });
// // READ Students
// router.route('/').get(async (req, res, next) => {
//     try {
//       const data = await studentSchema.find();
//       res.json(data);
//     } catch (error) {
//       next(error);
//     }
//   });
// // Get Single Student
// router.route('/edit-student/:id').get(async (req, res, next) => {
//     try {
//       const data = await studentSchema.findById(req.params.id);
//       res.json(data);
//     } catch (error) {
//       next(error);
//     }
//   });
// // Update Student
// router.route('/update-student/:id').put(async (req, res, next) => {
//   try {
//     const data = await studentSchema.findByIdAndUpdate(req.params.id, {
//       $set: req.body
//     }, { new: true });
//     console.log('Student updated successfully!');
//     res.json(data);
//   } catch (error) {
//     next(error);
//   }
// });

// // Delete Student
// router.route('/delete-student/:id').delete(async (req, res, next) => {
//   try {
//     const data = await studentSchema.findByIdAndDelete(req.params.id);
//     console.log("Deleted successfully");
//     res.json(data);
//   } catch (error) {
//     next(error);
//   }
// });
// module.exports = router;
let express = require('express');
let router = express.Router();
// Student Model
let studentSchema = require('../models/Student');

// CREATE Student
router.route('/create-student').post((req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Students
router.route('/').get((req, res, next) => {
  studentSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single Student
router.route('/edit-student/:id').get((req, res, next) => {
  studentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Student
router.route('/update-student/:id').put((req, res, next) => {
  studentSchema.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log('Student updated successfully!');
      }
    }
  );
});

// Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log('Deleted successfully');
      res.json({ message: 'Deleted successfully' });
    }
  });
});

module.exports = router;
