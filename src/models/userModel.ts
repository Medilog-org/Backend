import bcrypt from "bcryptjs";
import { Db, Collection } from "mongodb";

export interface UserBase {
  id: string;
  fullName: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  gender: string;
  phoneNumber: string;
  photo: string;
  profileDescription: string;
  role: "doctor" | "nurse" | "patient";
}
export interface PatientDetails {
  pastHealthChallenge: string;
  allergies: string;
  currentMedication: string;
  surgicalHistory: string;
  extraDetails: string;
}
export interface DoctorDetails {
  facility: string;
  cadre: string;
  firstTimeConsultationFee: number;
  followUpConsultationFee: number;
  availableTime: string;
  annualLicense: string;
  fullLicense: string;
  nationalIdentification: string;
  medicalIndustryInsurance: string;
  lAndA: string;
}
export interface NurseDetails {
  facility: string;
  BscRNCertificate: string;
  nursingCouncilCertificate: string;
  nurseLicense: string;
  extraDetails: string;
}

export type User = UserBase &
  (
    | ({ role: "doctor" } & DoctorDetails)
    | ({ role: "nurse" } & NurseDetails)
    | ({ role: "patient" } & PatientDetails)
  );
let usersCollection: Collection<User>;

const getUsersCollection = (db: Db): Collection<User> => {
  if (!usersCollection) {
    usersCollection = db.collection<User>("users");
  }
  return usersCollection;
};

// export const users: User[] = [];

const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const comparePassword = async (
  enteredPassword: string,
  storedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(enteredPassword, storedPassword);
};

// const getUserId = (id: string): User | undefined => {
//   return users.find((user) => user.id === id);
// };

export { hashPassword, comparePassword, getUsersCollection };
