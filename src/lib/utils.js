// Removing Action id form Mongodb
export const getCleanFormData = (formData) => {
  return Object.fromEntries(
    [...formData.entries()].filter(([key]) => !key.startsWith("$"))
  );
};