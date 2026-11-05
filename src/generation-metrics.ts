interface CompletionTiming {
  timings?: { predicted_n?: number; predicted_ms?: number };
  usage?: { completion_tokens?: number };
}

export function generationMetrics(response: CompletionTiming, elapsedMs: number): GenerationMetrics | undefined {
  const tokens = response.timings?.predicted_n ?? response.usage?.completion_tokens;
  if (typeof tokens !== "number" || !Number.isSafeInteger(tokens) || tokens <= 0) return;
  const milliseconds = response.timings?.predicted_ms;
  if (typeof milliseconds === "number" && Number.isFinite(milliseconds) && milliseconds > 0) {
    return { tokens, milliseconds };
  }
  if (elapsedMs > 0) return { tokens, milliseconds: elapsedMs, estimated: true };
}
