import { Link, useLocation } from 'react-router-dom';
import { TABS } from './navTabs.jsx';

// Mobile-only tab bar. Hidden at the sidebar breakpoint (see .bottom-nav in index.css).
export default function BottomNav() {
  const { pathname } = useLocation();

  return (
    <div className="bottom-nav">
      {TABS.map((tab) => {
        const active = tab.to !== null && pathname === tab.to;
        const iconColor = active ? 'var(--ink)' : 'var(--off-55)';
        const labelColor = active ? 'var(--offwhite)' : 'var(--off-55)';

        const content = (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div
              style={{
                width: 44,
                height: 30,
                borderRadius: 'var(--r-pill)',
                background: active ? 'var(--lime)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {tab.icon(iconColor)}
            </div>
            <span style={{ fontSize: 11, fontWeight: 500, color: labelColor }}>{tab.label}</span>
          </div>
        );

        return tab.to ? (
          <Link key={tab.key} to={tab.to} style={{ textDecoration: 'none' }}>
            {content}
          </Link>
        ) : (
          <div key={tab.key} style={{ opacity: 0.9 }}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
