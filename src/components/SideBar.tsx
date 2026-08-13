import './SideBar.css';
import {
  Home,
  User,
  MessageSquare,
  UserPlus,
  SquareAsterisk,
  Briefcase,
  ArrowRightLeft,
  Users,
  FileText,
  Store,
  CreditCard,
  CheckCircle2
} from 'lucide-react';

export default function SideBar() {
  const menuItems = [
    { icon: Home, label: 'Início' },
    { icon: User, label: 'Perfil' },
    { icon: MessageSquare, label: 'Mensagens', badge: '1' },
    { icon: UserPlus, label: 'Conectar' },
    { icon: SquareAsterisk, label: 'Avatar' },
    { icon: Briefcase, label: 'Inventário' },
    { icon: ArrowRightLeft, label: 'Trocar' },
    { icon: Users, label: 'Comunidades' },
    { icon: FileText, label: 'Blog' },
    { icon: Store, label: 'Loja Oficial' },
    { icon: CreditCard, label: 'Compre cartões...' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <div className="profile-img-container">
          <img src="/avatar_reidobaska1.png" alt="reidobaska1" />
          <div className="status-indicator"></div>
        </div>
        <div className="profile-info">
          <span className="profile-username">boness27</span>
          <span className="verify-status verified">
            <CheckCircle2 size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} color="#00a2ff" fill="#00a2ff" stroke="#ffffff" />
            Verificada
          </span>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item, index) => (
          <a href="#" key={index} className="menu-item">
            <item.icon size={20} className="menu-icon" />
            <span className="menu-label">{item.label}</span>
            {item.badge && <span className="menu-badge">{item.badge}</span>}
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="roblox-plus-btn">
          Roblox Plus
        </button>
      </div>
    </aside>
  );
}
