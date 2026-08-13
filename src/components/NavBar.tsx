import { useState } from 'react';
import './NavBar.css';
import { Search, Settings, Bell, Menu } from 'lucide-react';
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
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Roblox_Logo_2022.svg" alt="Roblox" style={{ height: '24px', filter: 'brightness(0) invert(1)' }} />
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
          <img src="https://tr.rbxcdn.com/38c6edcb50633730be4cf28263399ccc/150/150/AvatarHeadshot/Png" alt="Avatar" className="avatar-small" />
          <span className="username">reidosrobuxearth</span>
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
