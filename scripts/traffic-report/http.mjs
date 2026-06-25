export async function jsonRequest(url, options = {}, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const resp = await fetch(url, options);
      const text = await resp.text();
      let body;
      try { body = text ? JSON.parse(text) : {}; } catch { body = { raw: text.slice(0, 500) }; }
      if (!resp.ok) {
        if (attempt < retries && resp.status >= 500) {
          await new Promise((r) => setTimeout(r, 1000 * 2 ** attempt));
          continue;
        }
        const err = new Error(`${resp.status} ${resp.statusText}`);
        err.status = resp.status;
        err.body = body;
        throw err;
      }
      return body;
    } catch (err) {
      if (attempt < retries && !err.status) {
        await new Promise((r) => setTimeout(r, 1000 * 2 ** attempt));
        continue;
      }
      throw err;
    }
  }
}
