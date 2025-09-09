import express from "express";
import {
  createAdminController,
  createNewDoctorController,
  createUserController,
  deleteDoctorController,
  deletePatientController,
  getAllDoctorController,
  getAllPatientController,
  getSinglePtientController,
  logOutAdmin,
  logOutDoctor,
  logOutPatient,
  loginUserController,
} from "../controller/userController.js";
import {
  adminTokenAuth,
  doctorTokenAuth,
  patientTokenAuth,
} from "../middleware/auth.js";
const router = express.Router();

// create a user
router.post("/create-patient", createUserController);
