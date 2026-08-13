import robuxImg from '../img/robux.png';

interface RobuxIconProps {
  size?: number;
  className?: string;
  fill?: string; // Mantido por compatibilidade, mas a cor da imagem dependerá do arquivo ou de filtros CSS
}

export default function RobuxIcon({ size = 16, className = '' }: RobuxIconProps) {
  return (
    <img 
      src={robuxImg} 
      alt="Robux" 
      width={size} 
      height={size} 
      className={className}
      style={{ objectFit: 'contain', display: 'inline-block' }}
    />
  );
}
