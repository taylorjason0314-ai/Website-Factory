export async function loadWorkspace(baseUrl, prospectId) {
  const response = await fetch(`${baseUrl}/prospects/${prospectId}/workspace`);
  if (!response.ok) {
    throw new Error(`Failed to load workspace (${response.status})`);
  }
  return response.json();
}

export async function createProspect(baseUrl, payload) {
  const response = await fetch(`${baseUrl}/prospects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || `POST failed (${response.status})`);
  return data;
}

export async function patchProspect(baseUrl, prospectId, payload) {
  const response = await fetch(`${baseUrl}/prospects/${prospectId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || `PATCH failed (${response.status})`);
  return data;
}
