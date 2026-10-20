// ClickUp data model as observed (2026-10-16). One exported type per E-### entity file, same field names.
// IDs are strings unless noted. Epoch times are milliseconds, often sent as strings.

export type EpochMs = string;

// E-001
export interface Workspace {
  id: string;
  name: string;
  plan: "free_forever" | "unlimited" | "business" | "business_plus" | "enterprise";
  custom_field_uses: { usage: number; limit: number | null; usageLeft: number | null }; // limit 60 on Free Forever
  region: string;
}

// E-002
export interface Space {
  id: string;
  name: string;
  statuses: Status[];
  tags: Tag[];
}

// E-003
export interface List {
  id: string;
  name: string;
  statuses: Status[]; // inherited from the Space until "List only" statuses exist
  task_count: number; // excludes closed tasks in the sidebar
}

// E-004
export interface Task {
  id: string;
  name: string;
  content: string | null; // rich text (Quill delta JSON)
  text_content: string | null;
  status: Status;
  priority: "1" | "2" | "3" | "4" | null; // Urgent, High, Normal, Low
  start_date: EpochMs | null;
  start_date_time: boolean;
  due_date: EpochMs | null;
  due_date_time: boolean;
  users: { userid: number; type: "assigned" | "watcher" | "owner" }[];
  tags: string[];
  parent: string | null;
  orderindex: number;
  boardindex: number;
  custom_type: string | null; // null = Task
  fields: CustomFieldValue[];
  states: { is_archived: boolean; is_deleted: boolean };
  date_created: EpochMs;
  date_updated: EpochMs;
  date_closed: EpochMs | null;
}

// E-005
export interface Status {
  id: string;
  status: string;
  type: "open" | "custom" | "closed";
  status_group: string;
  color: string; // hex
  orderindex: number;
}

// E-006
export interface Tag {
  name: string;
  tag_fg: string;
  tag_bg: string;
}

// E-007
export type CustomFieldType =
  | "checkbox" | "date" | "drop_down" | "labels" | "text" | "short_text" | "number" | "currency"
  | "email" | "phone" | "url" | "location" | "users" | "rating" | "voting" | "manual_progress"
  | "automatic_progress" | "signature" | "formula" | "files" | "tasks" | "list_relationship" | "button";
// Only drop_down, number, currency and formula were seen as wire values; the others are names for the clone.

export interface CustomField {
  id: string; // uuid
  name: string;
  type: CustomFieldType;
  type_id: number;
  type_config: {
    options?: { id: string; name: string; color: string; orderindex: number }[];
    sorting?: "manual";
    number_format?: "en-US" | "de-DE";
    currency_type?: string; // "BRL"
    precision?: number;
    formula?: string;
    simple?: boolean;
  };
  required: boolean;
  required_on_subtasks: boolean;
  pinned: boolean;
  hide_from_guests: boolean;
  locations: { parent: { type: number; id: string } }[]; // type 6 = List
  deleted: boolean;
  userid: string;
  date_created: EpochMs;
}

// E-008
export interface CustomFieldValue {
  field_id: string;
  task_id: string;
  value:
    | boolean
    | number
    | string
    | { add: (string | number)[]; rem: (string | number)[] }
    | { current: number }
    | { formatted_address: string; location: { lat: number; lng: number }; place_id: string };
  value_options?: { time?: boolean; isTyped?: boolean; signedBy?: number };
  value_richtext?: string;
}

// E-009
export interface View {
  id: string;
  type: "board" | "list" | string;
  grouping: { field: string; dir: number; collapsed: string[] };
  divide?: { field: string; dir: number; collapsed: string[] };
  sorting: { fields: unknown[] };
  filters: { op: string; fields: unknown[]; search: string; show_closed: boolean };
  columns: { fields: { field: string; hidden: boolean }[] };
  settings: Record<string, unknown>;
  auto_save: boolean;
}

// E-010
export interface Comment {
  id: string;
  comment: { text: string; attributes?: Record<string, unknown> }[];
  userid: number;
  date: EpochMs;
  resolved: boolean;
  assignee: number | null;
  reactions: unknown[];
}

// E-011
export interface Checklist {
  id: string;
  name: string;
  items: { name: string; resolved: boolean; assignee: number | null; parent: string | null; orderindex: number }[];
  resolved: number;
  unresolved: number;
  show_completed: boolean;
}

// E-012
export interface Dependency {
  task_id: string; // blocked
  depends_on: string; // blocking
  type: number;
  lag_ms: number | null;
}

// E-013
export interface User {
  id: number;
  username: string;
  initials: string;
  color: string;
  profilePicture: string | null;
  timezone: string;
  country: string | null; // ISO code, set by the Phone field flag menu
  task_layout: "full_screen" | "modal" | "sidebar";
}

// E-014
export interface HistoryItem {
  history_id: string;
  field: string;
  before: unknown;
  after: unknown;
  relationships: { type: string; object_type: "space" | "folder" | "list" }[];
}
