export interface JobInfo {
  id: string;
  jobStatus: 'FULL-TIME' | 'PART-TIME' | 'CONTRACT';
  jobTitle: string;
  minSalary: number;
  maxSalary: number;
  companyTitle: string;
  city: string;
  country: string;
  isSaved: true | false;
  companyLogo?: string;
}
