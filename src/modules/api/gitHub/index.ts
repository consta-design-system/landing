import { fetchData } from '@/utils/fetch';

export const githubApiUrl = 'https://api.github.com/';

export async function getRepositoryTags(params: { owner: string; repo: string }) {
  return await fetchData<{ name: string }[]>(
    `${githubApiUrl}repos/${params.owner}/${params.repo}/tags`,
  );
}
