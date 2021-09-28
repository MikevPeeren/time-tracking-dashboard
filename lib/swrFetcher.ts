// We are disabling typescript here because it cannot be typed to a specific type
// because it is unknown what will be returned.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetcher = (
  ...args: [input: RequestInfo, init?: RequestInit | undefined]
) => fetch(...args).then((res) => res.json());
