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
  CreditCard 
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
          <img src="https://tr.rbxcdn.com/38c6edcb50633730be4cf28263399ccc/150/150/AvatarHeadshot/Png" alt="Profile" />
          <div className="status-indicator"></div>
        </div>
        <div className="profile-info">
          <span className="verify-status">Não verificada</span>
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
