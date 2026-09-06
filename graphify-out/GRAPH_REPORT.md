# Graph Report - .  (2026-05-06)

## Corpus Check
- Corpus is ~20,224 words - fits in a single context window. You may not need a graph.

## Summary
- 183 nodes · 167 edges · 47 communities detected
- Extraction: 79% EXTRACTED · 21% INFERRED · 0% AMBIGUOUS · INFERRED: 35 edges (avg confidence: 0.76)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_AI Agents O-T-A-R Loop|AI Agents O-T-A-R Loop]]
- [[_COMMUNITY_Cursor IDE Hero Mockup|Cursor IDE Hero Mockup]]
- [[_COMMUNITY_README Tech Stack|README Tech Stack]]
- [[_COMMUNITY_Neural Network Hero Art|Neural Network Hero Art]]
- [[_COMMUNITY_ServiceNow AI Pillars|ServiceNow AI Pillars]]
- [[_COMMUNITY_Next.js Agent Guidance|Next.js Agent Guidance]]
- [[_COMMUNITY_Window Chrome Glyph|Window Chrome Glyph]]
- [[_COMMUNITY_BK App Icon|BK App Icon]]
- [[_COMMUNITY_Blog Slug Data Layer|Blog Slug Data Layer]]
- [[_COMMUNITY_Profile Portrait|Profile Portrait]]
- [[_COMMUNITY_Next.js Wordmark SVG|Next.js Wordmark SVG]]
- [[_COMMUNITY_ServiceNow Plus Claude|ServiceNow Plus Claude]]
- [[_COMMUNITY_File Document Icon|File Document Icon]]
- [[_COMMUNITY_Globe Wireframe Icon|Globe Wireframe Icon]]
- [[_COMMUNITY_Vercel Triangle Mark|Vercel Triangle Mark]]
- [[_COMMUNITY_AnimatedSection Component|AnimatedSection Component]]
- [[_COMMUNITY_Hero Ticker Component|Hero Ticker Component]]
- [[_COMMUNITY_ParallaxSection Component|ParallaxSection Component]]
- [[_COMMUNITY_GitHub LinkedIn Icons|GitHub LinkedIn Icons]]
- [[_COMMUNITY_Navigation Component|Navigation Component]]
- [[_COMMUNITY_Root Layout|Root Layout]]
- [[_COMMUNITY_Home Page|Home Page]]
- [[_COMMUNITY_Blog Layout Shell|Blog Layout Shell]]
- [[_COMMUNITY_SocialIcon Component|SocialIcon Component]]
- [[_COMMUNITY_TiltCard Component|TiltCard Component]]
- [[_COMMUNITY_BlogPostContent Markdown|BlogPostContent Markdown]]
- [[_COMMUNITY_ThemeProvider Toggle|ThemeProvider Toggle]]
- [[_COMMUNITY_ServiceIcon Component|ServiceIcon Component]]
- [[_COMMUNITY_About Component|About Component]]
- [[_COMMUNITY_Dev Server Docs|Dev Server Docs]]
- [[_COMMUNITY_Cursor Autocomplete Labels|Cursor Autocomplete Labels]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Next Env Types|Next Env Types]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Next Config|Next Config]]
- [[_COMMUNITY_Blog Listing Page|Blog Listing Page]]
- [[_COMMUNITY_Experience Component|Experience Component]]
- [[_COMMUNITY_BlogNav Component|BlogNav Component]]
- [[_COMMUNITY_Contact Component|Contact Component]]
- [[_COMMUNITY_Services Component|Services Component]]
- [[_COMMUNITY_SectionHeading Component|SectionHeading Component]]
- [[_COMMUNITY_Skills Component|Skills Component]]
- [[_COMMUNITY_BlogPreview Component|BlogPreview Component]]
- [[_COMMUNITY_Site Data Module|Site Data Module]]
- [[_COMMUNITY_npm Build Script|npm Build Script]]
- [[_COMMUNITY_npm Start Script|npm Start Script]]
- [[_COMMUNITY_npm Lint Script|npm Lint Script]]

