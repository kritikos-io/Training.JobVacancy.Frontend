export interface CompanyModel {
  name: string;
  website: string;
  vat: string;
  logoUrl: string;
  address: {
    country: string;
    city: string;
    street: string;
    streetNumber: string;
    postalCode: string;
  };
  isSponsored: boolean;
  phoneNumber: string;
  openPositions: number;
  openPositionsUrl: string;
}
