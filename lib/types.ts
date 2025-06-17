export interface Investor {
  id: string
  name: string
  email: string
  type: "individual" | "institutional"
  verificationStatus: "pending" | "verified" | "rejected"
  investmentPreferences: {
    sectors: string[]
    stages: string[]
    minInvestment: number
    maxInvestment: number
  }
}

export interface Entrepreneur {
  id: string
  name: string
  email: string
  company: string
  verificationStatus: "pending" | "verified" | "rejected"
}

export interface Project {
  id: string
  title: string
  description: string
  sector: string
  stage: "seed" | "series-a" | "series-b" | "growth"
  fundingGoal: number
  currentFunding: number
  entrepreneurId: string
  status: "draft" | "active" | "funded" | "closed"
  documents: Document[]
  createdAt: Date
  updatedAt: Date
}

export interface Investment {
  id: string
  projectId: string
  investorId: string
  amount: number
  status: "pending" | "confirmed" | "completed"
  createdAt: Date
}

export interface Document {
  id: string
  name: string
  type: string
  url: string
  uploadedAt: Date
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: Date
  category: string
  image: string
}
