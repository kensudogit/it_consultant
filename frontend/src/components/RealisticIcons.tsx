import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 技術士資格アイコン（卒業帽と証明書）
export const EngineerIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
    <path d="M12 9l-3 2v6l3 2 3-2v-6l-3-2z" fill="white" opacity="0.8"/>
    <path d="M9 11h6v2H9v-2z" fill="white"/>
    <path d="M10 13h4v1h-4v-1z" fill="white"/>
  </svg>
);

// 迅速対応アイコン（ロケット）
export const RocketIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5L9.5 5h5L12 2.5z"/>
    <path d="M12 5v12l-2-2V7l2-2z"/>
    <path d="M12 5v12l2-2V7l-2-2z"/>
    <path d="M8 17l4 4 4-4H8z"/>
    <circle cx="12" cy="9" r="1" fill="white"/>
    <path d="M10 11h4v2h-4v-2z" fill="white"/>
  </svg>
);

// サポートアイコン（ヘッドセット）
export const SupportIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
    <path d="M8 14h8v2H8v-2z" fill="white"/>
    <path d="M10 16h4v1h-4v-1z" fill="white"/>
    <circle cx="9" cy="10" r="1" fill="white"/>
    <circle cx="15" cy="10" r="1" fill="white"/>
    <path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="white" opacity="0.6"/>
  </svg>
);

// 時計アイコン（詳細な時計）
export const DetailedClockIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M12 2v2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M12 20v2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M2 12h2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M20 12h2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

// プロジェクトアイコン（チェックリスト）
export const ProjectIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3h18v18H3V3z"/>
    <path d="M7 7h10v2H7V7z" fill="white"/>
    <path d="M7 11h8v1H7v-1z" fill="white"/>
    <path d="M7 14h6v1H7v-1z" fill="white"/>
    <path d="M7 17h4v1H7v-1z" fill="white"/>
    <circle cx="18" cy="6" r="2" fill="white"/>
    <path d="M16 8l2 2" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

// ユーザーアイコン（ビジネスマン）
export const BusinessUserIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
    <path d="M10 12h4v2h-4v-2z" fill="white"/>
    <path d="M11 14h2v1h-2v-1z" fill="white"/>
    <path d="M9 16h6v1H9v-1z" fill="white"/>
  </svg>
);

// 満足度アイコン（星）
export const SatisfactionStarIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    <path d="M12 4l2.47 5.01L20 9.8l-4.33 4.22 1.02 5.96L12 18.77l-4.69 2.47 1.02-5.96L4 9.8l5.53-.79L12 4z" fill="white" opacity="0.3"/>
  </svg>
);

// システム開発アイコン（コード）
export const CodeIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 12l2 2 4-4"/>
    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
    <path d="M8 8l-2 4 2 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M16 8l2 4-2 4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

// データベースアイコン
export const DatabaseIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
    <path d="M12 8v8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M8 10h8" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round"/>
    <path d="M8 14h8" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

// クラウドアイコン
export const CloudIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    <path d="M12 12v4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M10 14h4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="8" cy="12" r="1" fill="white"/>
    <circle cx="16" cy="12" r="1" fill="white"/>
  </svg>
);

// モバイルアイコン
export const MobileIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18" stroke="white" strokeWidth="2"/>
    <rect x="7" y="4" width="10" height="12" rx="1" fill="white" opacity="0.3"/>
    <circle cx="12" cy="8" r="1" fill="white"/>
    <path d="M10 11h4v1h-4v-1z" fill="white"/>
    <path d="M10 13h4v1h-4v-1z" fill="white"/>
  </svg>
);

// サーバーアイコン
export const ServerIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
    <rect x="2" y="12" width="20" height="8" rx="2" ry="2"/>
    <circle cx="6" cy="6" r="1" fill="white"/>
    <circle cx="9" cy="6" r="1" fill="white"/>
    <circle cx="6" cy="16" r="1" fill="white"/>
    <circle cx="9" cy="16" r="1" fill="white"/>
    <path d="M12 6h8" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round"/>
    <path d="M12 16h8" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

// ネットワークアイコン
export const NetworkIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="3"/>
    <circle cx="6" cy="6" r="2"/>
    <circle cx="18" cy="6" r="2"/>
    <circle cx="6" cy="18" r="2"/>
    <circle cx="18" cy="18" r="2"/>
    <line x1="6" y1="6" x2="12" y2="12" stroke="white" strokeWidth="2"/>
    <line x1="18" y1="6" x2="12" y2="12" stroke="white" strokeWidth="2"/>
    <line x1="6" y1="18" x2="12" y2="12" stroke="white" strokeWidth="2"/>
    <line x1="18" y1="18" x2="12" y2="12" stroke="white" strokeWidth="2"/>
  </svg>
);

// 設定アイコン
export const SettingsIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
); 