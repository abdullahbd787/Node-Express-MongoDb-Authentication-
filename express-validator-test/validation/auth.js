const { check } = require("express-validator");

exports.userRegistrationValidator = [
  check("name").trim().notEmpty().withMessage("name is missing").isLength({ min: 5 }).withMessage("name must have at least 5 characters").isLength({ max: 31 }).withMessage("name can have maximum 31 characters"),
  
  check("email").trim().notEmpty().withMessage("email is missing").isEmail().withMessage("not a valid email"),

  check("password").trim().notEmpty().withMessage("email is missing").isLength({ min: 5 }).withMessage("password must have at least 5 characters"),
  
  check("dob").trim().notEmpty().withMessage("dob is missing").isISO8601().toDate().withMessage("not a valid dob"),
];

exports.userLoginValidator = [
  //input validation
  check("email").trim().notEmpty().withMessage("email is missing").isEmail().withMessage("not a valid email"),

  check("password").trim().notEmpty().withMessage("email is missing").isLength({ min: 5 }).withMessage("password must have at least 5 characters"),
];