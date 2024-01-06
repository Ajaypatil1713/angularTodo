  export interface Task {
    title: string;
    dueDate: Date;
    status: string;
    editing?: boolean; // Add an optional editing property
  }
