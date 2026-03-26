export async function loadWorkspace(baseUrl, prospectId) {
  const response = await fetch(`${baseUrl}/prospects/${prospectId}/workspace`);
  if (!response.ok) {
    throw new Error(`Failed to load workspace (${response.status})`);
  }
  return response.json();
}
