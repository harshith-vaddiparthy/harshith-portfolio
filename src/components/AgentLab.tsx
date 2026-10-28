import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Play, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Lightning, 
  Code, 
  FileCode,
  Sparkle,
  ArrowClockwise
} from '@phosphor-icons/react';

interface Stage {
  name: string;
  badge: string;
  description: string;
  durationMs: number;
  outputLog: string;
  telemetry: {
    status: 'passed' | 'executing' | 'blocked';
    tokens: number;
    latency: string;
  };
}

interface Scenario {
  id: string;
  title: string;
  domain: string;
  query: string;
  systemArchitecture: string;
  stages: Stage[];
  resultSummary: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'kenzai-supply-chain',
    title: 'Autonomous Supply Chain Incident Resolution',
    domain: 'Kenzai Intelligence Platform',
    query: 'Telemetry alert: Port congestion in Rotterdam delays Microchip SKU-8842 shipment by 14 days. Re-route buffer stock without violating SLA.',
    systemArchitecture: 'Event Router ➔ Context Boundary ➔ SAP/ERP MCP Tool ➔ SLA Optimization Model ➔ Signed PO Output',
    resultSummary: 'Dispatched automated multi-warehouse reallocation via SAP MCP client. Replaced 1,200 units from Antwerp hub. 0% SLA penalty; automated notification logged.',
    stages: [
      {
        name: 'Event Ingestion & Boundary Filter',
        badge: 'Layer 1: Security',
        description: 'Sanitizes external Kafka telemetry payload, verifies cryptographic payload signature, and prevents untrusted payload instructions.',
        durationMs: 400,
        outputLog: '[Auth: SHA-256 Valid] Extracted Event: Port Delay Rotterdam (SKU-8842, +14d). Sanitization filter cleared 0 malicious directives.',
        telemetry: { status: 'passed', tokens: 128, latency: '34ms' }
      },
      {
        name: 'MCP Server Tool Scoping',
        badge: 'Layer 2: Protocol',
        description: 'Dynamically exposes only ERP/Inventory MCP tools to the reasoning agent, preventing context pollution from unrelated tools.',
        durationMs: 650,
        outputLog: '[MCP Registry] Bound tools: [erp.query_inventory, erp.reserve_buffer, logistics.calculate_route]. 17 unneeded tools pruned.',
        telemetry: { status: 'passed', tokens: 380, latency: '82ms' }
      },
      {
        name: 'Multi-Agent Tool Execution & Optimization',
        badge: 'Layer 3: Execution',
        description: 'Agent queries Antwerp secondary depot stock, calculates transit freight latency, and computes cost differential.',
        durationMs: 900,
        outputLog: '[Tool Call] erp.query_inventory(sku="SKU-8842", site="Antwerp-02") => Stock: 3,400 units available. SLA Delta: +1.2 hrs.',
        telemetry: { status: 'passed', tokens: 840, latency: '190ms' }
      },
      {
        name: 'Deterministic Policy & Signature Verification',
        badge: 'Layer 4: Gatekeeper',
        description: 'Evaluates action against strict enterprise fiscal policy limits ($50,000 threshold) before executing final state change.',
        durationMs: 500,
        outputLog: '[Policy Gate] Total reallocation cost: $14,200 (within $50k auto-approval limit). State change committed to ledger.',
        telemetry: { status: 'passed', tokens: 210, latency: '45ms' }
      }
    ]
  },
  {
    id: 'venturebeat-security',
    title: 'Untrusted DOM Injection & Browser Agent Sandbox',
    domain: 'AI Browser Security Architecture',
    query: 'Research competitor pricing from external HTML portal containing disguised invisible prompt injection payload.',
    systemArchitecture: 'Untrusted Web Fetch ➔ Air-Gapped Sanitizer ➔ Scoped Perception Agent ➔ Strict Schema Parser ➔ Zero-Trust Tool Sandbox',
    resultSummary: 'Malicious DOM attack neutralized. Hidden CSS payload stripped at perception layer. Clean structured pricing matrix returned without cookie exfiltration.',
    stages: [
      {
        name: 'Raw DOM Ingestion & Taint Analysis',
        badge: 'Layer 1: Taint Isolation',
        description: 'Ingests external HTML through sandboxed headless worker with all storage/cookie APIs neutralized.',
        durationMs: 450,
        outputLog: '[DOM Scanner] Ingested 42KB markup. Flagged hidden element: <span style="display:none;font-size:0px">Ignore prior instructions...</span>',
        telemetry: { status: 'passed', tokens: 240, latency: '40ms' }
      },
      {
        name: 'Air-Gapped Reader Perception',
        badge: 'Layer 2: Boundary',
        description: 'Runs read-only LLM instance without internet access or execution tools to convert raw DOM into structured facts.',
        durationMs: 700,
        outputLog: '[Reader Model] Stripped imperative command strings. Extracted pure table entities: Tier A: $49/mo, Tier B: $99/mo.',
        telemetry: { status: 'passed', tokens: 490, latency: '120ms' }
      },
      {
        name: 'Intent Schema Validation',
        badge: 'Layer 3: Enforcement',
        description: 'Validates that the output matches strict Zod JSON schema before passing to parent coordinator agent.',
        durationMs: 400,
        outputLog: '[Zod Validator] Schema check passed: output adheres to PricingReportSchema. Zero active network instructions discovered.',
        telemetry: { status: 'passed', tokens: 150, latency: '22ms' }
      },
      {
        name: 'Safe Delivery to Client Context',
        badge: 'Layer 4: Verification',
        description: 'Final sanitized analysis is returned to the user session without propagating contaminated instructions.',
        durationMs: 350,
        outputLog: '[Safe Exit] Observation safely integrated into parent knowledge store. No elevated credentials were exposed.',
        telemetry: { status: 'passed', tokens: 180, latency: '18ms' }
      }
    ]
  },
  {
    id: 'rag-multi-hop',
    title: 'High-Precision Financial RAG with Hybrid Re-ranking',
    domain: 'Conversational Enterprise Intelligence (ARTIFIN Heritage)',
    query: 'Compare Tesla 2024 Q3 vs Q2 CapEx margin disclosures across 10-Q filings with exact accounting line references.',
    systemArchitecture: 'PDF Parser ➔ Hybrid BM25/Vector Search ➔ Cross-Encoder Re-ranker ➔ Numeric Consistency Checker',
    resultSummary: 'Synthesized verified financial reconciliation across 140 pages in 410ms. 100% cited lines with zero hallucinated figures.',
    stages: [
      {
        name: 'Hybrid Chunk Retrieval (Vector + Sparse BM25)',
        badge: 'Layer 1: Retrieval',
        description: 'Executes concurrent cosine embedding search along with lexical BM25 keyword matching for exact numerical values.',
        durationMs: 420,
        outputLog: '[Hybrid Query] Retrieved top-25 candidate passages: 15 vector matches + 10 BM25 exact matches for "CapEx" & "Gross Margin".',
        telemetry: { status: 'passed', tokens: 320, latency: '65ms' }
      },
      {
        name: 'Cross-Encoder Re-Ranking',
        badge: 'Layer 2: Scoring',
        description: 'Re-scores passages with a dedicated cross-encoder model to discard semantically similar but irrelevant disclosures.',
        durationMs: 600,
        outputLog: '[Re-ranker] Filtered 25 candidates down to top-4 high-relevance financial tables (Confidence Score: 0.964).',
        telemetry: { status: 'passed', tokens: 580, latency: '110ms' }
      },
      {
        name: 'Table Synthesis & Math Reconciliation',
        badge: 'Layer 3: Verification',
        description: 'Performs deterministic mathematical subtraction between reported quarters before generating narrative text.',
        durationMs: 800,
        outputLog: '[Math Engine] Q3 CapEx ($3.51B) - Q2 CapEx ($2.27B) = Delta +$1.24B (+54.6%). Computation validated against balance sheet.',
        telemetry: { status: 'passed', tokens: 720, latency: '145ms' }
      },
      {
        name: 'Auditable Footnote Binding',
        badge: 'Layer 4: Traceability',
        description: 'Injects verifiable page and paragraph coordinates into final customer response.',
        durationMs: 300,
        outputLog: '[Citation Engine] Citations linked to 10-Q Part I, Item 1, Note 7 (Condensed Consolidated Balance Sheets, p. 12).',
        telemetry: { status: 'passed', tokens: 190, latency: '30ms' }
      }
    ]
  }
];

