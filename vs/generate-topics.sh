#!/usr/bin/env bash
# 扫描当前目录下的主题文件夹，自动生成 topics.js
# 用法: ./generate-topics.sh

set -euo pipefail
cd "$(dirname "$0")"

# 文件夹 -> 显示名称映射（未列出的用文件夹名原样显示）
declare -A NAME_MAP=(
  ["learn-sequence-diagram"]="时序图"
  ["vector-database-guide"]="向量数据库"
  ["filesystem-guide"]="文件系统"
  ["ai-gateway-guide"]="AI 网关"
  ["net-mesh-compare"]="网格网络对比"
  ["promethus"]="Prometheus"
  ["GCJ-02 vs WGS-84"]="GCJ-02 vs WGS-84"
  ["energy-cost-analyzer"]="能耗分析"
)

# 需要跳过的目录
SKIP_DIRS=(".git" "node_modules" ".github" ".claude")

OUTPUT="topics.js"

should_skip() {
  local dir="$1"
  for s in "${SKIP_DIRS[@]}"; do
    [[ "$dir" == "$s" ]] && return 0
  done
  return 1
}

{
  echo "const TOPICS = ["

  first_topic=true
  for dir in */; do
    dir="${dir%/}"

    # 跳过特殊目录
    should_skip "$dir" && continue

    # 必须包含至少一个 .html 文件
    html_files=()
    while IFS= read -r -d '' f; do
      html_files+=("$f")
    done < <(find "$dir" -maxdepth 1 -name '*.html' -print0 | sort -z)

    [[ ${#html_files[@]} -eq 0 ]] && continue

    # 获取显示名称
    name="${NAME_MAP[$dir]:-$dir}"

    if [[ "$first_topic" == "true" ]]; then
      first_topic=false
    else
      echo ""
    fi

    echo "  {"
    echo "    name: '$name',"
    echo "    pages: ["

    for html in "${html_files[@]}"; do
      label="$(basename "$html" .html)"
      printf "      { label: '%-16s src: '%s' },\n" "${label}'," "$html"
    done

    echo "    ]"
    echo "  },"

  done

  echo "];"
} > "$OUTPUT"

echo "✓ 已生成 $OUTPUT（$(grep -c "name:" "$OUTPUT") 个主题）"
