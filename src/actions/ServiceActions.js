export const serviceActionPending = type => ({
  type
});

export const serviceActionError = (error, type) => ({
  type,
  error
});

export const serviceActionSuccess = (payload, type) => ({
  type,
  payload
});
