const scriptingEvents = [
  'EventDispatch',
  'TimerInstall',
  'TimerRemove',
  'TimerFire',
  'XHRReadyStateChange',
  'XHRLoad',
  'CompileScript',
  'EvaluateScript',
  'CompileModule',
  'EvaluateModule',
  'StreamingCompileScriptParsing',
  'WasmStreamFromResponseCallback',
  'WasmCompiledModule',
  'WasmCachedModule',
  'WasmModuleCacheHit',
  'WasmModuleCacheInvalid',
  'MarkLoad',
  'MarkDOMContent',
  'TimeStamp',
  'ConsoleTime',
  'UserTiming',
  'RunMicrotasks',
  'FunctionCall',
  'GCEvent',
  'MajorGC',
  'MinorGC',
  'JSFrame',
  'RequestAnimationFrame',
  'CancelAnimationFrame',
  'FireAnimationFrame',
  'RequestIdleCallback',
  'CancelIdleCallback',
  'FireIdleCallback',
  'WebSocketCreate',
  'WebSocketSendHandshakeRequest',
  'WebSocketReceiveHandshakeResponse',
  'WebSocketDestroy',
  'EmbedderCallback',
  'LatencyInfo',
  'GCCollectGarbage',
  'CryptoDoEncrypt',
  'CryptoDoEncryptReply',
  'CryptoDoDecrypt',
  'CryptoDoDecryptReply',
  'CryptoDoDigest',
  'CryptoDoDigestReply',
  'CryptoDoSign',
  'CryptoDoSignReply',
  'CryptoDoVerify',
  'CryptoDoVerifyReply',
]

const renderingEvents = [
  'Animation',
  'RequestMainThreadFrame',
  'BeginFrame',
  'BeginMainThreadFrame',
  'DrawFrame',
  'HitTest',
  'ScheduleStyleRecalculation',
  'RecalculateStyles',
  'UpdateLayoutTree',
  'InvalidateLayout',
  'Layout',
  'UpdateLayerTree',
  'ScrollLayer',
  'MarkFCP',
  'MarkFMP',
  'MarkLCPCandidate',
]

const paintEvents = [
  'PaintSetup',
  'PaintImage',
  'UpdateLayer',
  'Paint',
  'RasterTask',
  'CompositeLayers',
  'MarkFirstPaint',
  'DecodeImage',
  'ResizeImage',
]

function getEventsDur(trace, eventCategories) {
  return (
    trace.traceEvents
      .filter((e) => eventCategories.includes(e.name))
      .reduce((acc, e) => acc + (Number.isInteger(e.tdur) ? e.tdur : 0), 0) /
    1000
  )
}

export function getScriptingDur(trace) {
  return getEventsDur(trace, scriptingEvents)
}

export function getRenderingDur(trace) {
  return getEventsDur(trace, renderingEvents)
}

export function getPaintDur(trace) {
  return getEventsDur(trace, paintEvents)
}
