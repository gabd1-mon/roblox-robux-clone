import './MainContent.css';
import { CheckCircle2, ChevronRight, Tag } from 'lucide-react';
import RobuxIcon from './RobuxIcon';
const robuxPackages = [
  { current: '11.000', original: '10.000', bonus: '1000 a mais', price: 'R$ 589,90' },
  { current: '5.250', original: '4.500', bonus: '750 a mais', price: 'R$ 294,90' },
  { current: '3.625', original: '3.150', bonus: '475 a mais', price: 'R$ 199,90' },
  { current: '2.000', original: '1.700', bonus: '300 a mais', price: 'R$ 117,90' },
  { current: '1.500', original: '1.200', bonus: '300 a mais', price: 'R$ 79,90' },
  { current: '1.000', original: '800', bonus: '200 a mais', price: 'R$ 59,00' },
  { current: '500', original: '400', bonus: '100 a mais', price: 'R$ 29,90', highlight: true, label: 'Para você' },
];

const subscriptions = [
  {
    title: 'Roblox Plus',
    price: 'R$ 29,90',
    frequency: '/month',
    features: ['10% de desconto em itens do jogo, avatares e muito mais', 'Servidores privados gratuitos', 'Envie Robux de graça']
  },
  {
    title: 'Plus 500',
    originalPrice: 'R$ 59,80',
    price: 'R$ 53,45',
    frequency: '/month',
    features: ['Tudo no Plus', '+500 Robux todo mês', 'Valor total de R$ 59,80']
  },
  {
    title: 'Plus 1000',
    originalPrice: 'R$ 88,90',
    price: 'R$ 76,90',
    frequency: '/month',
    features: ['Tudo no Plus', '+1.000 Robux todo mês', 'Valor total de R$ 88,90']
  }
];

export default function MainContent() {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        
        <div className="banner">
          <h1 className="banner-title">Aproveite até<br />25% a mais de<br />Robux</h1>
        </div>

        <section className="limited-items-section">
          <div className="section-header">
            <h2 className="section-title">Itens de avatar disponíveis por tempo limitado</h2>
            <span className="pill-badge">Restam 19 dias</span>
          </div>

          <div className="item-card">
            <div className="item-image-container">
              <img src="/golden_crown.png" alt="Coroa Dourada de Ozymandias" className="item-image" />
            </div>
            
            <div className="item-info">
              <h3 className="item-name">Coroa Dourada de Ozymandias</h3>
              <div className="creator-info">
                <span>Roblox</span>
                <CheckCircle2 size={14} className="verified-icon" />
              </div>
            </div>

            <div className="item-footer">
              <div className="price-info">
                <div className="current-price">
                  <RobuxIcon size={18} className="robux-icon" />
                  <span className="price-value">24.000</span>
                </div>
                <div className="original-price">
                  <RobuxIcon size={14} className="robux-icon-small" />
                  <span className="price-strike">22.500</span>
                </div>
                <span className="bonus-pill">1500 a mais</span>
              </div>
              <button className="buy-btn">
                R$ 1.179,90
              </button>
            </div>
          </div>
        </section>

        <section className="robux-packages-section">
          <h2 className="section-title">Pacotes de Robux</h2>
          
          <div className="packages-container">
            {robuxPackages.map((pkg, index) => (
              <div className="package-row" key={index}>
                <div className="package-left">
                  <div className="current-robux">
                    <RobuxIcon size={24} className="robux-icon-large" />
                    <span className="robux-value">{pkg.current}</span>
                  </div>
                  <div className="original-robux">
                    <RobuxIcon size={16} className="robux-icon-small" />
                    <span className="price-strike">{pkg.original}</span>
                  </div>
                  <span className="bonus-pill-small">{pkg.bonus}</span>
                  {pkg.label && (
                    <span className="for-you-label">
                      <Tag size={12} className="tag-icon" />
                      {pkg.label}
                    </span>
                  )}
                </div>
                
                <button className={`buy-pkg-btn ${pkg.highlight ? 'btn-blue' : ''}`}>
                  {pkg.price}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="novidade-section">
          <div className="novidade-header">
            <div className="novidade-title">
              <RobuxIcon size={20} className="robux-icon" />
              <h2>Novidade na Roblox</h2>
            </div>
            <a href="#" className="saiba-mais-link">Saiba mais</a>
          </div>

          <div className="subscriptions-grid">
            {subscriptions.map((sub, index) => (
              <div className="sub-card" key={index}>
                <div className="sub-header">
                  <h3>{sub.title}</h3>
                  <div className="sub-price-info">
                    {sub.originalPrice && <span className="sub-original-price">{sub.originalPrice}</span>}
                    <span className="sub-current-price">{sub.price}</span>
                  </div>
                </div>
                
                <ul className="sub-features">
                  {sub.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <RobuxIcon size={14} className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="sub-btn">
                  {sub.price}{sub.frequency}
                </button>
              </div>
            ))}
            
            <button className="next-arrow-btn">
              <ChevronRight size={24} color="black" />
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}