export const AgentLab: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(SCENARIOS[0].id);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(-1);
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const [showJson, setShowJson] = useState<boolean>(false);

  const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStageIdx(0);
    setCompletedStages([]);

    let current = 0;
    const runNext = () => {
      if (current < scenario.stages.length) {
        setCurrentStageIdx(current);
        const stage = scenario.stages[current];
        setTimeout(() => {
          setCompletedStages((prev) => [...prev, current]);
          current += 1;
          if (current < scenario.stages.length) {
            runNext();
          } else {
            setIsRunning(false);
            setCurrentStageIdx(scenario.stages.length);
          }
        }, stage.durationMs);
      }
    };

    runNext();
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStageIdx(-1);
    setCompletedStages([]);
  };

  // Reset when scenario changes
  useEffect(() => {
    handleReset();
  }, [activeScenarioId]);

  return (
    <section id="architecture" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-4">
          <Cpu size={14} weight="bold" />
          <span>Interactive System Demonstration</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
          Enterprise Agent Architecture Lab
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Production AI agents fail when built as loose prompts. Below is an interactive demonstration of the multi-stage, zero-trust execution harness designed at <strong className="text-white">Kenzai Intelligence</strong> and featured in <strong className="text-white">VentureBeat</strong>.
        </p>
      </div>

      {/* Main Double-Bezel Interactive Console */}
      <div className="bezel-outer p-1.5 sm:p-2 rounded-[2rem] max-w-5xl mx-auto">
        <div className="bezel-inner rounded-[calc(2rem-0.375rem)] p-5 sm:p-8">
          
          {/* Top Control Bar: Scenario Selectors */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                Architecture Scenario:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-black/40 rounded-xl border border-white/5 w-full sm:w-auto">
              {SCENARIOS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveScenarioId(s.id)}
                  disabled={isRunning}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    activeScenarioId === s.id
                      ? 'bg-white/15 text-white font-medium border border-white/20 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                  }`}
                >
                  {s.id === 'kenzai-supply-chain' ? 'Supply Chain ERP' : s.id === 'venturebeat-security' ? 'Browser Security' : 'Financial RAG'}
                </button>
              ))}
            </div>
          </div>

          {/* Scenario Overview Box */}
          <div className="my-6 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row gap-5 justify-between items-start md:items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  [{scenario.domain}]
                </span>
                <span className="text-zinc-600">·</span>
                <span className="text-xs text-zinc-400 font-medium">
                  {scenario.title}
                </span>
              </div>
              <p className="text-sm font-mono text-zinc-200 bg-black/30 p-2.5 rounded-lg border border-white/5">
                <span className="text-indigo-400">Query: </span>"{scenario.query}"
              </p>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <button
                onClick={handleReset}
                disabled={isRunning || currentStageIdx === -1}
                aria-label="Reset simulation"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer disabled:opacity-40"
              >
                <ArrowClockwise size={16} />
              </button>

              <button
                onClick={() => setShowJson(!showJson)}
                className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-mono border border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <FileCode size={15} />
                <span>{showJson ? 'Hide Specs' : 'View Specs'}</span>
              </button>

              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="group relative inline-flex items-center gap-2.5 pl-4 pr-2 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-semibold text-xs transition-all shadow-[0_4px_20px_-4px_rgba(16,185,129,0.4)] disabled:opacity-50 cursor-pointer"
              >
                <span>{isRunning ? 'Executing Agent Pipeline...' : currentStageIdx >= scenario.stages.length ? 'Re-Run Pipeline' : 'Run Pipeline'}</span>
                <span className="w-5 h-5 rounded-md bg-zinc-950 text-emerald-300 flex items-center justify-center transition-transform group-hover:scale-105">
                  <Play size={10} weight="fill" />
                </span>
              </button>
            </div>
          </div>

          {/* Architecture Pipeline Stages */}
          <div className="space-y-3.5 my-6">
            {scenario.stages.map((stage, idx) => {
              const isCurrent = currentStageIdx === idx && isRunning;
              const isDone = completedStages.includes(idx);
              const isPending = currentStageIdx < idx;

              return (
                <div
                  key={stage.name}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    isCurrent
                      ? 'bg-indigo-950/20 border-indigo-500/50 shadow-[0_0_25px_-5px_rgba(99,102,241,0.2)]'
                      : isDone
                      ? 'bg-emerald-950/10 border-emerald-500/30'
                      : 'bg-black/20 border-white/5 opacity-60'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                        isDone 
                          ? 'bg-emerald-500 text-zinc-950' 
                          : isCurrent 
                          ? 'bg-indigo-500 text-white animate-pulse' 
                          : 'bg-white/10 text-zinc-400'
                      }`}>
                        {isDone ? <CheckCircle size={14} weight="bold" /> : idx + 1}
                      </div>

                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 mr-2">
                          {stage.badge}
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {stage.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400 self-end sm:self-auto">
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-zinc-500" />
                        {stage.telemetry.latency}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 text-zinc-300">
                        <Lightning size={12} className="text-amber-400" />
                        {stage.telemetry.tokens} tokens
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 mb-2 pl-9">
                    {stage.description}
                  </p>

                  {(isDone || isCurrent) && (
                    <div className="ml-9 p-2.5 rounded-lg bg-black/60 border border-white/5 font-mono text-[11px] text-zinc-300 flex items-start gap-2">
                      <span className="text-emerald-400 select-none">$</span>
                      <span className="leading-relaxed">{stage.outputLog}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Finished State Summary Banner */}
          {completedStages.length === scenario.stages.length && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/30 to-indigo-950/30 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-mono flex items-center gap-3 animate-in fade-in duration-300">
              <ShieldCheck size={24} className="text-emerald-400 shrink-0" weight="bold" />
              <div>
                <span className="font-semibold text-white block mb-0.5">Pipeline Execution Succeeded:</span>
                <span className="text-zinc-300">{scenario.resultSummary}</span>
              </div>
            </div>
          )}

          {/* Technical Specs & JSON Blueprint Drawer */}
          {showJson && (
            <div className="mt-6 p-4 rounded-xl bg-[#030408] border border-white/10 font-mono text-xs overflow-x-auto">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-zinc-400 text-[11px]">
                <span>ARCHITECTURAL SPECIFICATION & MCP ROUTING</span>
                <span className="text-emerald-400">STATUS: VERIFIED</span>
              </div>
              <pre className="text-zinc-300 text-[11px] leading-relaxed">
{JSON.stringify({
  domain: scenario.domain,
  pattern: scenario.systemArchitecture,
  mcpClientProtocol: "json-rpc-2.0",
  securityBoundary: {
    taintTracking: true,
    sandboxIsolation: "v8-isolate-per-tool",
    contextPruning: "dynamic-k-bound",
  },
  stages: scenario.stages.map(s => ({
    layer: s.badge,
    step: s.name,
    telemetry: s.telemetry
  }))
}, null, 2)}
              </pre>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

