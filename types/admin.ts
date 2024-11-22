// src/types/admin.ts
export interface SystemStats {
    totalUsers: number;
    activeUsers: number;
    totalAssessments: number;
    activeAssessments: number;
    systemUptime: number;
    storageUsed: number;
  }
  
  export interface UserDetails {
    id: string;
    name: string;
    email: string;
    role: 'candidate' | 'educator' | 'admin';
    status: 'active' | 'inactive' | 'suspended';
    lastActive: string;
    createdAt: string;
    assessmentsTaken?: number;
    assessmentsCreated?: number;
  }
  
  export interface SystemActivity {
    id: string;
    type: 'user_login' | 'assessment_created' | 'assessment_completed' | 'user_registered';
    description: string;
    userId: string;
    userName: string;
    timestamp: string;
    metadata?: Record<string, any>;
  }