## God Nodes (most connected - your core abstractions)
1. `Bhabajyoti Kalita — Portfolio` - 10 edges
2. `Mock code: const agent = { model, tools: [...] }` - 7 edges
3. `Outer dashed agent loop ring (yellow #facc15, r=100)` - 6 edges
4. `ACT (A) — bottom of loop` - 6 edges
5. `ServiceNow AI pipeline diagram` - 6 edges
6. `Next.js` - 5 edges
7. `Next.js differs from training-data expectations` - 5 edges
8. `Portrait subject (smiling young man, dark hair, upper body, relaxed pose)` - 5 edges
9. `Single path: fill-rule and clip-rule evenodd` - 5 edges
10. `OBSERVE (O) — top of loop` - 5 edges

## Surprising Connections (you probably didn't know these)
- `node_modules/next/dist/docs/ official guide` --semantically_similar_to--> `Next.js`  [INFERRED] [semantically similar]
  AGENTS.md → README.md
- `Next.js differs from training-data expectations` --conceptually_related_to--> `Next.js`  [INFERRED]
  AGENTS.md → README.md
- `@AGENTS.md include` --references--> `Next.js differs from training-data expectations`  [EXTRACTED]
  CLAUDE.md → AGENTS.md
- `generateMetadata()` --calls--> `getPostBySlug()`  [INFERRED]
  src/app/blog/[slug]/page.tsx → src/data/blog.ts
- `BlogPostPage()` --calls--> `getPostBySlug()`  [INFERRED]
  src/app/blog/[slug]/page.tsx → src/data/blog.ts

## Hyperedges (group relationships)
- **Declared npm dependencies for the portfolio** — readme_next_js, readme_react, readme_tailwind_css, readme_framer_motion, readme_lucide_react, readme_typescript, readme_eslint [EXTRACTED 1.00]
- **src/ layout described in README** — readme_src_app, readme_src_components, readme_data_ts [EXTRACTED 1.00]
- **Documented npm scripts** — readme_npm_run_dev, readme_npm_run_build, readme_npm_run_start, readme_npm_run_lint [EXTRACTED 1.00]
- **One-file document icon: SVG wrapper, path geometry, gray fill, even-odd rules** — file_static_asset, file_svg_root, file_document_path, file_fill_gray_666, file_evenodd_rules [EXTRACTED 1.00]
- **One-path triangle logomark composition** — vercel_svg_document, vercel_triangle_path, vercel_viewbox [EXTRACTED 1.00]
- **Upper-body portrait: subject, grey shirt, watch, belt, black background** — portrait_subject, portrait_shirt, portrait_watch, portrait_belt, portrait_background [EXTRACTED 1.00]
- **Single wordmark: two black-filled paths inside 394×80 SVG** — next_svg_root, next_path_primary, next_path_secondary, next_fill_000000 [EXTRACTED 1.00]
- **16px globe/wireframe UI icon** — globe_root_svg, globe_group_clipped, globe_path_sphere_grid, globe_clippath_viewport [INFERRED 0.82]
- **Window UI glyph: nested frame + three-dot control cluster + gray fill** — window_outer_frame, window_inner_panel, window_three_control_circles, window_fill_666 [EXTRACTED 1.00]
- **Observe → Think → Act → Reflect agent loop** — ai_agents_step_observe, ai_agents_step_think, ai_agents_step_act, ai_agents_step_reflect, ai_agents_flow_arrows [EXTRACTED 1.00]
- **Floating capability chips around the loop (API, CODE, SEARCH, MEMORY)** — ai_agents_tool_api, ai_agents_tool_code, ai_agents_tool_search, ai_agents_tool_memory [EXTRACTED 1.00]
- **Callouts: AI Autocomplete, Agent Mode, Multi-file Edits as paired feature themes** — cursor_tips_callout_ai_autocomplete, cursor_tips_callout_agent_mode, cursor_tips_callout_multi_file_edits [EXTRACTED 1.00]
- **Mock agent tool list: search, edit, run as one array** — cursor_tips_tools_search, cursor_tips_tools_edit, cursor_tips_tools_run [EXTRACTED 1.00]
- **Predict–Automate–Assist–Generate pipeline** — servicenow_ai_predict, servicenow_ai_automate, servicenow_ai_assist, servicenow_ai_generate, servicenow_ai_arrows [EXTRACTED 0.90]
- **Three-layer neural network motif (input, hidden, output)** — ai_intro_input_layer_neurons, ai_intro_connections_input_to_hidden, ai_intro_hidden_layer_neurons, ai_intro_connections_hidden_to_output, ai_intro_output_layer_neuron [EXTRACTED 1.00]
- **ServiceNow ↔ Claude via REST** — servicenow_claude_sn_panel, servicenow_claude_rest_api, servicenow_claude_claude_panel, servicenow_claude_bidirectional_lines [EXTRACTED 0.88]
- **Single app icon mark: amber tile + dark BK monogram** — icon_rounded_background, icon_monogram_bk, icon_fill_facc15, icon_fill_0f172a [EXTRACTED 1.00]

