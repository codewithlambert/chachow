import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import { TABS } from './navTabs.jsx';

// Desktop-only nav rail. Hidden below the sidebar breakpoint (see .sidebar in index.css).
export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="sidebar">
      <div style={{ padding: '4px 10px 28px' }}>
        <Logo variant="lockup" tone="light" size={26} />
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {TABS.map((tab) => {
          const active = tab.to !== null && pathname === tab.to;
          const iconColor = active ? 'var(--ink)' : 'var(--off-55)';
          const className = `sidebar-link${active ? ' active' : ''}`;

          const content = (
            <>
              {tab.icon(iconColor)}
              <span>{tab.label}</span>
            </>
          );

          return tab.to ? (
            <Link key={tab.key} to={tab.to} className={className}>
              {content}
            </Link>
          ) : (
            <div key={tab.key} className={className} style={{ cursor: 'default' }}>
              {content}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
