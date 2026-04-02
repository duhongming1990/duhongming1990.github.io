/**
 * 主题配置 —— 添加新主题只需往数组加一项
 * {
 *   name: '显示名称',
 *   pages: [
 *     { label: '模型名', src: '文件夹/文件名.html' },
 *   ]
 * }
 */
const TOPICS = [
  {
    name: '时序图',
    pages: [
      { label: 'GPT-5.4',         src: 'learn-sequence-diagram/GPT-5.4.html' },
      { label: 'Gemini-3.1-Pro',  src: 'learn-sequence-diagram/Gemini-3.1-Pro.html' },
      { label: 'Doubao-Seed-1.8', src: 'learn-sequence-diagram/Doubao-Seed-1.8.html' },
      { label: 'Claude-Opus-4.6', src: 'learn-sequence-diagram/Claude-Opus-4.6.html' },
    ]
  },
  {
    name: '向量数据库',
    pages: [
      { label: 'GPT-5.4',         src: 'vector-database-guide/GPT-5.4.html' },
      { label: 'Gemini-3.1-Pro',  src: 'vector-database-guide/Gemini-3.1-Pro.html' },
      { label: 'Claude-Opus-4.6', src: 'vector-database-guide/Claude-Opus-4.6.html' },
      { label: 'MiniMax-M2.5',    src: 'vector-database-guide/MiniMax-M2.5.html' },
    ]
  },
  {
    name: '文件系统',
    pages: [
      { label: 'GPT-5.4',         src: 'filesystem-guide/GPT-5.4.html' },
      { label: 'Gemini-3.1-Pro',  src: 'filesystem-guide/Gemini-3.1-Pro.html' },
      { label: 'Claude-Opus-4.6', src: 'filesystem-guide/Claude-Opus-4.6.html' },
      { label: 'MiniMax-M2.5',    src: 'filesystem-guide/MiniMax-M2.5.html' },
      { label: 'GLM-5',           src: 'filesystem-guide/GLM-5.html' },
    ]
  },
  {
    name: 'AI 网关',
    pages: [
      { label: 'GPT-5.4',         src: 'ai-gateway-guide/GPT-5.4.html' },
      { label: 'Gemini-3.1-Pro',  src: 'ai-gateway-guide/Gemini-3.1-Pro.html' },
      { label: 'Claude-Opus-4.6', src: 'ai-gateway-guide/Claude-Opus-4.6.html' },
      { label: 'MiniMax-M2.5',    src: 'ai-gateway-guide/MiniMax-M2.5.html' },
      { label: 'GLM-5',           src: 'ai-gateway-guide/GLM-5.html' },
    ]
  },
];
