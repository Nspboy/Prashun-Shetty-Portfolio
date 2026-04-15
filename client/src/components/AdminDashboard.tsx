interface AdminDashboardProps {
  children?: React.ReactNode;
}

export function AdminDashboard({ children }: AdminDashboardProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
        </div>
        <nav className="space-y-2 px-4">
          <NavLink href="/admin" icon="📊">
            Overview
          </NavLink>
          <NavLink href="/admin/companies" icon="🏢">
            Companies
          </NavLink>
          <NavLink href="/admin/listings" icon="📋">
            Business Listings
          </NavLink>
          <NavLink href="/admin/blog" icon="📝">
            Blog Posts
          </NavLink>
          <NavLink href="/admin/leads" icon="👥">
            Leads
          </NavLink>
          <NavLink href="/admin/subscribers" icon="📧">
            Newsletter
          </NavLink>
          <NavLink href="/admin/analytics" icon="📈">
            Analytics
          </NavLink>
          <NavLink href="/admin/settings" icon="⚙️">
            Settings
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Dashboard Content
          </h2>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Logout
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

interface NavLinkProps {
  href: string;
  icon: string;
  children: React.ReactNode;
}

function NavLink({ href, icon, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
    >
      <span className="text-xl">{icon}</span>
      <span>{children}</span>
    </a>
  );
}
