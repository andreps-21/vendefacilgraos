interface LogoProps {
  width?: number
  height?: number
  showText?: boolean
  className?: string
}

export function Logo({ width = 40, height = 32, showText = true, className = "" }: LogoProps) {
  // Ajustar viewBox baseado se mostra texto ou não
  const viewBox = showText ? "0 0 200 80" : "0 0 50 80"
  
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox={viewBox} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Ícone da Espiga de Grão */}
      <g transform="translate(10, 15)">
        {/* Espiga de Grão (Amarela) */}
        <path 
          d="M15 5 L15 35 M12 8 L18 8 M11 12 L19 12 M10 16 L20 16 M9 20 L21 20 M8 24 L22 24 M7 28 L23 28 M6 32 L24 32 M5 36 L25 36" 
          stroke="#ffeb3b" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        
        {/* Grãos individuais */}
        <circle cx="15" cy="8" r="1.5" fill="#ffeb3b"/>
        <circle cx="15" cy="12" r="1.5" fill="#ffeb3b"/>
        <circle cx="15" cy="16" r="1.5" fill="#ffeb3b"/>
        <circle cx="15" cy="20" r="1.5" fill="#ffeb3b"/>
        <circle cx="15" cy="24" r="1.5" fill="#ffeb3b"/>
        <circle cx="15" cy="28" r="1.5" fill="#ffeb3b"/>
        <circle cx="15" cy="32" r="1.5" fill="#ffeb3b"/>
        <circle cx="15" cy="36" r="1.5" fill="#ffeb3b"/>
        
        {/* Forma Curva Verde (Folha/Braço) */}
        <path 
          d="M5 40 Q15 25 25 15 Q20 5 15 5 Q10 5 5 15 Q5 25 5 40" 
          fill="#4caf50" 
          opacity="0.9"
        />
      </g>
      
      {/* Texto da Marca (opcional) */}
      {showText && (
        <g transform="translate(45, 20)">
          <text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="600" fill="#424242">
            Vende
          </text>
          
          <text x="0" y="32" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="600" fill="#424242">
            Fácil
          </text>
          
          <text x="0" y="50" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#424242" letterSpacing="1">
            GRÃOS
          </text>
        </g>
      )}
    </svg>
  )
}
