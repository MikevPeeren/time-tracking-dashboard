// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