## Communities

### Community 0 - "AI Agents O-T-A-R Loop"
Cohesion: 0.22
Nodes (15): 800×400 canvas, rounded rect background (rx=16), Blog diagram SVG (AI agent loop + tools), Four gray arrows connecting O→T→A→R→O, Linear gradient bg2 (#0f172a → #172033), Inner guide ring (sky #38bdf8, r=60), Outer dashed agent loop ring (yellow #facc15, r=100), ACT (A) — bottom of loop, OBSERVE (O) — top of loop (+7 more)

### Community 1 - "Cursor IDE Hero Mockup"
Cohesion: 0.18
Nodes (13): Mock code: const agent = { model, tools: [...] }, Low-opacity amber rect suggesting inline AI completion glow, Diagonal slate gradient background (bg5 #0f172a → #1e293b), Blog hero illustration (800×400) for Cursor IDE tips, Side label: Agent Mode, Side label: Multi-file Edits, Rounded code editor window chrome (#172033 stroke #293548), Footer wordmark “CURSOR IDE” (letter-spaced) (+5 more)

### Community 2 - "README Tech Stack"
Cohesion: 0.18
Nodes (11): Bhabajyoti Kalita — Portfolio, src/data/data.ts, eslint, framer-motion, lucide-react, Node.js v18+, npm, react / react-dom (+3 more)

### Community 3 - "Neural Network Hero Art"
Cohesion: 0.2
Nodes (11): AI intro blog hero graphic (SVG), Caption text: ARTIFICIAL INTELLIGENCE, Line segments from middle column to right output neuron (yellow strokes), Line segments from left column neurons to middle column (yellow strokes), Rounded rectangle background (dark slate gradient), Small decorative circles (yellow, cyan, green, pink accents), Linear gradient accent1 (#facc15 → #f59e0b), Linear gradient bg1 (#0f172a → #1e293b) (+3 more)

### Community 4 - "ServiceNow AI Pillars"
Cohesion: 0.24
Nodes (10): Sequential connector arrows, ASSIST — Virtual Agent, AUTOMATE — Workflows, Slate gradient background, ServiceNow AI pipeline diagram, GENERATE — GenAI, PREDICT — Intelligence, 50% Less MTTR (+2 more)

### Community 5 - "Next.js Agent Guidance"
Cohesion: 0.32
Nodes (8): Heed deprecation notices, node_modules/next/dist/docs/ official guide, Next.js differs from training-data expectations, Rationale: verify behavior against shipped Next.js docs because APIs and structure may differ, @AGENTS.md include, App Router, Next.js, src/app

### Community 6 - "Window Chrome Glyph"
Cohesion: 0.36
Nodes (8): Single path: fill-rule and clip-rule evenodd, Path fill #666 (neutral gray), Inner inset rectangle (content/title area cutout), Next.js/Vite-style public/ folder static asset URL path, Outer rounded window shell (larger rounded rect), Public static window-chrome icon (SVG), SVG root: viewBox 0 0 16×16, xmlns, fill none, Three 0.75-radius circles (traffic-light style controls)

### Community 7 - "BK App Icon"
Cohesion: 0.29
Nodes (8): App favicon SVG (src/app/icon.svg), Glyph color #0f172a (dark slate), Background color #facc15 (amber/yellow), Centered BK initials (text element), Next.js App Router metadata icon file convention, Rounded square background (rx=8, full bleed), SVG root 32×32 viewBox, xmlns, Typography: system-ui stack, 16px, weight 800, middle anchor

### Community 8 - "Blog Slug Data Layer"
Cohesion: 0.33
Nodes (3): getPostBySlug(), BlogPostPage(), generateMetadata()

### Community 9 - "Profile Portrait"
Cohesion: 0.33
Nodes (7): Solid black seamless backdrop, Dark belt with silver-toned buckle (partially visible at lower frame), Grey short-sleeved textured button-down shirt (point collar, top button open), Light-colored shirt buttons along front placket, Portrait subject (smiling young man, dark hair, upper body, relaxed pose), Black wristwatch on left wrist, Profile portrait image (public/profile.png)

### Community 10 - "Next.js Wordmark SVG"
Cohesion: 0.38
Nodes (7): Next.js product wordmark / brand mark, Solid black fill (#000) on path geometry, First path: fill #000, geometric letter strokes (wordmark left/center), Second path: fill #000, remaining strokes including small rounded mark, Default Next.js app static asset under public/, SVG root: xmlns, fill none, viewBox 0 0 394 80, Next.js wordmark SVG (public/next.svg)

### Community 11 - "ServiceNow Plus Claude"
Cohesion: 0.43
Nodes (7): Slate gradient canvas, Bidirectional integration lines, Claude AI capabilities card, ServiceNow + Claude integration diagram, REST API bridge, ServiceNow platform card, SERVICENOW + CLAUDE caption

### Community 12 - "File Document Icon"
Cohesion: 0.4
Nodes (6): Single path: page outline, folded corner, and horizontal rule lines, Rendering: fill-rule evenodd, clip-rule evenodd, Glyph fill color #666 (medium gray), Public static SVG (public/file.svg), SVG root: viewBox 0 0 16 16, fill none, SVG namespace, UI metaphor: generic document/file glyph (page + dog-ear + text bands)

### Community 13 - "Globe Wireframe Icon"
Cohesion: 0.47
Nodes (6): clipPath id=a (0 0 16×16), Icon fill #666, Group with clip-path url(#a), Globe sphere grid paths (meridians/latitudes), SVG root (globe.svg), viewBox 0 0 16 16

### Community 14 - "Vercel Triangle Mark"
Cohesion: 0.4
Nodes (5): Vercel triangle brand mark, Vercel logomark SVG, SVG XML namespace (http://www.w3.org/2000/svg), Right-triangle path (fill #fff), ViewBox 0 0 1155 1000

### Community 15 - "AnimatedSection Component"
Cohesion: 0.5
Nodes (0): 

### Community 16 - "Hero Ticker Component"
Cohesion: 0.67
Nodes (0): 

### Community 17 - "ParallaxSection Component"
Cohesion: 0.67
Nodes (0): 

### Community 18 - "GitHub LinkedIn Icons"
Cohesion: 0.67
Nodes (0): 

### Community 19 - "Navigation Component"
Cohesion: 0.67
Nodes (0): 

### Community 20 - "Root Layout"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Home Page"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Blog Layout Shell"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "SocialIcon Component"
Cohesion: 1.0
Nodes (0): 

### Community 24 - "TiltCard Component"
Cohesion: 1.0
Nodes (0): 

### Community 25 - "BlogPostContent Markdown"
Cohesion: 1.0
Nodes (0): 

### Community 26 - "ThemeProvider Toggle"
Cohesion: 1.0
Nodes (0): 

### Community 27 - "ServiceIcon Component"
Cohesion: 1.0
Nodes (0): 

### Community 28 - "About Component"
Cohesion: 1.0
Nodes (0): 

### Community 29 - "Dev Server Docs"
Cohesion: 1.0
Nodes (2): http://localhost:3000, npm run dev

### Community 30 - "Cursor Autocomplete Labels"
Cohesion: 1.0
Nodes (2): Side label: AI Autocomplete, Amber sparkle glyph (✦) beside editor — AI accent

### Community 31 - "PostCSS Config"
Cohesion: 1.0
Nodes (0): 

### Community 32 - "Next Env Types"
Cohesion: 1.0
Nodes (0): 

### Community 33 - "ESLint Config"
Cohesion: 1.0
Nodes (0): 

### Community 34 - "Next Config"
Cohesion: 1.0
Nodes (0): 

### Community 35 - "Blog Listing Page"
Cohesion: 1.0
Nodes (0): 

### Community 36 - "Experience Component"
Cohesion: 1.0
Nodes (0): 

### Community 37 - "BlogNav Component"
Cohesion: 1.0
Nodes (0): 

### Community 38 - "Contact Component"
Cohesion: 1.0
Nodes (0): 

### Community 39 - "Services Component"
Cohesion: 1.0
Nodes (0): 

### Community 40 - "SectionHeading Component"
Cohesion: 1.0
Nodes (0): 

### Community 41 - "Skills Component"
Cohesion: 1.0
Nodes (0): 

### Community 42 - "BlogPreview Component"
Cohesion: 1.0
Nodes (0): 

### Community 43 - "Site Data Module"
Cohesion: 1.0
Nodes (0): 

### Community 44 - "npm Build Script"
Cohesion: 1.0
Nodes (1): npm run build

### Community 45 - "npm Start Script"
Cohesion: 1.0
Nodes (1): npm run start

### Community 46 - "npm Lint Script"
Cohesion: 1.0
Nodes (1): npm run lint

## Knowledge Gaps
- **56 isolated node(s):** `App Router`, `tailwindcss`, `framer-motion`, `lucide-react`, `typescript` (+51 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Root Layout`** (2 nodes): `RootLayout()`, `layout.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Home Page`** (2 nodes): `Home()`, `page.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Blog Layout Shell`** (2 nodes): `BlogLayout()`, `layout.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `SocialIcon Component`** (2 nodes): `SocialIcon()`, `SocialIcon.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `TiltCard Component`** (2 nodes): `TiltCard.tsx`, `TiltCard()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `BlogPostContent Markdown`** (2 nodes): `renderMarkdown()`, `BlogPostContent.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `ThemeProvider Toggle`** (2 nodes): `ThemeProvider.tsx`, `toggleTheme()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `ServiceIcon Component`** (2 nodes): `ServiceIcon()`, `ServiceIcon.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `About Component`** (2 nodes): `About()`, `About.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Dev Server Docs`** (2 nodes): `http://localhost:3000`, `npm run dev`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Cursor Autocomplete Labels`** (2 nodes): `Side label: AI Autocomplete`, `Amber sparkle glyph (✦) beside editor — AI accent`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Config`** (1 nodes): `postcss.config.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next Env Types`** (1 nodes): `next-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `ESLint Config`** (1 nodes): `eslint.config.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Next Config`** (1 nodes): `next.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Blog Listing Page`** (1 nodes): `page.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Experience Component`** (1 nodes): `Experience.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `BlogNav Component`** (1 nodes): `BlogNav.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Contact Component`** (1 nodes): `Contact.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Services Component`** (1 nodes): `Services.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `SectionHeading Component`** (1 nodes): `SectionHeading.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Skills Component`** (1 nodes): `Skills.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `BlogPreview Component`** (1 nodes): `BlogPreview.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Site Data Module`** (1 nodes): `data.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `npm Build Script`** (1 nodes): `npm run build`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `npm Start Script`** (1 nodes): `npm run start`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `npm Lint Script`** (1 nodes): `npm run lint`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Bhabajyoti Kalita — Portfolio` connect `README Tech Stack` to `Next.js Agent Guidance`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **Why does `Next.js` connect `Next.js Agent Guidance` to `README Tech Stack`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Mock code: const agent = { model, tools: [...] }` (e.g. with `Low-opacity amber rect suggesting inline AI completion glow` and `Side label: Agent Mode`) actually correct?**
  _`Mock code: const agent = { model, tools: [...] }` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `ACT (A) — bottom of loop` (e.g. with `Tool chip: API` and `Tool chip: CODE`) actually correct?**
  _`ACT (A) — bottom of loop` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `App Router`, `tailwindcss`, `framer-motion` to the rest of the system?**
  _56 weakly-connected nodes found - possible documentation gaps or missing edges._