// Pipedrive data model as observed (E-001 to E-010). Field names follow the public API v2 where it exists.
// Evidence for each field is in data-model/entities/*.md.

export type Visibility = 1 | 3 | 5 | 7; // item owner | owner's group | group and sub-groups | all users

export type DealStatus = 'open' | 'won' | 'lost';

export interface Deal {
  id: number;
  title: string;
  value: number;
  currency: string; // ISO 4217
  pipeline_id: number;
  stage_id: number;
  status: DealStatus;
  owner_id: number;
  creator_user_id: number;
  person_id: number | null;
  org_id: number | null; // the form requires person_id or org_id
  probability: number | null; // 0-100, only when the pipeline allows it
  expected_close_date: string | null; // YYYY-MM-DD
  lost_reason: string | null;
  visible_to: Visibility;
  label_ids: number[];
  custom_fields: Record<string, unknown>;
  origin: string | null;
  channel_id: string | null;
  add_time: string; // ISO 8601 UTC
  update_time: string | null;
  stage_change_time: string | null;
  won_time: string | null;
  lost_time: string | null;
  close_time: string | null;
  is_archived: boolean;
  is_deleted: boolean; // soft delete, restorable for 30 days
}

export interface Activity {
  id: number;
  subject: string;
  type: string; // ActivityType.key_string; defaults to the first active type
  owner_id: number;
  creator_user_id: number;
  deal_id: number | null;
  org_id: number | null;
  person_id: number | null;
  lead_id: string | null;
  project_id: number | null;
  due_date: string; // YYYY-MM-DD
  due_time: string | null; // HH:MM, UTC
  duration: string | null; // HH:MM
  done: boolean;
  busy: boolean; // true when due_time is set
  marked_as_done_time: string | null;
  participants: { person_id: number; primary: boolean }[];
  priority: number | null;
  outcome: number | null;
  note: string | null; // HTML
  private: boolean;
  is_deleted: boolean;
}

export interface Pipeline {
  id: number;
  name: string;
  is_deal_probability_enabled: boolean;
  order_nr: number;
  is_deleted: boolean;
}

export interface Stage {
  id: number;
  pipeline_id: number;
  name: string;
  order_nr: number;
  deal_probability: number; // 0-100, default 100
  is_deal_rot_enabled: boolean;
  days_to_rotten: number | null; // 0 accepted
}

export interface Organization {
  id: number;
  name: string;
  owner_id: number;
  visible_to: Visibility;
  website: string | null;
  label_ids: number[];
  custom_fields: Record<string, unknown>;
  is_deleted: boolean;
}

export interface Person {
  id: number;
  name: string;
  org_id: number | null;
  owner_id: number;
  emails: { value: string; primary: boolean; label: string }[];
  phones: { value: string; primary: boolean; label: string }[];
  visible_to: Visibility;
  is_deleted: boolean;
}

export interface Note {
  id: number;
  content: string; // HTML
  deal_id: number | null;
  org_id: number | null;
  person_id: number | null;
  pinned_to_deal_flag: boolean;
  user_id: number;
  active_flag: boolean;
}

export interface ActivityType {
  id: number;
  name: string;
  key_string: string;
  order_nr: number; // lowest active one is the default
  icon_key: string;
  active_flag: boolean;
  is_custom_flag: boolean;
}

export interface LostReasonList {
  labels: string[]; // up to 100
  allow_free_form: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  locale: string;
  timezone_name: string;
  default_currency: string;
  is_admin: number;
  active_flag: boolean;
}

// Derived values the UI computes
export type ActivityState = 'overdue' | 'today' | 'future' | 'none'; // R-001, R-002
