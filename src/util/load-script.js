export const ORIGINAL_SCRIPT_SRC =
  '//vxml4.plavxml.com/sited/ref/ctrk/1419-91327';
export const DELACON_SCRIPT_ID = 'dynamic-phone-number';

export const loadScript = (
  scriptId,
  scriptSrc,
  isAsync = false,
  isDefer = false
) => {
  let script = document.getElementById(scriptId);
  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.src = scriptSrc;
    script.async = isAsync;
    script.defer = isDefer;
    document.body.appendChild(script);
  }
  return script;
};
