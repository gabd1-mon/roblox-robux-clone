import { useState } from 'react';
import './NavBar.css';
import { Search, Settings, Bell, Menu, CheckCircle2 } from 'lucide-react';
import SendRobuxModal from './SendRobuxModal';
import RobuxIcon from './RobuxIcon';

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="icon-btn menu-btn">
          <Menu size={24} />
        </button>
        <div className="logo">
          <img src="/roblox-logo.png" alt="Roblox" className="roblox-logo-img" />
        </div>
        <nav className="nav-links">
          <a href="#">Destaques</a>
          <a href="#">Mercado</a>
          <a href="#">Criar</a>
          <a href="#" className="active">Robux</a>
        </nav>
      </div>

      <div className="navbar-center">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Pesquisar" />
        </div>
      </div>

      <div className="navbar-right">
        <div className="user-profile">
          <img src="/avatar_reidobaska1.png" alt="reidobaska1" className="avatar-small" />
          <span className="username">reidobaska1</span>
          <CheckCircle2 size={15} className="verified-badge-icon" color="#00a2ff" fill="#00a2ff" stroke="#ffffff" />
        </div>

        <div className="nav-actions">
          <button className="icon-btn"><Bell size={20} /></button>
          <button className="icon-btn"><Settings size={20} /></button>

          <div className="robux-balance">
            <RobuxIcon size={16} className="robux-icon" />
            <span>47.990</span>
          </div>

          <button className="buy-robux-btn" onClick={() => setIsModalOpen(true)}>
            <RobuxIcon size={14} className="robux-icon-small" />
            <span>Enviar</span>
          </button>
        </div>
      </div>

      {isModalOpen && <SendRobuxModal onClose={() => setIsModalOpen(false)} />}
    </header>
  );
}
