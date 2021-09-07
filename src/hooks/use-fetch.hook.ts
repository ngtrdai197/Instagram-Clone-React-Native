const useFetch = (url: string, depends: any[], options?: RequestInit) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await fetch(url, options).then((result) =>
            result.json()
          );
          setResponse(response);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    },
    !depends.length ? [] : [...depends]
  );
  return [response, error];
};
