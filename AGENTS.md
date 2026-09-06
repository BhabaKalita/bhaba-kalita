<!-- BEGIN:graphify-agent-rules -->
# Project map (Graphify)

Start tasks from **`graphify-out/GRAPH_REPORT.md`** and **`graphify-out/graph.json`** instead of scanning the whole repository. Use the graph to pick files (`source_file`, edges); only broaden reads when the user asks or the graph is missing/stale. See `.cursor/rules/graphify-first.mdc`.
<!-- END:graphify-agent-rules -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
