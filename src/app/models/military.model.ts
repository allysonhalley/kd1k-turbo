// src/app/models/military.model.ts
import { MilitaryRankDTO } from './dto/military-rank.dto';

export interface Dependent {
  name: string;
  birthDate: string;
}

export interface PersonalData {
  fullName: string;
  militaryName: string;
  ssn: string;
  birthDate: string;
  birthMonth: string;
  maritalStatus: string;
  gender: string;
  religion: string;
}

export interface MilitaryIdentity {
  number: string;
  issuingAuthority: string;
  state: string;
  issueDate: string;
  expirationDate: string;
}

export interface Family {
  motherName: string;
  fatherName: string;
  nationality: string;
  birthplace: string;
  birthplaceState: string;
}

export interface MilitaryHierarchy {
  number: string;
  abbreviatedRank: string;
  rank: string;
  branch: string;
  registrationNumber: string;
}

export interface Qualifications {
  courseName: string;
}

export interface Education {
  educationLevel: string;
  institution: string;
  course: string;
  period: string;
}

export interface Assignment {
  location: string;
}

export interface WorkSchedule {
  schedule: string;
  reducedWorkload: boolean;
  readapted: boolean;
}

export interface MilitaryHistory {
  entryDateCBMPE: string;
  serviceTime: string;
  accruedTime: string;
  totalTime: string;
  formattedTotalTime: string;
  arrivalDateGBAPH: string;
  spArrivalGBAPH: string;
  lastPromotionDate: string;
  coaph: boolean;
  crv: boolean;
  cmr: boolean;
  mpmbm: boolean;
}

export interface Address {
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  reference: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface BankDetails {
  bank: string;
  branch: string;
  accountType: string;
  accountNumber: string;
  digit: string;
}

export interface VoterRegistration {
  number: string;
  zone: string;
  section: string;
  state: string;
}

export interface DriversLicense {
  registrationNumber: string;
  state: string;
  expirationDate: string;
  category: string;
  firstLicenseDate: string;
  issueDate: string;
}

export interface BoatLicense {
  number: string;
}

export interface Firearm {
  sigmaNumber: string;
  serviceUseAuthorization: string;
}

export interface Measurements {
  bloodType: string;
  rhFactor: string;
  headSize: string;
  shoeSize: string;
  shirtSize: string;
  pantsSize: string;
  bootSize: string;
  shortsSize: string;
  swimsuitSize: string;
  swimTrunksSize: string;
  organDonor: boolean;
  bloodDonor: boolean;
  casMember: boolean;
  sismepeUser: boolean;
  accidentWithOriginCertificate: boolean;
  accidentWithIso: boolean;
  chronicDisease: boolean;
  controlledMedication: boolean;
  hasAllergy: boolean;
}

export interface Contact {
  email: string;
  phone1: string;
  phone2: string;
  phone3: string;
  spouse: string;
  spouseBirthDate: string;
}

export interface MilitaryFormData {
  personalData: PersonalData;
  militaryIdentity: MilitaryIdentity;
  family: Family;
  militaryHierarchy: MilitaryHierarchy;
  qualifications: Qualifications;
  education: Education;
  assignment: Assignment;
  workSchedule: WorkSchedule;
  militaryHistory: MilitaryHistory;
  address: Address;
  bankDetails: BankDetails;
  voterRegistration: VoterRegistration;
  driversLicense: DriversLicense;
  boatLicense: BoatLicense;
  firearm: Firearm;
  measurements: Measurements;
  contact: Contact;
  dependents: Dependent[];
}

// DTO Mappings
export type MilitaryIdentityDTO = MilitaryIdentity;
export type ServiceHistoryDTO = MilitaryHistory;
export type ParentsDTO = Family;
export type EducationDTO = Education;
export type AddressDTO = Address;
export type BankInfoDTO = BankDetails;
export type VoterInfoDTO = VoterRegistration;
export type DriversLicenseDTO = DriversLicense;
export type BoatLicenseDTO = BoatLicense;
export type FirearmDTO = Firearm;
export type ContactInfoDTO = Contact;
export type DependentDTO = Dependent;
export type QualificationDTO = Qualifications;
export type WorkLocationDTO = Assignment;

export interface MilitaryPeopleDTO {
  id: number;
  fullName: string;
  warName: string;
  cpf: string;
  birthDate: string;
  birthMonth: number;
  maritalStatus: string;
  gender: string;
  religion: string;
  bloodType: string;
  rhFactor: string;
  headSize: string;
  shoeSize: string;
  bootSize: string;
  shirtSize: string;
  pantsSize: string;
  shortsSize: string;
  swimwearSize: string;
  swimTrunksSize: string;
  organDonor: boolean;
  bloodDonor: boolean;
  casMember: boolean;
  sismepeUser: boolean;
  hasAccidentCertificate: boolean;
  hasChronicDisease: boolean;
  controlledMedication: boolean;
  hasAllergies: boolean;
  rank: MilitaryRankDTO;
  militaryIdentity: MilitaryIdentityDTO | null;
  serviceHistory: ServiceHistoryDTO | null;
  parents: ParentsDTO | null;
  education: EducationDTO | null;
  address: AddressDTO | null;
  bankInfo: BankInfoDTO | null;
  voterInfo: VoterInfoDTO | null;
  driversLicense: DriversLicenseDTO | null;
  boatLicense: BoatLicenseDTO | null;
  firearms: FirearmDTO[] | null;
  contactInfo: ContactInfoDTO | null;
  dependents: DependentDTO[] | null;
  qualifications: QualificationDTO[] | null;
  workLocation: WorkLocationDTO | null;
}
