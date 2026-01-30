export interface NearMissRecord {
  _id: {
    $oid: string;
  };
  id: string;
  action_cause: string;
  behavior_type: string;
  company_type: string;
  craft_code: string;
  createdAt: number;
  day_of_year: number;
  gbu: string;
  incident_date: number; // Timestamp
  incident_number: string;
  is_lcv: boolean;
  job: string;
  lastUpdated: number;
  location: string;
  month: number;
  near_miss_sub_category: string;
  primary_category: string;
  region: string;
  severity_level: number;
  unsafe_condition_or_behavior: string;
  violation_probability_level: number;
  violation_risk_severity_level: number;
  violation_severity_level: number;
  week: number;
  year: number;
}
