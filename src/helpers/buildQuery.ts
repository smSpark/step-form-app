export type BuildQueryProps = {
  [key: string]: string | null;
};

export const buildQuery = <T extends BuildQueryProps>(params: T): string => {
  const query = new URLSearchParams();

  Object.keys(params).forEach((key) => {
    const value = params[key];

    if (value) {
      query.set(key, value);
    }
  });

  return `?${query.toString()}`;
};
