import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { Toaster } from 'react-hot-toast'

// ── Public pages ───────────────────────────────────────────────
import LandingPage from './pages/LandingPage'
import LoginPage   from './pages/LoginPage'

// ── Layouts ────────────────────────────────────────────────────
import LeaderLayout      from './components/layout/LeaderLayout'
import CitizenLayout     from './components/layout/CitizenLayout'
import WardOfficerLayout from './components/layout/WardOfficerLayout'
import DeptLayout        from './components/layout/DepartmentHeadLayout'

// ── Leader / DC pages ──────────────────────────────────────────
import LeaderDashboard   from './pages/leader/DashboardPage'
import LeaderComplaints  from './pages/leader/ComplaintsPage'
import LeaderAnalytics   from './pages/leader/AnalyticsPage'
import LeaderAIInsights  from './pages/leader/AIInsightsPage'
import LeaderDepartments from './pages/leader/DepartmentsPage'
import LeaderWardMap     from './pages/leader/WardMapPage'

// ── Citizen pages ──────────────────────────────────────────────
import CitizenHome       from './pages/citizen/HomePage'
import FileComplaint     from './pages/citizen/FileComplaintPage'
import MyComplaints      from './pages/citizen/MycomplaintPage'
import RTIPage           from './pages/citizen/RTIPage'

// ── Ward Officer pages ─────────────────────────────────────────
import OfficerHome       from './pages/ward_officer/HomePage'
import OfficerComplaints from './pages/ward_officer/ComplaintPage'
import OfficerClusters   from './pages/ward_officer/ClusterPage'
import OfficerOrders     from './pages/ward_officer/DraftOrderPage'

// ── Department Head pages ──────────────────────────────────────
import DeptHome          from './pages/department_head/HomePage'
import DeptRootCause     from './pages/department_head/RootCauseEngine'
import DeptEmployees     from './pages/department_head/EmployessPage'

// ✅ NEW IMPORT (IMPORTANT)
import DepartmentInboxPage from './pages/department_head/DepartmentInboxPage'

// ── Stub page ──────────────────────────────────────────────────
const Soon = ({ title }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60vh',
    gap: 12,
    color: 'var(--ink-light)'
  }}>
    <div style={{ fontSize: 40 }}>🚧</div>
    <div style={{ fontSize: 22 }}>{title}</div>
    <div style={{ fontSize: 13 }}>
      Coming soon — this page is scaffolded and ready.
    </div>
  </div>
)

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>

        <Toaster position="top-right" />

        <Routes>

          {/* ── Public ───────────────── */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* ── Leader ───────────────── */}
          <Route path="/leader" element={<LeaderLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<LeaderDashboard />} />
            <Route path="complaints" element={<LeaderComplaints />} />
            <Route path="analytics" element={<LeaderAnalytics />} />
            <Route path="ai-insights" element={<LeaderAIInsights />} />
            <Route path="departments" element={<LeaderDepartments />} />
            <Route path="ward-map" element={<LeaderWardMap />} />
          </Route>

          {/* ── Citizen ───────────────── */}
          <Route path="/citizen" element={<CitizenLayout />}>
            <Route index element={<CitizenHome />} />
            <Route path="file" element={<FileComplaint />} />
            <Route path="complaints" element={<MyComplaints />} />
            <Route path="rti" element={<RTIPage />} />
            <Route path="chat" element={<Soon title="AI Assistant Chat" />} />
          </Route>

          {/* ── Officer ───────────────── */}
          <Route path="/officer" element={<WardOfficerLayout />}>
            <Route index element={<OfficerHome />} />
            <Route path="complaints" element={<OfficerComplaints />} />
            <Route path="clusters" element={<OfficerClusters />} />
            <Route path="orders" element={<OfficerOrders />} />
            <Route path="employees" element={<Soon title="Field Staff" />} />
            <Route path="escalations" element={<Soon title="Escalations" />} />
          </Route>

          {/* ── Department Head ───────── */}
          <Route path="/department" element={<DeptLayout />}>
            <Route index element={<DeptHome />} />
            <Route path="rootcause" element={<DeptRootCause />} />
            <Route path="employees" element={<DeptEmployees />} />

            {/* ✅ FIXED ROUTE */}
            <Route path="complaints" element={<DepartmentInboxPage />} />

            <Route path="performance" element={<Soon title="Performance Tracker" />} />
            <Route path="orders" element={<Soon title="Issue Orders" />} />
          </Route>

          {/* ── Fallback ─────────────── */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
