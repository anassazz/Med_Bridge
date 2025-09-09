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

// login routes
router.post("/login-user", loginUserController);

// add new admin
// only admin create a admin
router.post("/create-new-admin", adminTokenAuth, createAdminController);

// add new doctor
// only admin create a doctor
router.post("/create-new-doctor", adminTokenAuth, createNewDoctorController);

// get all doctor
router.get("/get-all-doctor", getAllDoctorController);
