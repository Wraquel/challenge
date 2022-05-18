export const FetchService = {
    call: async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log("error", error);
        return { error: true, message: error };
      }
    },
  };
  