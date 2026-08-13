import { useState, useEffect, useRef } from 'react';
import './SendRobuxModal.css';
import { X, ArrowLeft, CheckCircle } from 'lucide-react';
import RobuxIcon from './RobuxIcon';

interface SendRobuxModalProps {
  onClose: () => void;
}

interface RobloxUser {
  id: number;
  name: string;
  displayName: string;
}

interface RobloxThumbnail {
  targetId: number;
  imageUrl: string;
}

export default function SendRobuxModal({ onClose }: SendRobuxModalProps) {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState<RobloxUser[]>([]);
  const [thumbnails, setThumbnails] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedUser, setSelectedUser] = useState<RobloxUser | null>(null);
  const [amount, setAmount] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const debounceRef = useRef<number | null>(null);

  useEffect(() => {
    if (query.trim().length < 3) {
      setUsers([]);
      setThumbnails({});
      setErrorMsg('');
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);

    const controller = new AbortController();
    const signal = controller.signal;

    debounceRef.current = window.setTimeout(async () => {
      setLoading(true);
      setErrorMsg('');
      
      try {
        let fetchedUsers: RobloxUser[] = [];
        
        // Tenta a busca parcial primeiro (limitado a 1 por minuto para convidados)
        const response = await fetch(`/api/roblox-users/v1/users/search?keyword=${encodeURIComponent(query)}&limit=10`, { signal });
        
        if (response.ok) {
          const data = await response.json();
          if (data && data.data) {
            fetchedUsers = data.data;
          }
        } else if (response.status === 429) {
          // Fallback para busca exata se o limite de busca parcial for atingido
          const exactRes = await fetch(`/api/roblox-users/v1/usernames/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usernames: [query], excludeBannedUsers: true }),
            signal
          });
          
          if (exactRes.ok) {
            const exactData = await exactRes.json();
            if (exactData && exactData.data) {
              fetchedUsers = exactData.data.map((u: any) => ({
                id: u.id,
                name: u.name,
                displayName: u.displayName || u.name
              }));
            }
          } else {
            throw new Error('Rate limit atingido em ambas as APIs');
          }
        } else {
          throw new Error('Erro na busca');
        }

        if (!signal.aborted) {
          setUsers(fetchedUsers);
          
          if (fetchedUsers.length > 0) {
            const userIds = fetchedUsers.map(u => u.id).join(',');
            const thumbRes = await fetch(`/api/roblox-thumbnails/v1/users/avatar-headshot?userIds=${userIds}&size=150x150&format=Png&isCircular=true`, { signal });
            
            if (thumbRes.ok) {
              const thumbData = await thumbRes.json();
              if (thumbData && thumbData.data && !signal.aborted) {
                const thumbsMap: Record<number, string> = {};
                thumbData.data.forEach((t: RobloxThumbnail) => {
                  thumbsMap[t.targetId] = t.imageUrl;
                });
                setThumbnails(thumbsMap);
              }
            }
          } else {
            setErrorMsg('Nenhum usuário encontrado');
          }
        }
      } catch (error: any) {
        if (error.name !== 'AbortError' && !signal.aborted) {
          console.error('Error fetching users:', error);
          setErrorMsg('Limite de buscas muito rápido. Tente o nome exato.');
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    }, 800); // Aumentado para 800ms para evitar spam na API

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      controller.abort();
    };
  }, [query]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header">
          <div className="modal-title">
            <RobuxIcon size={20} className="robux-icon" />
            <h2>Enviar Robux</h2>
          </div>
          <div className="modal-header-right">
            <div className="modal-balance">
              <RobuxIcon size={14} className="robux-icon-small" />
              <span>0</span>
            </div>
            <button className="close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-body">
          {isSuccess ? (
            <div className="success-animation-section">
              <div className="success-icon-container">
                <CheckCircle size={64} className="success-check-icon" color="#00b06f" />
              </div>
              <h2 className="success-title">Envio Realizado!</h2>
              <p className="success-message">
                Você enviou <strong>{amount}</strong> Robux para <strong>{selectedUser?.displayName}</strong>.
              </p>
            </div>
          ) : !selectedUser ? (
            <>
              <div className="search-input-container">
                <input 
                  type="text" 
                  placeholder="Busca por nome de usuário" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {query.trim().length >= 3 && (
                  <div className="search-dropdown">
                    {loading && <div className="dropdown-message">Buscando...</div>}
                    {!loading && errorMsg && <div className="dropdown-message">{errorMsg}</div>}
                    {!loading && !errorMsg && users.length === 0 && <div className="dropdown-message">Nenhum usuário encontrado</div>}
                    {!loading && users.length > 0 && users.map(user => (
                      <div 
                        className="dropdown-user-item" 
                        key={user.id} 
                        onClick={() => {
                          setSelectedUser(user);
                          setAmount('');
                        }}
                      >
                        <div className="avatar-wrapper">
                          <img 
                            src={thumbnails[user.id] || 'https://tr.rbxcdn.com/38c6edcb50633730be4cf28263399ccc/150/150/AvatarHeadshot/Png'} 
                            alt={user.displayName} 
                            className="dropdown-avatar" 
                          />
                        </div>
                        <div className="dropdown-user-info">
                          <span className="dropdown-display-name">{user.displayName}</span>
                          <span className="dropdown-username">@{user.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {query.trim().length < 3 && (
                <div className="friends-section">
                  <h3>Minhas amizades (0)</h3>
                  <div className="no-friends-text">
                    Sem amizades
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="send-amount-section">
              <button className="back-btn" onClick={() => setSelectedUser(null)}>
                <ArrowLeft size={16} />
                <span>Voltar</span>
              </button>
              
              <div className="selected-user-profile">
                <div className="large-avatar-wrapper">
                  <img 
                    src={thumbnails[selectedUser.id] || 'https://tr.rbxcdn.com/38c6edcb50633730be4cf28263399ccc/150/150/AvatarHeadshot/Png'} 
                    alt={selectedUser.displayName} 
                    className="dropdown-avatar" 
                  />
                </div>
                <h3>{selectedUser.displayName}</h3>
                <span className="selected-username">@{selectedUser.name}</span>
              </div>

              <div className="amount-input-wrapper">
                <RobuxIcon size={24} className="robux-icon" />
                <input 
                  type="number" 
                  className="amount-input" 
                  placeholder="0" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="1"
                />
              </div>

              <button 
                className={`confirm-send-btn ${Number(amount) > 0 ? 'active' : ''}`}
                disabled={!amount || Number(amount) <= 0}
                onClick={() => {
                  setIsSuccess(true);
                  setTimeout(() => {
                    onClose();
                  }, 2500);
                }}
              >
                Confirmar Envio
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
