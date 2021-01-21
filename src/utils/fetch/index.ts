export async function fetchData<DATA>(fetchUrl: string) {
  const response = await fetch(fetchUrl);
  const contentType = response.headers.get('content-type');
  const data =
    contentType && contentType.indexOf('application/json') !== -1
      ? await response.json()
      : await response.text();

  if (response.ok) {
    return { data: (data as DATA) || null, headers: response.headers, status: response.status };
  }
  return {
    error: data as string,
    status: response.status,
    headers: response.headers,
    url: response.url,
  };
}
